const Persons = ({persons, search}) => {
    return (
        <>
            <h2>Numbers</h2>
      <div>
        {persons.filter(person => person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map(filteredPerson =>(
          <p key={filteredPerson.name}>{filteredPerson.name}: {filteredPerson.number}</p>
        ))}
      </div>
        </>
    )
}

export default Persons;