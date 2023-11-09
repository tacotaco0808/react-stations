import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
export const DogListContainer = () => {
  //変数宣言等
  const [breeds, setBreeds] = useState([]) //APIから取得した犬のリストを保存
  const [selectedBreed, setSelectedBreed] = useState('') //選択している犬の種類

  //main
  useEffect(() => {
    getDogList()
    //下のは警告を消す
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) //useEffectによってコンポーネント初回呼び出し時のみ犬種リストを取得
  //function
  async function getDogList() {
    await fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(dogData => {
        const list = dogData.message //objectで返される
        setBreeds(Object.keys(list))
      }) //ここで書き換えても下のコンソールはこの関数(DogListContainer)の状態(useState([])の状態で)実行されるため
    //.then(console.log(breeds)) //すぐ下の、このログには反映されない
  }
  //console.log(breeds)
  function selectedBreedChange(value) {
    //setStateを更新する関数が入った関数
    setSelectedBreed(value)
  }
  function btnOnClick() {
    console.log(selectedBreed)
    console.log('https://dog.ceo/api/breed/' + selectedBreed + '/images/random')
  }
  //return
  return (
    <>
      <BreedsSelect
        breeds={breeds} //犬のリスト配列
        selectedBreed={selectedBreedChange} //setStateを更新する関数が入った関数
      ></BreedsSelect>
      <button onClick={btnOnClick}>表示</button>
    </>
  )
}

export default DogListContainer
