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
        <strong>total of {total} exercises</strong>
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

  export default Course;