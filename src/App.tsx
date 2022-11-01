import React from 'react'

function App() {
  React.useEffect(() => {
    fetch('https://github.com/octocat')
      .then((response) => response.json())
      .then((response) => console.log(response))
  }, [])

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline bg-slate-500">
        Hello world!
      </h1>
    </div>
  )
}

export default App
