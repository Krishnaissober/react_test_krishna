import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([])
  const SubmitHandle =(e)=>{
    e.preventDefault()
    let copyTask=[...task];

    copyTask.push({title,details});
    setTask(copyTask)
    console.log(task)
    setTitle("");
    setDetails("");
  }
  const deletenote =(indx)=>{
    const copytask =[...task]
    copytask.splice(indx,1)
    setTask(copytask)
  }
 
  return (
    <div className='lg:flex  h-screen text-white  items-center'>
      <form onSubmit={(e)=>{
        SubmitHandle(e)
      }}
       className='flex gap-4 p-10 flex-col items-start'>
        <h1 className="font-bold text-4xl">
          Add Notes
        </h1>

        <input
          type="text"
          placeholder='Type your Heading'
          className='px-5 py-2 w-full font-medium border-2 border-white rounded outline-none '
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />

        <textarea
          type="text"
          placeholder="Type your note.."
          className='px-5 py-2 w-full font-medium border-2 border-white rounded outline-none'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />
        <button 
        className='bg-gray-400 w-full py-2 rounded text-black hover:bg-gray-600 active:scale-95 transition-all duration-300 hover:text-gray-200 cursor-pointer'>
          click me
          </button>
      </form>
      <div className='lg:w-[50%] lg:border-l-2 p-10 '>
      <h1 className="font-bold text-4xl">
        Your Notes
      </h1>
      <div className='flex flex-wrap gap-5 mt-6 h-full overflow-y-auto'>
        {task.map((elem, indx) => <div key={indx} className='bg-slate-400 h-52 w-46 rounded p-4'>
          <h3 className='leading-tight font-bold text-2xl text-black '>{elem.title}</h3>
          <p className='leading-tight font-medium mt-2 text-gray-700 '>{elem.details}</p>
          <button
          onClick={
          ()=>{deletenote(indx)}
          } 
          className='w-full cursor-pointer active:scale-95 bg-cyan-800 py-1 text-xs font-bold text-white'>Delete</button>
        </div>)}
      </div>
      </div>
    </div>
  )
}

export default App
