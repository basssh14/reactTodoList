import React, { useState } from "react"
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")
  const changeTodo = (event) => {
    setNewTodo(event.target.value)
  }
  const addTodo = (e) => {
    e.preventDefault()
    let todoInfo = {
      "todo": newTodo,
      "completed": false
    }
    setTodos([...todos, todoInfo])
    setNewTodo("")
  }
  const changeTodoStatus = (event) => {
    let newTodos = [...todos]
    newTodos[event.target.id].completed = !newTodos[event.target.id].completed
    setTodos(newTodos)
  }
  const deleteTodo = (event) => {
    let newTodos = [...todos]
    newTodos.splice(event.target.id, 1)
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <div className="container w-full m-0 p-0">
        <div className="title w-full text-center mt-5">
          <h1 className="text-black text-6xl font-light">9 Jun Todos</h1>
        </div>
        <div className="searchBar mt-10 mb-5  relative w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Todo..."
            className="w-10/12 border-black border-2 h-10 p-5 rounded-lg"
            value={newTodo}
            onChange={(event) => changeTodo(event)}
          />
          <button className=" ml-5 w-20 border-black border-2 h-11 rounded-lg absolute bottom-0 right-0 text-center align-middle" onClick={(e) => addTodo(e)}>
            Add
          </button>
        </div>
        <div className="todos w-1/2 border-black border-2 h-auto rounded-lg mx-auto align-middle relative">
          <table className="w-full m-0 p-0">
            {todos !== null ? (
              todos.map((todo, index) => (
                <tr className="w-full m-0 p-0">
              <td className="w-1/12 p-5 relative border-black border-2">
                <input
                  id={index}
                  type="checkbox"
                  class="default:ring-2 w-5 h-5 absolute centerSom"
                  onClick={(event) => {changeTodoStatus(event)}}
                />
              </td>
              <td className={`w-10/12 border-black border-2 text-center ${todo.completed ? "line-through" : ""}`}>
                {todo.todo}
              </td>
              <td className={`w-1/12 relative border-black border-2 text-center`}>
                <input
                  id={index}
                  type="Button"
                  class=" absolute centerSom text-xl"
                  value="X"
                  onClick={(event) => {deleteTodo(event)}}
                />
              </td>
            </tr>
              ))
            ) : (
              <h1>No todos yet</h1>
            )}
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
