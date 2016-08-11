
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      savedJobs: [],
      savedTodos: []
    }
  }

  componentDidMount() {
    console.log('componentdidmount')
    $.getJSON('/api/jobs.json',
    (response) => { this.setState({
      savedJobs: response
      })
    })
    console.log('todos mount')
      $.getJSON('/api/todos.json',
      (response) => {this.setState({
        savedTodos: response
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
  let savedTodos = this.state.savedTodos
  savedTodos.push(item)
  this.setState ({
    savedTodos
  })

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
    }
  })
}

handleSubmit(e, job) {
  console.log('handle submit')
  var newState = this.state.savedJobs.concat(e, job);
  this.setState({
    savedJobs: newState,
    loading: false
  })
}

render () {
  console.log("passing state from dashboard",this.state.savedTodos)
  return (

    <div>
      <SavedJobs
        savedJobs = {this.state.savedJobs}
        handleDelete ={(e, id) => this.handleDelete(e, id)}
        />

      <List
        todos = {this.state.savedTodos}
        handleDeleteTodo={(e, id) => this.handleDeleteTodo(e, id)}
        handleSubmitTodo = {(e, item)=>this.handleSubmitTodo(e,item)}
        />
    </div>
  )

}
}
