class List extends React.Component {


  render(){
    let {handleDeleteTodo, todo, handleSubmitTodo} = this.props
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

          <NewItem onCreate={ item => this.addItem(item) }
            handleSubmitTodo={(e,item)=>handleSubmitTodo(e,item)}/>

        </div>

      )
    }
  }
