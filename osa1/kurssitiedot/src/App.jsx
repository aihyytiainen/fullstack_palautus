const Header = (props) => {

  console.log(props)
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {

  console.log(props)
  return (
    <div>
      <p> 
        {props.name} {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {

  console.log(props)
  return (
    <div>
      <p>
        Number of exercises {props.total}
      </p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course}/>
      <Content name={part1} exercises={exercises1} />
      <Content name={part2} exercises={exercises2} />
      <Content name={part3} exercises={exercises3} />
      <Total total={total} />
    </div>
  )
}

export default App