import Todos from "./Components/Todos"
import NewTodo from "./Components/NewTodo"

function App() {

  return (
    <>
        <div className="h-screen w-screen bg-[url('../public/images/background.jpeg')] bg-cover bg-center">
            <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
                <div className="bg-white rounded-2xl shadow-md w-96 p-6">
                    
                    <NewTodo />

                    <hr className="mb-4 border-blue-500"/>

                    <ul className="space-y-3">
                        <Todos />
                        <Todos />
                        <Todos />
                    </ul>
                </div>
                <p className="text-gray-700">Simple todo created by <span className="font-bold">Foisal</span></p>
            </div>
        </div>
    </>
  )
}

export default App
