import { useState } from 'react'

const ToDoList = () => {
    const [newTodo, setNewTodo] = useState('');
    const [editingToDo, setEditingTodo] = useState(null);
    const [buttonText, setButtonText] = useState('Submit');

    const [todos, setTodos] = useState(() => {
        const storedItem = localStorage.getItem('todos')
        return storedItem ? JSON.parse(storedItem) : []
    })


    const handleChangeInput = (e) => {
        setNewTodo(e.target.value);
    }

    const handleToDoSubmit = (event) => {
        event.preventDefault();
        if (!newTodo.trim()) return;

        if (editingToDo !== null) {
            const updateToDo = todos.map((todo) => {
                if (todo.id === editingToDo) {
                    return { ...todo, text: newTodo }
                } else {
                    return todo;
                }
            })
            setTodos(updateToDo);
            setEditingTodo(null);
            setNewTodo('')
            setButtonText('Submit');
        }
        else {
            setTodos([...todos, { id: Date.now(), text: newTodo }]);
            setNewTodo('');
        }

    }

    localStorage.setItem('todos', JSON.stringify(todos))


    const handleDelete = (id) => {
        const updateToDos = todos.filter((todo) => todo.id !== id);
        setTodos(updateToDos);
    }
    const handleEditToDo = (id) => {
        const toDoEdit = todos.find((todo) => todo.id === id);
        setEditingTodo(id);
        setNewTodo(toDoEdit.text);
        setButtonText('Save');
    }

    return (
        <div>
            <h1>To Do List</h1>
            <form onSubmit={handleToDoSubmit}>
                <input type="text" value={newTodo} onChange={handleChangeInput} />
                <button type='submit'>{buttonText}</button>
                {
                    editingToDo !== null && (
                        <button type='button' onClick={() => setEditingTodo(null)}>Cancel</button>
                    )
                }
            </form>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span>{todo.text}</span>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                            <button onClick={() => handleEditToDo(todo.id)}>Edit</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ToDoList