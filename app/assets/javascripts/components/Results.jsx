class Results extends React.Component {
  render(){
    let {jobs, handleSubmit}=this.props
    let results=jobs.map((job, index) => {
      return (
        <div className="job" key={index}>
          <img width="200px" src={job.company_logo} alt={job.company}></img>
          <p>Title: {job.title}</p>
          <p>Company: <a href={job.company_url} target="_blank">{job.company}</a></p>
          <p>City: {job.location}</p>
          <p><a href={job.url} target="_blank">Apply now!</a></p>
          <SaveJobContainer
            job={job}
            handleSubmit = {(e, job) => this.props.handleSubmit(e, job)}
            />
        </div>
      )
    })
    return(
      <div>
        {results}
      </div>
    )
  }
}
