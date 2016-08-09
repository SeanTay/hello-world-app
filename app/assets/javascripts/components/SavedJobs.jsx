class SavedJobs extends React.Component {





// handleSubmit(job) {
//   var newState = this.state.savedJobs.concat(job);
//   this.setState({
//     savedJobs: newState
//   })
// }



  render(){


    let {handleDelete, job} = this.props
    let component = this
    savedJobs = this.props.savedJobs.map(function(job){
      return(
        <div key={job.id}>
          <h3>{job.company}</h3>
          <form onSubmit={(e) => component.props.handleDelete(e, job.id)}>
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
