import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList() {
    console.log(this.props);
      return this.props.books.map(book => {
        return (
          <li
            key={book.title}
            onClick={() => this.props.selectBook(book)}
            className="list-group-item">
            {book.title}
          </li>
        );
      });
    }

    render (){
      return(
        <ul className="list-group col-sm-4">
           {this.renderList()}
        </ul>
      )
   }


}

function mapStateToProps(state){
  //whatever gets returned from here will show up  porps
  //inside BookList
  return{
    books:state.books
  }
}
//anything returned will end up as props on booklist container
function mapDispatchToProps(dispatch){
  //whenever selectBook is called
  //result is passed to all reducers
  return bindActionCreators({ selectBook:selectBook }, dispatch)
}


//promote booklist from component to container

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
