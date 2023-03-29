import React from 'react';
import "./SortForm.scss";

const SortForm = () => {
  return (
    <div className='sort-form'>
      <select className='sort-form-elem'>
      <option value=""> Выберите </option>
        <option value="option1">Опция 1</option>
        <option value="option2">Опция 2</option>
        <option value="option3">Опция 3</option>
      </select>
    </div>
  )
}

export default SortForm