import React from "react"
import search from "../../assets/svgs/search.svg"
import "./styles.css"
import useSearchClassLogic from "./useSearchClassLogic"

const SearchClasses = () => {
  const { handleSearch, result, navigate } = useSearchClassLogic()
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
      <div className='search-results flex column'>
        {result.map((res) => (
          <div
            key={res._id}
            onClick={() => navigate(`/class/${res.slug}`)}
            className='search-result rounded-1 flex w-100 shadow'>
            <div className='search-class-name'>{res.name}</div>
            <div className='search-class-owner'>By: {res.owner.username}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchClasses
