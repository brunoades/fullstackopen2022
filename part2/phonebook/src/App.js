import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'
    },
    { name: 'Bruno Alves'
    }
  ])

  const [newPerson, setNewPerson] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newPerson
    }

    const found = persons.find(({name}) => name === personObject.name);
    if (found) {
      alert(`${newPerson} is already added to phonebook`)
      
    }else {
      setPersons(persons.concat(personObject))
      setNewPerson('')
    }

    
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