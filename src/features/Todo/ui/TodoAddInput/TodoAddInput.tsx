import {Dispatch, FC, SetStateAction, useState} from "react";
import {Input, message} from "antd";
import {ITodoItem} from "../../../../entities/Todo";
interface ITodoAddInput {
    setToDoList: Dispatch<SetStateAction<ITodoItem[]>>
}
export const TodoAddInput:FC<ITodoAddInput> = ({setToDoList}) => {

    const [value, setValue] = useState<string>('')

    const addToDoFunc = (text: string) => {

        if (text.trim() === '') {
            message.warning('Введите в поле текст')
            return;
        }

        setToDoList(prev => [...prev,
            { id: Date.now(), is_done: false, text }
        ])
    }
    const handleEnter = (text: string) => {
        addToDoFunc(text)
        setValue('')
    }

    return (
        <Input
            placeholder={'What needs to be done?'}
            value={value}
            onChange={e => setValue(e.target.value)}
            // @ts-ignore
            onPressEnter={e => handleEnter(e.target.value)}
        />
    )
}
