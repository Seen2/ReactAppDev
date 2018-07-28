class Store {

  constructor(reducer,initialState){
    this.state=initialState
    this.reducer=reducer
  }

  dispatch(update){
    this.state=this.reducer(this.state,update)

  }

  getState(){
    return this.state
  }
}



const reduce=(state,update)=> Object.assign({},state,update)



const store=new Store(reduce)
store.dispatch({foo:'foo'})
store.dispatch({bar:'bar'})
store.dispatch({foo:'bar'})
console.log(store.getState())
