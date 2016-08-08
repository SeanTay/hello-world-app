class SavedJobs extends React.Component {
  render(){
    jobs = this.props.jobs.map(function(job){
      return(
        <div>
        <p key={job.id}></p>
        <p>{job.company}</p>
        </div>
      )
    })

    return(
      <div>
        {jobs}
      </div>
    )


  }
}
