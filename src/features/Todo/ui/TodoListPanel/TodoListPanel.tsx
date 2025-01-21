import {Dispatch, FC, SetStateAction, useMemo} from "react";
import {ITodoItem} from "../../../../entities/Todo";
import {Button, Flex, Radio, RadioGroupProps} from "antd";
interface ITodoListPanel {
    todoList: ITodoItem[]
    setToDoList: Dispatch<SetStateAction<ITodoItem[]>>
    activeKey: string
    setActiveKey: Dispatch<SetStateAction<string>>
}
export const TodoListPanel:FC<ITodoListPanel> = (
    {
        todoList,
        setToDoList,
        activeKey,
        setActiveKey
    }) => {

    const activeLeft = useMemo(() => {
        return todoList.filter(t => !t.is_done).length
    }, [todoList])

    const options:RadioGroupProps['options'] = [
        { value: 'all', label: 'All' },
        { value: 'active', label: 'Active' },
        { value: 'completed', label: 'Completed' }
    ]

    const handleRemoveCompleted = () => {
        setToDoList(prev => prev.filter(t => !t.is_done))
    }

    return (
        <Flex
            align={"center"}
            justify={"space-between"}
        >
            <p>
                {activeLeft} items left
            </p>
            <Radio.Group
                value={activeKey}
                onChange={e => setActiveKey(e.target.value)}
                options={options}
                optionType={"button"}
                buttonStyle={'solid'}
            />
            <Button
                type={"primary"}
                danger
                onClick={handleRemoveCompleted}
            >
                Clear completed
            </Button>
        </Flex>
    )
}
