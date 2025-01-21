import {Dispatch, FC, SetStateAction, useMemo, useState} from "react";
import {ITodoItem, TodoListItem} from "../../../../entities/Todo";
import {TodoAddInput, TodoListPanel} from "../../../../features/Todo";
import cls from './TodoList.module.css'
import {List} from "antd";
interface ITodoList {
    toDoList: ITodoItem[]
    setToDoList: Dispatch<SetStateAction<ITodoItem[]>>
}
export const TodoList:FC<ITodoList> = ({toDoList, setToDoList}) => {
    const [activeKey, setActiveKey] = useState<string>('all')

    const filterList = () => {
        switch (activeKey) {
            case 'active':
                return toDoList.filter(t => !t.is_done)
            case 'completed':
                return toDoList.filter(t => t.is_done)
            default:
                return toDoList
        }
    }

    const listData = useMemo(filterList, [toDoList, activeKey])

    return (
        <div className={cls.list}>
            <TodoAddInput setToDoList={setToDoList} />
            <List
                dataSource={listData}
                className={cls.list__wrapper}
                renderItem={todo => <TodoListItem
                    setToDoList={setToDoList}
                    todo={todo}
                />}
            />
            <TodoListPanel
                todoList={toDoList}
                setToDoList={setToDoList}
                activeKey={activeKey}
                setActiveKey={setActiveKey}
            />

        </div>
    )
}
