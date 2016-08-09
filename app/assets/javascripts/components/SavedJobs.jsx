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


render(){
  savedJobs = this.state.savedJobs.map(function(job){
    return(
      <ul key={job.id}>
        <li>{job.company}</li>
      </ul>
    )
  })

  return(
    <div className = "savedJobs">
      {savedJobs}
    </div>
  )
}
}
