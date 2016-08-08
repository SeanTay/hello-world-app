class Results extends React.Component {
  render(){
    let {jobs}=this.props
    let results=jobs.map((job, index) => {
      return (
        <div key={index}>
          <img width="200px" src={job.company_logo} alt={job.company}></img>
          <p>{job.title}</p>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.description}.toHtml()</p>
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
