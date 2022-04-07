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

const Statistics = (props) => {
  return (
    <>
      <p>{props.text} {props.statistic}</p>
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
  return (
    <>
      <Header title={'give feedback'} />
      <Button handler={handleGood} text={'good'} />
      <Button handler={handleNeutral} text={'neutral'} />
      <Button handler={handleBad} text={'bad'} />
      <Header title={'statistics'} />
      <Statistics text={'good'} statistic={good}/>
      <Statistics text={'neutral'} statistic={neutral}/>
      <Statistics text={'bad'} statistic={bad}/>
    </>
  );
}

export default App;
