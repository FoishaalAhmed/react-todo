import React , { useState } from "react";
import Todos from "./Components/Todos"
import NewTodo from "./Components/NewTodo"

function App() {

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Learn React",
            isCompleted: true
        },
        {
            id: 2,
            text: "Learn Vue",
            isCompleted: false
        },
        {
            id: 3,
            text: "Learn Angular",
            isCompleted: false
        }
    ]);

    const onComplete = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
    }

    const onDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

  return (
    <>
        <div className="h-screen w-screen bg-[url('../public/images/background.jpeg')] bg-cover bg-center">
            <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
                <div className="bg-white rounded-2xl shadow-md w-96 p-6">
                    
                    <NewTodo setTodos={setTodos} />

                    <hr className="mb-4 border-blue-500"/>

                    <ul className="space-y-3">
                        <Todos todos={todos} onComplete={onComplete} onDelete={onDelete}/>
                    </ul>
                </div>
                <p className="text-gray-700">Simple todo created by <span className="font-bold">Foisal</span></p>
            </div>
        </div>
    </>
  )
}

export default App
