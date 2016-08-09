class SavedJobs extends React.Component {


  render(){
    let component = this
    // console.log(component)
    // let savedJobs=this.props
    // console.log(savedJobs)
    savedJobsDisplay= this.props.savedJobs.map(function(job){
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
        {savedJobsDisplay}
      </div>
    )
  }
}
