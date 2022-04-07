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
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
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
