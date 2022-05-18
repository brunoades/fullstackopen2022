import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '11-9-9999-0000'
    },
    { name: 'Bruno Alves',
      number: '11-9-7777-0000'
    }
  ])

  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newPerson,
      number: newNumber
    }

    const found = persons.find(({name}) => name === personObject.name);
    if (found) {
      alert(`${newPerson} is already added to phonebook`)
      
    }else {
      setPersons(persons.concat(personObject))
      setNewPerson('')
      setNewNumber('')
    }

    
  }
  const handleNameChange = (event) => {
    setNewPerson(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
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
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type='submit' >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <p key={person.name}>{person.name} {person.number}</p>)}
      </div>
    </>
  )
}

export default App