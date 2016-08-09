class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      savedJobs: [],
      loading: true
    }
  }

  componentDidMount() {
    console.log('componentdidmount')
    $.getJSON('/api/jobs.json',
    (response) => { this.setState({
      savedJobs: response,
    })
  });
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

handleSubmit(e, job) {
 console.log('handle submit')
 var newState = this.state.savedJobs.concat(e, job);
 this.setState({
   savedJobs: newState,
   loading: false
 })
}

render () {
if (this.state.loading){
  return (
    <div>
      <SearchContainer
        handleSubmit = {(e, job) => this.handleSubmit(e, job)}
        />
      <SavedJobs
          savedJobs = {this.state.savedJobs}
          handleDelete ={(e, id) => this.handleDelete(e, id)}
         />
    </div>
  )
} else {
  return (
    <div>
      <SearchContainer
        handleSubmit = {(e, job) => this.handleSubmit(e, job)}
        />
      <SavedJobs
          savedJobs = {this.state.savedJobs}
          handleDelete ={(e, id) => this.handleDelete(e, id)}
         />
    </div>
  )
}
}
}
