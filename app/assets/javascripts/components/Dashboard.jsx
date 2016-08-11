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
 console.log('handle submit')
 var newState = this.state.savedJobs.concat(e, job);
 this.setState({
   savedJobs: newState,
 })
}

handlePostSubmit(e, job) {
 console.log('handle submit')
 var newState = this.state.savedPosts.concat(e, post);
 this.setState({
   savedJobs: newState,
 })
}

render () {
 console.log("passing state from dashboard",this.state.savedTodos)
 return (

   <div className = "dashboard">
     <div className = "blogContainer">
       <h2 className="dashboardHeader"> Search Blogs</h2>
       <BlogContainer
         handlePostSubmit = {(e,post) =>this.handlePostSubmit(e,post)}/>
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
