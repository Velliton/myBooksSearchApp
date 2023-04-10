import './App.scss';
import './index.scss';
import Swal from 'sweetalert2';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Components/Loader/Loader';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CardDetails from './Components/CardDetails/CardDetails';


function App() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] =useState("");
  const [search, setSearch] = useState('');
  const [sortByRel,setSotrByRel]=useState('relevance');
  const [totalItems, setTotalItems]=useState(0);
  const [selectedCategory, setSelectedCategory]=useState('all');



  let API_URL = `https://www.googleapis.com/books/v1/volumes`;
  let API_KEY='AIzaSyCZyzy4B2EHkJTSFmXgpDuibaBKcgj_Lsc';

  const categories =[
    {value: "", label: "all"},
    {value: "art", label: "Art"},
    {value: "biography", label: "Biography"},
    {value: "computers", label: "Computers"},
    {value: "history", label: "History"},
    {value: "medical", label: "Medical"},
    {value: "poetry", label: "Poetry"},    
  ];



  const onInputChange=evt=>{
    setSearchTerm(evt.target.value);
  }

  const onSubmitHandler = (e) => {
    
    e.preventDefault();
    if (!searchTerm)
    {
      setTotalItems(0);
      setBooks('');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue тату?</a>'
        
      })
    }
    else
    setLoading(true);
    {setSearch(searchTerm);}
  }
  
 

  function ChangeSelect(event) {
    setSotrByRel(event.target.value);
    setLoading(true);
  }


  const handleCategoryChange=(event)=>{
    console.log(selectedCategory);
    setSelectedCategory(event.target.value);
    setLoading(true);
  }

  
  useEffect(() => {
    
    if (search&&(selectedCategory!=='all')){
      axios.get(`${API_URL}?q=${search}+subject:${selectedCategory}&orderBy=${sortByRel}&maxResults=40&key=${API_KEY}`)
      .then(response =>{
        
        setBooks(response.data.items)
        setTotalItems(response.data.totalItems);
        
      }
     
      )
      .catch(error => {
  
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue мэрлоу?</a>'
          })
      
        
        
        
        console.error(error);
        setError(error);
       
      })
      .finally(() => {
        
        setLoading(false)})
        
        
        
    }
    else 
    
    if(search)

    {
      axios.get(`${API_URL}?q=${search}&orderBy=${sortByRel}&maxResults=40&key=${API_KEY}`)
      .then(response =>{
        
        setBooks(response.data.items)
        setTotalItems(response.data.totalItems);
        
      }
     
      )
      .catch(error => {
  
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue морген?</a>'
          })
      
        
        
        
        console.error(error);
        setError(error);
       
      })
      .finally(() => {
        
        setLoading(false)})
    }
        
  }, [search, sortByRel, selectedCategory]);
/*   console.log(books); */


  /* if (loading) return <div>loading...</div>; */
  /* if (error) return <div>Error...</div>; */

  return (

    
      <div>
  

      
     <Header
       setSearchTerm={setSearchTerm}      
       searchTerm={searchTerm}
       search={search}
       setSearch={setSearch}
       onSubmitHandler={onSubmitHandler}
       ChangeSelect={ChangeSelect}
       sortByRel={sortByRel}
       onInputChange={onInputChange}
       selectedCategory={selectedCategory}
       setSelectedCategory={setSelectedCategory}
       handleCategoryChange={handleCategoryChange}
       categories={categories}
     />
     {/* {search?
     <p>{totalItems}</p>:null
   } */}
     
     <Main
       loading={loading}
       search={search}
       setSearch={setSearch}
       books={books}
       setBooks={setBooks}
     />
  

   <Routes>
        <Route exact path="/" component={Main} />
        <Route path="/books/:id" component={CardDetails} />
   </Routes>


   </div>
    
      
 

    
  );

}









export default App;
