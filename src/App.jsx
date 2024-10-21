import {useState} from "react"
import './App.scss'
import lampada from './assets/lampada.png'
import genio_da_lampada from './assets/genio-com-lampada.png'

export default function App(){
  let imagens = [
    <img src={lampada} alt="Lâmpada Mágica" />,
    <img src={genio_da_lampada} alt="Gênio da Lâmpada" />
  ]
  const [imagem, setImagem] = useState(imagens[0])
  const mudarImagem = () => {
    setImagem(imagens[1])
  }
  return(
    <>
    <h1>"Liberte a magia da programação com a lâmpada de Aladim"</h1>
    <div>{imagem}</div>
    <button onClick={mudarImagem}>Clique Aqui</button>
    </>
  )
}