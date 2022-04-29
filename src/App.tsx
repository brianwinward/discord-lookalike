import './dist/styles/styles.css'
import ServerRail from './components/ServerRail/ServerRail'
import CurrentServerRail from './components/CurrentServerRail/CurrentServerRail'
import CurrentServerContainer from './components/CurrentServerContainer/CurrentServerContainer'

function App() {

  return (
    <div className="App flex">
      <ServerRail />
      <CurrentServerRail />
      <CurrentServerContainer />
    </div>
  )
}

export default App
