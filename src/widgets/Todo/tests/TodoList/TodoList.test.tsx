import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import {TodoList} from '../../../Todo';

const mockTasks = [
    { id: 1, text: 'Task 1', is_done: false },
    { id: 2, text: 'Task 2', is_done: true },
    { id: 3, text: 'Task 3', is_done: false },
];

test('displays all tasks', () => {
    render(<TodoList toDoList={mockTasks} setToDoList={vi.fn()} />);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
});
