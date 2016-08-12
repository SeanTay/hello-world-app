class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      savedJobs: [],
    }
  }

  componentDidMount() {
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
      console.log("delete successful")
      newJobs = component.state.savedJobs.filter((job) => {
        return job.id != id;
      });
      component.setState({ savedJobs: newJobs});
    }
  });
}

handleSubmit(e, job) {
 console.log('handle submit')
 $.getJSON('/api/jobs.json',
 (response) => { this.setState({
   savedJobs: response,
 })
});
}

render () {
  return (
    <div className="searchPage">
      <div className="searchContainer1">
        <SearchContainer
          handleSubmit = {(e, job) => this.handleSubmit(e, job)}
          />
      </div>
      <div className = "savedJobsSearch">

      <SavedJobs
        savedJobs = {this.state.savedJobs}
        handleDelete ={(e, id) => this.handleDelete(e, id)}
        />
    </div>
    </div>
  )
}
}
