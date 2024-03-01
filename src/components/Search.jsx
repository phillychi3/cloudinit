import { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState('')

  const getinput = (thing) => {
    console.log(thing.target.value)
    setSearch(thing.target.value)
  }
  const getenter = (thing) => {
    if (thing.key === 'Enter') {
      console.log('Enter')
      window.location.href = 'https://www.google.com/search?q=' + search
    }
  }
  return (
    <div className="search">
      <div className="searchinput">
        <input
          type="text"
          placeholder="Search..."
          onChange={getinput}
          onKeyDown={getenter}
        />
      </div>
      <div className="searchdrop"></div>
    </div>
  )
}

export default Search
