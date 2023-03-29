import React from 'react';
import "./Main.scss";
import Card from '../Card/Card';
import Loader from '../Loader/Loader';

const Main = (props) => {
  return (
    <>
      <main>
        {!props.loading?
        <Card
                search={props.search}
                setSearch={props.setSearch}
                books={props.books}
                setBooks={props.setBooks}
                loading={props.loading}
        />:<Loader/>}
      </main>
    </>
    )
  }
export default Main;