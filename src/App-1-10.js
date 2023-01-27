import { useState } from 'react'

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad 
  let g = props.good
  let n = props.neutral * 0
  let b = props.bad * (-1)

  let average = (g+n+b)/all
  let positive = (g / all) * 100
  if (props.good===0 && props.bad===0 && props.neutral===0) {
    return (
      <div> No feedback given </div>
    )
  } else {
    return (
      <div> 
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="average" value ={average} />
      <StatisticLine text="positive" value ={positive} />
      </div>
    )
  }
}
// Tässä toteutuksessa else if -rakenne, mutta App.js hyödyntää
// tehokkaampaa case-rakennetta.
const StatisticLine = (props) => {
  const text = props.text
  if (text === "good"){
    return (
      <div>
      good {props.value}
      </div>
    )
  } else if (text === "neutral") {
    return (
      <div>
      neutral {props.value}
      </div>
    )
  } else if (text === "bad") {
    return (
      <div>
      bad {props.value}
      </div>
    )
  } else if (text === "average") {
    return(
      <div>
      average {props.value}
      </div>
    )
  } else if (text === "positive") {
    return (
      <div>
      positive {props.value} %
      </div>
    )
  }

}

const Button = (props) => {
  const feedback = props.value
  if (feedback === "good") {
    return (
      <button onClick={() => props.setGood(props.good + 1)}>
      good
      </button>
    )
  } else if (feedback === "neutral") {
    return (
      <button onClick={() => props.setNeutral(props.neutral + 1)}>
      neutral
      </button>
    )
  } else if (feedback === "bad") {
    return (
      <button onClick={() => props.setBad(props.bad + 1)}>
      bad
      </button>
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
        <Button value="good" setGood = {setGood} good={good}/>
        <Button value="neutral" setNeutral = {setNeutral} neutral={neutral}/>
        <Button value="bad" setBad = {setBad} bad={bad}/>
      <h1> statistics </h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App