import React from "react"
import search from "../../assets/svgs/search.svg"
import "./styles.css"

const SearchClasses = () => {
  return (
    <div className='search w-100 flex column'>
      <form className='search-form w-100'>
        <input
          placeholder='Search Class'
          className='search-input w-100 h-100 shadow'
          type='text'
        />
        <div className='search-icon'>
          <img src={search} alt='search' />
        </div>
      </form>
      <div className='search-result flex w-100 h-100 shadow'>
        <div className='search-class-name'>Classname</div>
        <div className='search-class-owner'>By:someone</div>
      </div>
    </div>
  )
}

export default SearchClasses
