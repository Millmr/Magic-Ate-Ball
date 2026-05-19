import Magic8Ball from './components/Magic8Ball'
import './App.css'

function App() {
  return (
    <main className="app-container">
      <header className="header">
        <h1>Magic Ate Ball</h1>
        <p>"Where should we eat?", tap the ball, and discover where you're eating next.</p>
      </header>
      <section className="ball-container">
        <Magic8Ball />
      </section>
    </main>
  )
}

export default App
