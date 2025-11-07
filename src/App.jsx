import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [deployTime, setDeployTime] = useState('')

  useEffect(() => {
    setDeployTime(new Date().toLocaleString())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl font-bold mb-6">
          React + Vercel CI/CD Updated
        </h1>
        <p className="text-xl mb-8">
          Welcome to your automatically deployed React app!
        </p>
        
        <div className="demo-card">
          <h2 className="text-2xl font-semibold mb-4">
            Continuous Deployment in Action
          </h2>
          <p className="mb-4">
            This React app is automatically deployed with every git push to GitHub!
          </p>
          
          <div className="features-list">
            <div className="feature-item"> Connected to GitHub</div>
            <div className="feature-item"> Auto-deploys on push</div>
            <div className="feature-item"> Preview deployments</div>
            <div className="feature-item"> Custom domains ready</div>
            <div className="feature-item"> Free hosting</div>
          </div>
        </div>

        <div className="tech-stack">
          <h3 className="text-lg font-semibold mb-2">Tech Stack:</h3>
          <div className="tech-items">
            <span>React</span>
            <span>Vite</span>
            <span>Vercel</span>
            <span>GitHub</span>
          </div>
        </div>

        <div className="deploy-info">
          <p>Last deployed: {deployTime}</p>
          <p>Branch: main</p>
          <p>Environment: Production</p>
        </div>

        <button 
          className="cta-button"
          onClick={() => alert('CI/CD is working!')}
        >
          Test Interactive Feature
        </button>
      </header>
    </div>
  )

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
