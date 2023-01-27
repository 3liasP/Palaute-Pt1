import { useState } from 'react'

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad 
  let g = props.good
  let n = props.neutral * 0
  let b = props.bad * (-1)

  let average = (g+n+b)/all
  let positive = (g / all) * 100
  if (props.good==0 && props.bad==0 && props.neutral==0) {
    return (
      <div> No feedback given </div>
    )
  } else {
    return (
      <div>
        <div>
          good {props.good}
        </div>
        <div>
          neutral {props.neutral}
        </div>
        <div>
          bad {props.bad}
        </div>
        <div>
          average {average}
        </div>
        <div>
        positive {positive} %
        </div>
      </div>
    )
  }

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
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App