const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </>
  );
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>Number of exercises {
        props.exercises[0] + props.exercises[1] + props.exercises[2]
        }
        </p>
    </>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
    name: 'Fundamentals of React',
    exercises: 10,
  },
  {
    name: 'Using props to passa data',
    exercises: 7,
  },
  {
    name: 'State of a component',
    exercises: 14,
  }
  ]  
  return (
    <>
      <Header course={course} />
      <Content
        part1={parts[0].name}
        exercises1={parts[0].exercises}
        part2={parts[1].name}
        exercises2={parts[1].exercises}
        part3={parts[2].name}
        exercises3={parts[2].exercises}
      />
      <Total
        exercises={[parts[0].exercises, parts[1].exercises, parts[2].exercises]}
      />
    </>
  );
}

export default App;
