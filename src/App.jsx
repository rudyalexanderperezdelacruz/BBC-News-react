import './App.css'
import Card from './componentes/Card/Card'
import Header from './componentes/Header/Header'
function App() {


  return (
    <div className="pr-20 pl-20  bg-gray-800">
    <Header />
    <h1 className="text-center mb-7 font-medium text-xl text-white">Today's News !</h1>
    <section className="flex flex-col items-center justify-center ">
      <Card />
    </section>

    </div>
  )
}

export default App
