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
            <div className='card__img'>
            {(book.volumeInfo.imageLinks)?<img src={book.volumeInfo.imageLinks.thumbnail}></img>:<p>изображение не найдено</p>}
            </div>
           
            <div className='card-info'>
            {(book.volumeInfo.title)?<p className='title'><span>Название: </span> {book.volumeInfo.title}</p>:null}
            {(book.volumeInfo.authors)?<p className='title'><span>Автор: </span> {book.volumeInfo.authors}</p>:null}
            {(book.volumeInfo.categories)?<p className='title'><span>Категория: </span> {book.volumeInfo.categories}</p>:null}
            
            </div>  
            <div className='card-bottom'>
              <Link to={`/books/${book.id}`}>Подробнее</Link>
            </div>
            
            
          </div>
        )
      }):console.log('не нашли')
      
    }
    </div>
  

  )}
export default Card