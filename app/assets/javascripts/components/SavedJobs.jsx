class SavedJobs extends React.Component {


  render(){
    let {handleDelete, job} = this.props
    let component = this
    savedJobs = this.props.savedJobs.map(function(job, index){
      return(
        <div key={index}>
          <h3>{job.company}</h3>
          <p>{job.title}</p>
          <p><a href={job.url} target="_blank">Apply now!</a></p>
          <form onSubmit={(e) => component.props.handleDelete(e, job.id)}>
            <button type="submit">Delete </button>
          </form>
        </div>
      )
    })
    return(
      <div className="savedJobs">
        <h2 className="dashboardHeader">Saved Jobs</h2>
        {savedJobs}
      </div>
    )
  }
}
