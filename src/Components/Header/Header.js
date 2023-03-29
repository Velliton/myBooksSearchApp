import React from 'react'
import "./Header.scss"
import SearchForm from '../SearchForm/SearchForm'
import SortForm from '../SortForm/SortForm'

const Header = (props) => {
  return (
    <>
      <header className='header'>
        <div className="header-content text-white">
                  <h2 className="header-title text-capitalize">
                      find your book
                  </h2>
                  <p className="header-text fs-18 fw-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nulla iure ducimus quo repellendus architecto ipsum, eum magni? Facilis quam animi in illum sunt nostrum natus! Tenetur modi aspernatur vel?
                  </p>
                  <SearchForm
                    setSearchTerm={props.setSearchTerm}      
                    searchTerm={props.searchTerm}
                    search={props.search}
                    setSearch={props.setSearch}
                    onSubmitHandler={props.onSubmitHandler}
                    ChangeSelect={props.ChangeSelect}
                    sortByRel={props.sortByRel}
                    onInputChange={props.onInputChange}
                    selectedCategory={props.selectedCategory}
                    setSelectedCategory={props.setSelectedCategory}
                    handleCategoryChange={props.handleCategoryChange}
                    categories={props.categories}
                  />
                {/*   <div className='sort-forms'>
                    <SortForm/>
                    <SortForm/>
                  </div> */}
                  
        </div>
      </header>
    </>
    
  )
}

export default Header