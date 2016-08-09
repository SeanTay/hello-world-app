class SavedJobs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      savedJobs: []
    }
  }

  componentDidMount() {
    $.getJSON('/api/jobs.json',
    (response) => { this.setState({
      savedJobs: response
    })
  });
}

handleSubmit(job) {
  var newState = this.state.savedJobs.concat(job);
  this.setState({
    savedJobs: newState
  })
}


handleDelete(e, id) {
  let component=this
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

render(){
  let component=this

  savedJobs = this.state.savedJobs.map(function(job){
    return(
      <div key={job.id}>
        <h3>{job.company}</h3>
        <form onSubmit={(e) => component.handleDelete(e, job.id)}>
          <button type="submit">Delete </button>
        </form>
      </div>
    )
  })

  return(
    <div className = "savedJobs">
      {savedJobs}
    </div>
  )
}
}
