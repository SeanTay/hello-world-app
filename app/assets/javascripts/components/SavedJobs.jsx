class SavedJobs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      savedJobs: []
    }
  }

  componentDidMount() { $.getJSON('/api/jobs.json', (response) => { this.setState({ savedJobs: response }) }); }

  handleSubmit(job) { var newState = this.state.savedJobs.concat(job); this.setState({ savedJobs: newState }) }

  render(){
    savedJobs = this.state.savedJobs.map(function(job){
      return(
        <div className = "savedJobs" key={job.id}>
          <p>{job.company}</p>
        </div>
      )
    })
    return(
      <div>
        {savedJobs}
      </div>
    )
  }
}
