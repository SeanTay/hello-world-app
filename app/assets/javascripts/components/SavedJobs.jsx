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


// handleSubmit(job) {
//   var newState = this.state.savedJobs.concat(job);
//   this.setState({
//     savedJobs: newState
//   })
// }

render(){
  function handleDelete(e, id) {
    e.preventDefault()
    console.log('delete item clicked')
    $.ajax({
      url: '/api/jobs/'+ id,
      type: 'DELETE',
      success(response){
        console.log('successfully removed job')
      }
    });
  }

  savedJobs = this.state.savedJobs.map(function(job){
    return(
      <div key={job.id}>
        <h3>{job.company}</h3>
          <form onSubmit={(e) => handleDelete(e, job.id)}>
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
