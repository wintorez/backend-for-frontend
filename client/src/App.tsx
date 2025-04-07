import useSWR from 'swr'
import axios from 'axios'
import './App.css'

function App() {
  const messageQuery = useSWR('/api/message', () => axios.get('/api/message').then((r) => r.data), {
    shouldRetryOnError: true,
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">{messageQuery.data}</div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
