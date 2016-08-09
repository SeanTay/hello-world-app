class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      savedJobs: []
    }
  }

  componentDidMount() {
    $.getJSON('/api/jobs.json',
    (response) => { this.setState({
      savedJobs: response
    })
  });
}

handleSubmit(job) {
  var newState = this.state.savedJobs.concat(job);
  this.setState({
    savedJobs: newState
  })
}

handleDelete(e, id) {
  e.preventDefault()
  let component=this

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

  render () {
    return (
      <div>
      <SearchContainer
        handleSubmit = {(job) => this.handleSubmit(job)}
        />

      <SavedJobs
        savedJobs = {this.state.savedJobs}
        handleDelete = {(e, id) => this.handleDelete(e, id)}/>
        </div>
    );
  }
}
