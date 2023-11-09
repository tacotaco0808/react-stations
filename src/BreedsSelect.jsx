export const BreedsSelect = prop => {
  const listData = [...prop.breeds]
  function selectOnChange(event) {
    //親から受け取ったselectedBreedChange関数を使って親へ渡す
    prop.selectedBreed(event.target.value) //event.target.valueはselectで選択された値
    //console.log(prop.selectedBreed) //onChange eを読み取り選択されたvalueを取得
  }

  //console.log(listData)
  const dogList = listData.map((data, index) => (
    <option key={index} value={data}>
      {data}
    </option>
  ))

  return <>{<select onChange={e => selectOnChange(e)}>{dogList}</select>}</>
}

export default BreedsSelect
