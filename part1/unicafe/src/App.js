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
      <button>{props.text}</button>
    </>
  )
}

const Statistics = (props) => {
  return (
    <>
      <h2>{props.subtitle}</h2>
      <p>good </p>
      <p>neutral </p>
      <p>bad </p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <>
      <Header title={'give feedback'} />
      <Button text={'good'} />
      <Button text={'neutral'} />
      <Button text={'bad'} />
      <Statistics subtitle={'statistics'}/>
    </>
  );
}

export default App;
