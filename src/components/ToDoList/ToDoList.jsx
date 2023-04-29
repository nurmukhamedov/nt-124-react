import { useState } from 'react'

const ToDoList = () => {
    const [newTodo, setNewTodo] = useState('');

    const [todos, setTodos] = useState(() => {
        const storedItem = localStorage.getItem('todos')
        return storedItem ? JSON.parse(storedItem) : []
    })

    const handleToDoSubmit = (event) => {
        event.preventDefault();
        if (!newTodo.trim()) return;

        setTodos([...todos, { id: Date.now(), text: newTodo }]);
        setNewTodo('');
    }

    localStorage.setItem('todos', JSON.stringify(todos))


    const handleChangeInput = (e) => {
        setNewTodo(e.target.value);
    }

    const handleDelete = (id) => {
        const updateToDos = todos.filter((todo) => todo.id !== id);
        setTodos(updateToDos)
    }

    return (
        <div>
            <h1>To Do List</h1>
            <form onSubmit={handleToDoSubmit}>
                <input type="text" value={newTodo} onChange={handleChangeInput} />
                <button type='submit'>Add todo</button>
                <ul>
                    {
                        todos.map((todo) => (
                            <li key={todo.id}>
                                <span>{todo.text}</span>
                                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>

            </form>
        </div>
    )
}

export default ToDoList