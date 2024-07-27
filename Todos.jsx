import React, { useEffect, useState } from "react";

const Todos = () => {
    const [Task, setTask] = useState("");
    const [Todos, setTodos] = useState([]);
    // const [Todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
    //[{value:"learn react", isCompleted:false, id:time}, {}, {}]

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddtodo = () => {
        const newTodo = Todos.map((todo) => {
            return { ...todo };
        });
        newTodo.push(
            {
                value: Task,
                isCompleted: false,
                id: new Date().getTime()
            }
        );
        setTodos(newTodo);
        setTask('');
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAddtodo();
        }
    };

    const handleRemoveTodo = (id) => {
        const filterTodos = Todos.filter(item => item.id !== id);
        setTodos(filterTodos);
        // setTodos(Todos.filter(item => item.id !== id));
    };

    const handleComplete = (id) => {
        const newtodos = Todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
        })
        setTodos(newtodos);

        // setTodos(Todos.map(todo =>
        // todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        // ));
    };

    // useEffect(() => {
    //   localStorage.setItem("todos", JSON.stringify(Todos))
    // }, [Todos]);
    
    return (
        <div>
            <div>
                <input
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter You Todo"
                    value={Task}
                />
                <button onClick={handleAddtodo}>Add Task</button>
            </div>
            <div>
                {
                    Todos.map((todo) => {
                        return (
                            <div
                                style={{ margin: ".5rem" }}
                                key={todo.id}
                            >
                                <span 
                                style={{
                                    marginRight: "2rem",
                                    textDecoration: todo.isCompleted ? "line-through" : "none"
                                 }}
                                >
                                    {
                                    todo.value
                                    }
                                </span>
                                <span onClick={() => { handleComplete(todo.id) }} style={{ marginRight: "2rem" }}>✔️</span>
                                <span onClick={() => { handleRemoveTodo(todo.id) }}>❌</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Todos;
