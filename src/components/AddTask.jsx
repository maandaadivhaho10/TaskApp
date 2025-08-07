import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day, reminder })
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className="mb-10" onSubmit={onSubmit}>
      <div className="my-5">
        <label className="block text-sm font-medium">Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-10 mt-1 px-2 text-base border border-gray-300 rounded"
        />
      </div>
      <div className="my-5">
        <label className="block text-sm font-medium">Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="w-full h-10 mt-1 px-2 text-base border border-gray-300 rounded"
        />
      </div>
      <div className="flex items-center justify-between my-5">
        <label className="flex-1 text-sm font-medium">Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          className="flex-2 h-5 w-5"
        />
      </div>
      <input
        type="submit"
        value="Save Task"
        className="block w-full bg-black text-white py-2 px-4 rounded cursor-pointer text-[15px] active:scale-95 transition-transform duration-100"
      />
    </form>
  )
}

export default AddTask
