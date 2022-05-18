import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import AddPeople from './components/AddPeople'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }
  return (
    <>
      <h2>Phonebook</h2>
      {/* filter show with <input
      value={search}
      onChange={handleSearchChange}
      /> */}
      <Filter filter={search} handleSearchChange={handleSearchChange} />
      {/* <h3>add new</h3>
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
      </form> */}
      <AddPeople
        addPerson={addPerson}
        newPerson={newPerson}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        />
      <Persons persons={persons} search={search}/>
      {/* <h2>Numbers</h2>
      <div>
        {persons.filter(person => person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map(filteredPerson =>(
          <p key={filteredPerson.name}>{filteredPerson.name}: {filteredPerson.number}</p>
        ))}
      </div> */}
    </>
  )
}

export default App