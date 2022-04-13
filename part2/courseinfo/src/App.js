const Header = ({header}) => {
  return (
    <>
      <h2>{header}</h2>
    </>
  )
}
const Content = ({parts}) => {
  return (
    <>
      <Part  parts={parts}/>
    </>
  )
}
const Part = ({parts}) => {
  return (
    <>
      {parts.map(p => <p key={p.id}>{p.name} {p.exercises}</p>)}
    </>
  )
}
const Total = ({total}) => {
  return (
    <>
      <p>total of {total} exercises</p>
    </>
  )
}
const Course = ({header, parts}) => {
  const exercises = []
  parts.map(e => exercises.push(e.exercises))
  const total = exercises.reduce((s, p) => s+= p)
  return (
    <>
      <Header header={header}/>
      <Content parts={parts}/>
      <Total total={total}/>
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  // const parts = [...course.parts]
  // const exercises = []
  // parts.map(e => exercises.push(e.exercises))
  // const total = exercises.reduce((s, p) => s += p)
  // const parts = [...courses[0].parts]
  return (
    <>
      <h1>Web development curriculum</h1>
      <Course
        header={courses[0].name}
        parts={[...courses[0].parts]}
      />
      <Course
        header={courses[1].name}
        parts={[...courses[1].parts]}
      />
    </>
  );
}

export default App;