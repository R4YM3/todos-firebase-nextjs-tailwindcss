interface ITodos {
  heading: string
}

function handleAddTodo() {

}

function handleDeleteTodo() {

}

function handleStatusTodo() {

}

interface ITodo {
  id: string;
  title: string;

}

const todos = [
  {
    id: '1',
    title: 'Lorem ipsum dolor sit amet',
  },
  {
    id: '2',
    title: 'Lorem ipsum '
  },
  {
    id: '3',
    title: 'Lorem ipsum dolor'
  }
]


const Todos = ({ heading }: ITodos) => {
  return (
    <div className="container px-3 max-w-md mx-auto">
      <div className="bg-white rounded shadow px-4 py-4">
        <div className="title font-bold text-lg">{heading}</div>

        <FormTodos />

        <ul className="todo-list mt-4">
          {todos.map((todo) => <Todo {...todo} />)}
        </ul>
      </div>
    </div>
  )
}

const FormTodos = () => {
  return (
    <form onSubmit={handleAddTodo}>
      <div className="flex items-center text-sm mt-2">
        <button >
          <svg className="w-3 h-3 mr-3 focus:outline-none" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 4v16m8-8H4"></path>
          </svg>
        </button>
        <span>Click to add task</span>
      </div>
      <input type="text" placeholder="what is your plan for today" className=" rounded-sm shadow-sm px-4 py-2 border border-gray-200 w-full mt-4" x-model="todoTitle" x-ref="addTask" />
    </form>
  )
}

const Todo = ({ id, title }: ITodo) => {
  return (
    <li className="flex justify-between items-center mt-3" key={id}>
      <div className="flex items-center">
        <input type="checkbox" name="" id="" onClick={handleStatusTodo} />
        <div className="capitalize ml-3 text-sm font-semibold">{title}</div>
      </div>
      <div>
        <button onClick={handleDeleteTodo}>
          <svg className=" w-4 h-4 text-gray-600 fill-current" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </li >
  )
}


export default Todos;
