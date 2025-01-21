import {Dispatch, FC, SetStateAction, useCallback} from "react";
import {ITodoItem} from "../../model/types/ITodo.ts";
import {Checkbox, Flex, List} from "antd";
import cls from './TodoListItem.module.css'
interface ITodoListItem {
    todo: ITodoItem
    setToDoList: Dispatch<SetStateAction<ITodoItem[]>>
}
export const TodoListItem:FC<ITodoListItem> = ({todo, setToDoList}) => {

    const {id, text, is_done} = todo

    const handleClick = useCallback((id: number) => {
        setToDoList(prev => prev.map(
            t => t.id === id ? {...t, is_done: !t.is_done} : t
        ))
    }, [setToDoList])

    return (
        <List.Item
            className={`${cls.item} ${is_done && cls.itemActive}`}
            key={id}
            onClick={() => handleClick(id)}
        >
            <Flex gap={20}>
                <Checkbox checked={is_done} />
                <span>{text}</span>
            </Flex>
        </List.Item>
    )
}
