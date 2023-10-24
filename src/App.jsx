// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/pomeranian/n02112018_514.jpg',
  )

  async function dogUrlSetter() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    console.log(response)
    const data = await response.json()
    console.log(data.message)
    setDogUrl(data.message)
  }
  return (
    <div>
      <header className="head">いぬころ</header>
      <div>
        <p>犬の画像を表示するよ!</p>
        <img className="dog_image" src={dogUrl} alt="superdog" />
      </div>

      <hr />
      <button onClick={dogUrlSetter}>更新</button>
    </div>
  )
}
