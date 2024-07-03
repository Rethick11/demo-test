import { useState } from 'react'

// import './App.css'



const Counter = (props) => {
  const [count, setCount] = useState(0)

    return (
      <button onClick={()=>{
        setCount(p=>p+1)
      }}>
        Counter : {count} 
      </button>
    )
}

const Fake = (props) => {
  let time = 0

  setInterval(()=>{
      time++;
      console.log(time)
  },4000)

  return (
   <>

   time is {time}
   </>
  )
}

function App() {
 
  return (
    <>
    <Counter />
    <Fake />
   

    </>
  )
}

export default App
