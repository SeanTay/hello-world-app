class SaveJobContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSaved: false,
      savedJobs: this.props.savedJobs,
      job: []
    }
  }

handleSaveSubmit(e){
  let job = this.props.job
  console.log(this.props.handleSubmit)
  e.preventDefault()
  $.ajax({
    url: '/api/jobs',
    type: 'POST',
    data: { job: { title: job.title, description: job.description, company: job.company } },
    success: (job) => {this.props.handleSubmit(job);
    }
});
}


  render(){
    return (
      <SaveJobButton
        handleSaveSubmit={(e) => this.handleSaveSubmit(e)}/>
    )
  }

}
