import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './components/Layout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <section id="home" className="container mx-auto px-4 py-12 min-h-[50vh]">
        <div className="text-red-500">
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </section>

      <section id="about" className="container mx-auto px-4 py-12 min-h-[40vh] border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-400">About — placeholder</h2>
      </section>

      <section id="projects" className="container mx-auto px-4 py-12 min-h-[40vh] border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-400">Projects — placeholder</h2>
      </section>

      <section id="experience" className="container mx-auto px-4 py-12 min-h-[40vh] border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-400">Experience — placeholder</h2>
      </section>

      <section id="contact" className="container mx-auto px-4 py-12 min-h-[40vh] border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-400">Contact — placeholder</h2>
      </section>
    </Layout>
  )
}

export default App
