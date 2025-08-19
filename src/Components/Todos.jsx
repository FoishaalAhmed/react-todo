export default function Todos() {
    return (
        <>
            <li className="flex items-center justify-between group">
                <div className="flex items-center">
                    <input type="checkbox" className="w-5 h-5 rounded" />
                    <span className="ml-3 text-gray-700">Nothing to do</span>
                </div>
                <span className="hidden group-hover:inline-block text-white text-xs font-bold uppercase cursor-pointer bg-red-500 p-1 rounded">remove</span>
            </li>
        </>
    )
}