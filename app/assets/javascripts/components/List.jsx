class List extends React.Component {


  render(){
    let {handleDeleteTodo, todo, handleSubmitTodo} = this.props
    let component = this
    savedTodos = this.props.todos.map(function(todo, index){
      return(
        <div className = "todo" key={index}>
          <h3>{todo.body}</h3>
          <p>{todo.tag}, due:  {todo.dueDate}</p>

          <form onSubmit={(e) => component.props.handleDeleteTodo(e, todo.id)}>
            <button type="submit">Delete</button>
          </form>
        </div>
      )
    })

    return(
      <div className = "todos">
        <h2 className="dashboardHeader"> To Do:</h2>
        {savedTodos}
        <NewItem onCreate={ item => this.addItem(item) }
          handleSubmitTodo={(e,item)=>handleSubmitTodo(e,item)}/>

      </div>

    )
  }
}
