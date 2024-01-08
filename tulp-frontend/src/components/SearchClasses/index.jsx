import React from "react"
import search from "../../assets/svgs/search.svg"
import "./styles.css"
import useSearchClassLogic from "./useSearchClassLogic"

const SearchClasses = () => {
  const { handleSearch, result } = useSearchClassLogic()
  return (
    <div className='search w-100 flex column'>
      <form className='search-form w-100'>
        <input
          placeholder='Search Class'
          className='search-input w-100 h-100 shadow'
          type='text'
          onChange={handleSearch}
        />
        <div className='search-icon'>
          <img src={search} alt='search' />
        </div>
      </form>
      {result.map((res) => (
        <div key={res._id} className='search-result flex w-100 shadow'>
          <div className='search-class-name'>{res.name}</div>
          <div className='search-class-owner'>By: {res.owner.username}</div>
        </div>
      ))}
    </div>
  )
}

export default SearchClasses
