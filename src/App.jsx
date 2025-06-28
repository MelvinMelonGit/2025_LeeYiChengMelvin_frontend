import './App.css'
import CoinForm from './components/CoinForm'

function App() {

  return (
    <>
      <section className="min-h-screen grid place-content-center gap-8 text-xl p-5">
        <h1 className="text-7xl font-thin">Coin Denomination Calculator App</h1>
        <p>Please input your target amount and select your desired coin denominations - can be repeated</p>
        <p>Click on submit to get the correct coin denominations!</p>
        <CoinForm />
      </section>
    </>
  )
}

export default App
