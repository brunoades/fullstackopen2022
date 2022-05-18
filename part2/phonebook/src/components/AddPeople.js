const AddPeople = ({addPerson, newPerson, handleNameChange, newNumber, handleNumberChange}) => {

    return (
        <>
            <h3>add new</h3>
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
        </>
    )
}

export default AddPeople;