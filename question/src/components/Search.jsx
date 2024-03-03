import React, { useState } from 'react';

let names = ['laptop', "mobile", "mics"]

const Search = () => {

    const [search, setSearch] = useState("");

    const filterName = names.filter((e) => {
        return e.toLowerCase().includes(search.toLowerCase())
    });

  return (
    <div>
        <input type="text" placeholder='search...' onChange={(e) => setSearch(e.target.value)}/>
        <ul>{
            filterName.map((item, index) => {
                return <li key={index}>{item}</li>
            })}</ul>
    </div>
  )
}

export default Search