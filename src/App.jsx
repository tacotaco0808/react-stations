// DO NOT DELETE

import './App.css'
import Header from './Header'
import Description from './Description'
import DogListContainer from './DogListContainer'
/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <>
      <DogListContainer />
      <Header />
      <Description />
    </>
  )
}
