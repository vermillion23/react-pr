import './SearchTodo.css'
import { useState } from 'react'


const SearchTodo = ({searchField, setSearchField}) => {

    const handleChange = e => {
        setSearchField(e.target.value)
    }

    return (
        <div className='search-todo'>
            <div className='container'>
                <form className=''>
                    <input placeholder='Search tasks' value={searchField} onChange={handleChange}/>
                </form>
            </div>
        </div>
    )
}

export default SearchTodo