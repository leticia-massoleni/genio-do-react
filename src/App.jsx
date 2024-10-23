import {useState} from "react"
import './App.scss'
import lampada from './assets/lampada.png'
import genio_da_lampada from './assets/genio-com-lampada.png'

export default function App(){
  let imagens = [
    <img class='img1' src={lampada} alt="Lâmpada Mágica" />,
    <img class='img2' src={genio_da_lampada} alt="Gênio da Lâmpada" />
  ]
  const [imagem, setImagem] = useState(imagens[0])
  const mudarImagem = () => {
    setImagem(imagens[1])
  }
  return(
    <main>
      <h1>"Liberte a magia da programação com a lâmpada de Aladim"</h1>
      {imagem}
      <button onClick={mudarImagem}>Clique Aqui</button>
    </main>
  )
}