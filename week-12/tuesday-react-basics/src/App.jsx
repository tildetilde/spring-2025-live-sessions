import Card from "./components/Card"

import "./App.css"

const App = () => {
  return (
    <>
      <h1>Vite project</h1>
      <Card
        title="My first card"
        text="My first text"
      />
      <Card
        title="My second card"
        text="My second text"
      />
    </>
  )
}

export default App
