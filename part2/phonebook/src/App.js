import { useState } from 'react'

const App = () => {
  const [persosns, serPersons] = useState([
    { name: 'Arto Hellas'}
  ])
  return (
    <>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </>
  )
}

export default App