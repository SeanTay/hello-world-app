class SearchContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query:'',
      hasSearched: false,
      savedJobs: this.props.savedJobs,
      jobs: []
    }
  }

  handleSearchInput (e) {
    this.setState({
      query: e.target.value
    })
  }

  handleSearchSubmit(e){
    function queryGHJobs (query) {
      var term = query.replace(/\s/, "+"); // replace any white space characters with a "+"
      var url = "https://jobs.github.com/positions.json?search="+term+"&callback=?";
      // fetch all jobs matching the passed in search as JSON
      return $.getJSON(url).then(function(response) {
        return response
      });
    }

    e.preventDefault()
    let component=this
    queryGHJobs(this.state.query).then( data => {
      component.setState({
        query: '',
        hasSearched: true,
        test: false,
        jobs: data
      })
    })
  }

  render(){
    if (this.state.hasSearched){
      return(
        <Results
          jobs={this.state.jobs}
          savedJobs = {this.state.savedJobs}
          handleSubmit={(job) => this.handleSubmit(job)}/>

      )
    } else {
      return (
        <Searchbox
          handleSearchInput={(e) => this.handleSearchInput(e)}
          handleSearchSubmit={(e) => this.handleSearchSubmit(e)}
          handleSubmit = {(job) => this.handleSubmit(job)}
          query={this.state.query}
          />
      )
    }
  }
}
