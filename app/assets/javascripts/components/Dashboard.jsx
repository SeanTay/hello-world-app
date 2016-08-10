
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      savedJobs: [],
    }
  }

  componentDidMount() {
    console.log('componentdidmount')
    $.getJSON('/api/jobs.json',
    (response) => { this.setState({
      savedJobs: response,
    })
  });
}

handleDelete(e, id) {
  let component = this
  e.preventDefault()
  console.log('delete item clicked')
  $.ajax({
    url: '/api/jobs/'+ id,
    type: 'DELETE',
    success: () => {
      newJobs = component.state.savedJobs.filter((job) => {
        return job.id != id;
      });
      component.setState({ savedJobs: newJobs});
    }
  });
}

// handleSubmit(e, job) {
//   console.log('handle submit')
//   var newState = this.state.savedJobs.concat(e, job);
//   this.setState({
//     savedJobs: newState,
//     loading: false
//   })
// }

render () {

  return (

    <div>
      <SavedJobs
        savedJobs = {this.state.savedJobs}
        handleDelete ={(e, id) => this.handleDelete(e, id)}
        />
    </div>
  )

}
}
