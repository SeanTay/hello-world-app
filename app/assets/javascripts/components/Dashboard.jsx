
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      savedJobs: [],
      savedTodos: [],
      loading: false
    }
  }

  componentDidMount() {
    console.log('jons mount')
    $.getJSON('/api/jobs.json',
    (response) => { this.setState({
      savedJobs: response
      })
    })
      console.log('todos mount')
      $.getJSON('/api/todos.json',
      (response) => {this.setState({
        savedTodos: response,
        loading: true
      })
    })
}

handleDelete(e, id) {
  let component = this
  e.preventDefault()
  console.log('delete item clicked')
  $.ajax({
    url: '/api/jobs/'+ id,
    type: 'DELETE',
    success: () => {
      newJobs = component.state.savedJobs.filter((job) => {
        return job.id != id;
      });
      component.setState({ savedJobs: newJobs});
    }
  });
}

handleSubmitTodo (e, item) {
  console.log("in the handle submit to do function")
  //make an AJAX CALL
  $.getJSON('/api/todos.json',
  (response) => {this.setState({
    savedTodos: response,
    loading: true
  })
})
  console.log('newstate',this.state)

  // let savedTodos = this.state.savedTodos
  // savedTodos.push(item)
  // this.setState ({
  //   savedTodos
  // })

}

handleDeleteTodo(e, id){
  let component = this
  e.preventDefault()
  console.log('delete todo item clicked')
  $.ajax({
    url: '/api/todos/' + id,
    type: 'DELETE',
    success: () => {

      console.log('successfully deleting backend')
      newTodos = component.state.savedTodos.filter((todo) => {
        return todo.id != id;
      });
      component.setState({savedTodos: newTodos})
    },
    fail: () => {
      console.log('failed')
    }
  })
}

handleSubmit(e, job) {
  var newState = this.state.savedJobs.concat(e, job);
  this.setState({
    savedJobs: newState,
  })
}

render () {
  return (

    <div className = "dashboard">
      <div className = "filler">
        <p> left box</p>
      </div>
        <List
          todos = {this.state.savedTodos}
          handleDeleteTodo={(e, id) => this.handleDeleteTodo(e, id)}
          handleSubmitTodo = {(e, item)=>this.handleSubmitTodo(e,item)}
          />



        <SavedJobs
          savedJobs = {this.state.savedJobs}
          handleDelete ={(e, id) => this.handleDelete(e, id)}
          />

          <NewItem
            handleSubmitTodo={(e,item)=>this.handleSubmitTodo(e,item)}/>

    </div>

  )

}
}
