import { useState } from "react"

export default function NewTodo({setTodos}) {

    const [newTodo, setNewTodo] = useState('');
    const [visible, setVisibility] = useState(false);

    const addNewTodo = (e) => {
        e.preventDefault();
        if (!newTodo.trim()) return; // prevent empty todos
        setTodos(todos => [...todos, {id: todos.length + 1, text: newTodo, isCompleted: false}]);
        setNewTodo('');
    }

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <div className="flex-grow">
                    {
                    !visible ? (
                        <h2 className="text-lg font-semibold text-gray-700">Todo List</h2>
                    ) : (
                        <form onSubmit={addNewTodo} className="w-full">
                            <input 
                                type="text" 
                                className="w-full p-2 border border-gray-300 bg-gray-200 rounded text-black" 
                                placeholder="What to do?" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
                            />
                        </form>
                    )
                    }
                </div>

                <button 
                    className={`font-bold cursor-pointer flex items-center justify-center ${visible ? 'text-red-500 text-6xl -mt-2' : 'text-blue-500 text-4xl'}`} 
                    onClick={() => setVisibility(!visible)}
                >
                    {visible ? '-' : '+'}
                </button>
            </div>

        </>
    )
}