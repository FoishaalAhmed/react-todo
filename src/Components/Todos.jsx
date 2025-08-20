import { useState } from "react"

export default function Todos({todos, onComplete, onDelete}) {

    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            {todos.length > 0 ? todos.map((todo) => (
                <li key={todo.id} className="flex items-center justify-between group">
                    <div className="flex items-center">
                        <input type="checkbox" className="w-5 h-5 rounded" checked={todo.isCompleted} onClick={() => onComplete(todo.id)} onChange={(e) => setIsChecked(e.target.checked)}/>
                        <span className={`ml-3 text-gray-700 ${todo.isCompleted && 'line-through'}`}>{todo.text}</span>
                    </div>
                    <span onClick={() => onDelete(todo.id)} className="hidden group-hover:inline-block text-white text-xs font-bold uppercase cursor-pointer bg-red-500 p-1 rounded">remove</span>
                </li>
            )) : (
                <p className="text-gray-500 font-bold border-2 text-center border-gray-500 rounded p-4">Nothing to show</p>
            )}
            
        </>
    )
}