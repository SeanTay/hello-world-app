class BlogContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      query:'',
      hasSearched: false,
      posts: []
    }
  }

  handleSearchInput (e) {
    this.setState({
      query: e.target.value
    })
  }


  handleSearchSubmit(e){
    function queryMusePosts (query) {
      var term = query.replace(/\s/, "+"); // replace any white space characters with a "+"
      function capitalizeFirstLetter(term){return term.charAt(0).toUpperCase() + term.slice(1);}
      term = capitalizeFirstLetter(term)
      var url = "https://api-v2.themuse.com/posts?tag="+term+"&page=1";
      console.log(url)
      // fetch all blogs matching the passed in search as JSON
      return $.getJSON(url).then(function(response) {
        return response
      });
    }

    e.preventDefault()
    let component=this
    queryMusePosts(this.state.query).then( data => {
      component.setState({
        query: '',
        hasSearched: true,
        test: false,
        posts: data
      })
    })
  }

  render(){
    if (this.state.hasSearched){
      return(
        <div>
          <Searchbox
            handleSearchInput={(e) => this.handleSearchInput(e)}
            handleSearchSubmit={(e) => this.handleSearchSubmit(e)}
            query={this.state.query}
            />

          <BlogResults
            posts={this.state.posts}
            handleSubmit = {(e, post) => this.props.handlePostSubmit(e, post)}
            />
        </div>
      )
    } else {
      return (
        <Searchbox
          handleSearchInput={(e) => this.handleSearchInput(e)}
          handleSearchSubmit={(e) => this.handleSearchSubmit(e)}
          query={this.state.query}
          placeholder="Search a blog post topic"
          />
      )
    }
  }
}
