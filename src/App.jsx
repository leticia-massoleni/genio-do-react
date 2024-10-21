import './App.scss'
import lampada from './Components/lampada.png'

export default function App(){
  return(
    <>
    <h1>"Liberte a magia da programação com a lâmpada de Aladim"</h1>
    <img src={lampada} alt="Lâmpada Mágica" />
    <button>Clique Aqui</button>
    </>
  )
}