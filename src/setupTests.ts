import {afterEach, vi} from "vitest";
import {cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/vitest"

window.matchMedia = window.matchMedia || (() => {
    return {
        matches: false,
        // @ts-ignore
        addEventListener: (type, listener) => {
        },
        // @ts-ignore
        removeEventListener: (type, listener) => {
        }
    };
});

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});

afterEach(()=>{
    cleanup()
})
