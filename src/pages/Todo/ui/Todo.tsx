import {FC, useState} from "react";
import cls from './Todo.module.css'
import {ITodoItem} from "../../../entities/Todo";
import {TodoList} from "../../../widgets/Todo";
export const Todo:FC = () => {

    const [toDoList, setToDoList] = useState<ITodoItem[]>([])

    return (
        <section className={cls.todo}>
            <TodoList toDoList={toDoList} setToDoList={setToDoList}/>
        </section>
    )
}
