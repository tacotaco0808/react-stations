// @ts-check
import { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/pomeranian/n02112018_514.jpg',
  )

  async function dogUrlSetter() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    //console.log(response)
    const data = await response.json()
    //console.log(data.message)
    setDogUrl(data.message)
  }
  return (
    <div>
      <p>犬の画像を表示するよ!</p>
      <DogImage imageUrl={dogUrl} />
      <hr />
      <button onClick={dogUrlSetter}>更新</button>
    </div>
  )
}

export default Description
