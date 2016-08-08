class SaveJob extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSaved: false,
      job: []
    }
  }


  handleSearchSubmit(e){


    e.preventDefault()
    let component=this
    queryGHJobs(this.state.query).then( data => {
      component.setState({
        hasSaved: true,
        job: data
      })
    })
  }

  render(){
          return (
            <SaveJobButton
            />
          )
        }

}
