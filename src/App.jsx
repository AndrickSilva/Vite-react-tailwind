import './App.css'
import reactLogo from './assets/react.svg'

function App() {
  return (
    <div className="App">
              <>
            <div className='bg-slate-900 flex justify-center items-center gap-4 py-12' >
                <a href="https://vitejs.dev" target="_blank" className='hover:drop-shadow-[0_15px_35px_rgba(174,70,254,0.55)] hover:scale-105 transition duration-300 ease-out'>
                    <img src="/vite.svg" className="h-20" alt="Vite logo" />
                </a>
                <p className='text-slate-200 text-4xl font-bold'>+</p>
                <a href="https://reactjs.org" target="_blank" className='hover:drop-shadow-[0_15px_35px_rgba(0,216,255,0.55)] hover:scale-105 transition duration-300 ease-out'>
                    <img src={reactLogo} className="h-20" alt="React logo" />
                </a>
                <p className='text-slate-200 text-4xl font-bold'>+</p>
                <a href="https://tailwindcss.com" target="_blank" className='hover:drop-shadow-[0_15px_35px_rgba(7,182,213,0.55)] hover:scale-110 transition duration-300 ease-out'>
                    <img src="http://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" className='h-20' alt="" />
                </a>
            </div>
            <div className='bg-slate-800 min-h-[577px] flex justify-center items-center flex-col'>
                <div className='font-bold text-6xl mb-6 text-slate-100'>
                    <div className="text-purple-400 inline-block hover:rotate-6 transition ease-out duration-300">Vite</div> + <div className="text-cyan-400 inline-block hover:rotate-6 transition ease-out duration-300">React</div> + <div className="text-teal-400 inline-block hover:rotate-6 transition ease-out duration-300">Tailwind</div></div>
                <p className="text-slate-400">
                    Click on the logos to learn more
                </p>
                <a href='https:/github.com/AndrickSilva' target="_blank" className='text-slate-200 font-bold absolute bottom-4 w-full flex justify-center items-center '>{"</>"} by <div className="underline ml-1 hover:scale-105"> Andrick Silva</div></a>
            </div></>
    </div>
  )
}

export default App
