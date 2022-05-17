import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 1
    }
  ])

  const [newPerson, setNewPerson] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newPerson,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObject))
    setNewPerson('')
  }
  const handleNameChange = (event) => {
    setNewPerson(event.target.value)
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newPerson}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type='submit' >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <p key={person.name}>{person.name}</p>)}
      </div>
    </>
  )
}

export default App