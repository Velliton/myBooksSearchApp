import React from 'react'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const CardDetails = ({books}) => {

  const location=useLocation();
  console.log(location.pathname);
  const { id }=useParams();
const {p}=useParams();
console.log(id);
  return (
    <div>
        <h2>dsfsd</h2>
        <p>dsf</p>
        <p>{id}</p>
    </div>
  )
}

export default CardDetails;