import { useState } from 'react';

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.handler}>{props.text}</button>
    </>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if (all === 0) {
    return (
      <p>no feedback given</p>
    )
  }
  return (
    <>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={positive} />
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <p>{props.text} {props.value}</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }
  const average = () => {
    const total = good + neutral + bad
    return (good - bad) / total
  }
  const goodPercentage = () => {
    const total = good + neutral + bad
    return good * 100 / total
  }
  const total = () => {
    return good + neutral + bad
  }
  return (
    <>
      <Header title={'give feedback'} />
      <Button handler={handleGood} text={'good'} />
      <Button handler={handleNeutral} text={'neutral'} />
      <Button handler={handleBad} text={'bad'} />
      <Header title={'statistics'} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={total()}
        average={average()}
        positive={goodPercentage()}
      />
    </>
  );
}

export default App;
