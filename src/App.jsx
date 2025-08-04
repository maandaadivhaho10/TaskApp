
import Header from "./Componets/Header"
import { Tasks } from "./Componets/Tasks"
function App() {
  
const [tasks, setTasks] = useState([])

  const deleteTask=(id)=>{
    setTasks(tasks.filter((tasks)=>{
      return tasks.id !== id
    }))
  }


  const toogleRemider=(id)=>{
    setTasks(tasks.map((task)=>{
      task.id==id ? {...task,remider:!remider}:task
    }))
  }
  return (
    <>
     <div className="container">
      <Header/>
     { tasks.length >0  ? <Tasks  onDelete={deleteTask} onToogle={deleteTask}/>:'No Tasks'
}
     </div>
    </>
  )
}

export default App
