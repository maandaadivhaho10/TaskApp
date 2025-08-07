import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      onDoubleClick={(e) => {
         e.preventDefault();
        onToggle(task.id);}}
      className={`bg-gray-100 my-1 py-2 px-5 cursor-pointer rounded ${
        task.reminder ? 'border-l-4 border-green-600' : ''
      }`}
    >
      <h3 className="flex items-center justify-between text-lg font-semibold">
        {task.text}
        <FaTimes
          onClick={() => onDelete(task.id)}
          className="text-red-600 cursor-pointer"
        />
      </h3>
      <p className="text-sm text-gray-600">{task.day}</p>
    </div>
  )
}
 
export default Task
