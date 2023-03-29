import React, {useState} from 'react';
import "./SearchForm.scss";
import {FaSearch} from 'react-icons/fa';
import axios from 'axios';

const SearchForm = (props) => {


  return (
    <div className='search-form'>
      <div className="container">
            <div className="search-form-content">
                <form onSubmit={props.onSubmitHandler} className="search-form">
                    <div className="search-form-elem bg-white">

                        <input value={props.searchTerm} onChange={props.onInputChange} type="text" className="form-control" placeholder='The lost word...'/>
                        <button type='submit' className='search-form-btn'>
                            <FaSearch className='text-purple' size={32}></FaSearch>
                        </button>
                        
                    </div>
                    <div className='sort-form__block'>
                      <label className='sort-form__label'>
                        Sorting by
                        <select className='sort-form-elem bg-white' value={props.sortByRel} onChange={props.ChangeSelect}>
                            <option>relevance</option>
                            <option>newest</option>
                        </select>
                      </label>
                      <label>
                        Category
                        <select className='sort-form-elem bg-white' value={props.selectedCategory} onChange={props.handleCategoryChange}>
                              {
                                props.categories.map((category)=>(
                                  <option key={category.value} value={category.value}>
                                    {category.label}
                                  </option>
                                ))
                              }
                        </select>
                      </label>

                      
                    </div>
                    



                </form>
            </div> 
        </div> 
    </div>
  )
}

export default SearchForm