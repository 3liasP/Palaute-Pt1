import { useState } from 'react'

const Values = (props) => {
  return (
    <div>
      {props.name} {props.value}
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> give feedback </h1>
        <button onClick={() => setGood(good + 1)}>
          good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
          neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
          bad
        </button>
      <h1> statistics </h1>
        <Values name="good" value={good} />
        <Values name="neutral" value={neutral} />
        <Values name="bad" value={bad} />
    </div>
  )
}

export default App