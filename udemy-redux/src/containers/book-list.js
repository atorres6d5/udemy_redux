import React, { Component } from 'react';

class BookList extends Component {

  render() {

    renderList = ( )=>{
      return this.props.books.map(book=>{
        return<li key={book.title} className="list-group-item">{book.title}</li>
      })
    }

    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }

}

export default BookList;
