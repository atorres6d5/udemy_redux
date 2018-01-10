export function selectBook(book){
  console.log('a book has been selected', book.title)
  //selectBook is an action createStore, needs to retun an actions
  //object wtih a type porps

  return {
    type:'BOOK_SELECTED',
    payload:book
  }
}
