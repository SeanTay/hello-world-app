class SaveJobContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSaved: false,
    }
  }
  handleSaveSubmit(e){
    let component = this
    e.preventDefault()
    let {handleSubmit, job} = component.props
    $.ajax({
      url: '/api/jobs',
      type: 'POST',
      data: { job: { title: job.title, description: job.description, company: job.company, hasSaved: true} },
      success: () => {
        component.props.handleSubmit(e, job);
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
