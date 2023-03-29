import React from 'react';
import "./Card.scss";
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';

const Card = (props) => {
  


  return (
    
    <div className='wrapper'>
  {
  
      props.books? props.books.map((book,index)=>{
        
        return(
          
          <div className="card bg-white"  key={index}>
            {(book.volumeInfo.imageLinks)?<img src={book.volumeInfo.imageLinks.thumbnail}></img>:<p>отстой</p>}
            <div className='bottom'>
            {(book.volumeInfo.title)?<p className='title'>{book.volumeInfo.title}</p>:null}
            {(book.volumeInfo.authors)?<p className='title'>{book.volumeInfo.authors}</p>:null}
            {(book.volumeInfo.categories)?<p className='title'>{book.volumeInfo.categories}</p>:null}
            <Link to={`/books/${book.id}`}>Подробнее</Link>
            </div>  
            
            
          </div>
        )
      }):console.log('не нашли')
      
    }
    </div>
  

  )}
export default Card