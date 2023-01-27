import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      {props.name} {props.value}
    </div>
  )
}

const Overall = (props) => {
  let all = props.good + props.neutral + props.bad 
  let g = props.good
  let n = props.neutral * 0
  let b = props.bad * (-1)

  let average = (g+n+b)/all
  let positive = g / all

  return (
    <div>
      <div>
        average: {average}
      </div>
      <div>
      positive: {positive} %
      </div>
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
        <Statistics name="good" value={good} />
        <Statistics name="neutral" value={neutral} />
        <Statistics name="bad" value={bad} />
        <Overall good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App