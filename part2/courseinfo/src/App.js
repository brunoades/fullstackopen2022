const Header = ({header}) => {
  return (
    <>
      <h1>{header}</h1>
    </>
  )
}

const Content = ({content, part}) => {
  return (
    <>
      <p>{content} <Part part={part}/></p>
    </>
  )
}

const Part = ({part}) => {
  return (
    <>
      <span> {part}</span>
    </>
  )
}

const Course = ({header, content, part}) => {
  return (
    <>
      <Header header={header} />
      <Content content={content} part={part} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  } 
  return (
    <>
      <Course
        header={course.name}
        content={course.parts[0].name}
        part={course.parts[0].exercises}
      />
      <Course
        content={course.parts[1].name}
        part={course.parts[1].exercises}
      />
      <Course
        content={course.parts[2].name}
        part={course.parts[2].exercises}
      />
    </>
  );
}

export default App;