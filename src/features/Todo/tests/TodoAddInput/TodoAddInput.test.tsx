import {render, screen, fireEvent} from '@testing-library/react';
import {expect, vi} from 'vitest';
import {TodoAddInput} from '../../../../features/Todo';

const mockSetToDoList = vi.fn();

test('input field works correctly', () => {
    render(<TodoAddInput setToDoList={mockSetToDoList} />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'New Task' } });

    expect(input).toHaveValue('New Task');
});

