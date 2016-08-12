class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      savedJobs: [],
      savedTodos: [],
      savedPosts: []

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
console.log('resources mount')
$.getJSON('/api/posts.json',
(response) => {this.setState({
  savedPosts: response
})
})
}



handleDelete(e, id) {
  let component = this
  e.preventDefault()
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

handlePostDelete(e, id) {
  let component = this
  e.preventDefault()
  console.log('delete item clicked')
  $.ajax({
    url: '/api/posts/'+ id,
    type: 'DELETE',
    success: () => {
      newPosts = component.state.savedPosts.filter((post) => {
        return post.id != id;
      });
      component.setState({ savedPosts: newPosts});
    }
  });
}


handleSubmitTodo (e, item) {
  $.getJSON('/api/todos.json',
  (response) => {this.setState({
    savedTodos: response
  })
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
  var newState = this.state.savedJobs.concat(e, job);
  this.setState({
    savedJobs: newState,
  })
}

handlePostSubmit(e, post) {
  $.getJSON('/api/posts.json',
  (response) => {this.setState({
    savedPosts: response
  })
})
}


render () {
  return (

    <div className = "dashboard">

      <div className = "blogs">
        <h2 className="dashboardHeader">Resource Library</h2>

        <SavedPosts
          savedPosts = {this.state.savedPosts}
          handlePostDelete={(e, id) => this.handlePostDelete(e, id)}/>

        <div>
        <h2 className="dashboardHeader"> Search Blogs</h2>

        <div className = "blogContainer">
          <BlogContainer
            handlePostSubmit = {(e,post) =>this.handlePostSubmit(e,post)}/>
        </div>
        </div>
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
    </div>

  )

}
}
