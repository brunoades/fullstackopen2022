import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/region/americas')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  let queryResult = 0
  
  return (
    <>
      <h1>Countries</h1>
      <div>
        find countries <input value={search} onChange={handleSearchChange}/>
      </div>
      <div>
        {
          countries.filter(country =>
          country.name.common.toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()))
            .map(filteredCountry => (
              <p key={filteredCountry.name.common}>
                {filteredCountry.name.common}
              </p>
            ))}
      </div>
    </>
    
  );
}

export default App;
