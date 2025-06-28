import './App.css'
import CoinForm from './components/CoinForm'

function App() {

  return (
    <>
      <section className='min-h-screen grid place-content-center'>
        <h1 className="text-7xl font-thin">Coin Target App</h1>
        <p>Please input your target amount and select your desired coin denominations - can be repeated</p>
        <CoinForm />
      </section>
    </>
  )
}

export default App
