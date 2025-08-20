export default function Todos({todos, onComplete, onDelete}) {
    return (
        <>
            {todos.length > 0 ? todos.map((todo) => (
                <li key={todo.id} className="flex items-center justify-between group">
                    <div className="flex items-center">
                        <input type="checkbox" className="w-5 h-5 rounded" checked={todo.isCompleted} onClick={() => onComplete(todo.id)}/>
                        <span className={`ml-3 text-gray-700 ${todo.isCompleted && 'line-through'}`}>{todo.text}</span>
                    </div>
                    <span onClick={() => onDelete(todo.id)} className="hidden group-hover:inline-block text-white text-xs font-bold uppercase cursor-pointer bg-red-500 p-1 rounded">remove</span>
                </li>
            )) : ''}
            
        </>
    )
}