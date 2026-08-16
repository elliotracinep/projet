import loadingImg from './assets/loading.png'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={loadingImg} className="base" width="170" height="170" alt="loading icon" />
        </div>
        <div>
          <h1>Ce site n'est pas encore disponible.</h1>
        </div>
      </section>
    </>
  )
}
export default App
