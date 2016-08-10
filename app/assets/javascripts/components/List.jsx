class List extends React.Component {
  // constructor(props){
  //   super()
  //   this.state = {
  //     items: items,
  //   }
  // }

  // addItem(item){
  //   let items = this.state.items
  //   items.push(item)
  //   this.setState({items})
  // }
  // delete(index){
  //   let items = this.state.items
  //   items.splice(index, 1)
  //   this.setState({items})
  // }
  render(){
    let {handleDeleteTodo, todo} = this.props
    let component = this
    console.log(component)
    savedTodos = this.props.todos.map(function(todo, index){
        return(
          <div key={index}>
            <h3>{todo.body}</h3>
            <form onSubmit={(e) => component.props.handleDeleteTodo(e, todo.id)}>
              <button type="submit">Delete</button>
              </form>
          </div>
        )
    })
    return(
      <div>
      <h2> To-Do items</h2>
      {savedTodos}

      <NewItem onCreate={ item => this.addItem(item) }/>

      </div>

      // <div>
      //   {this.state.items.map( (item, index) => {
      //     console.log("inside map", item, index)
      //     return <Item index={index} key={index} item={item}/>
      //   })}
      //
      // </div>
    )
  }
}

// let items =[{
//   body: "learn react",
//   tag: "study",
//   dueDate: "August 1, 2016"
// }, {
//   body: "learn comp sci",
//   tag: "study",
//   dueDate: "August 1, 2016"
// }
//]
