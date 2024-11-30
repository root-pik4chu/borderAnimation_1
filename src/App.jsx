import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-slate-950 text-white">
      <div class="card-wrapper h-[300px] w-[300px]">
        <div class="card-content flex items-center justify-center text-xs">
          <div class="max-w-[60%] text-3xl text-center">root pikachu</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
