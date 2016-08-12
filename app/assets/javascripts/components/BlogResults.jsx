class BlogResults extends React.Component {



  render(){

    let {handlePostSubmit}=this.props

    let posts = this.props.posts.results
    let results=posts.map((post, index) => {
      return (

        <div className="post" key={index}>
          <h3>{post.name}</h3>
          <p>By {post.author.name}</p>
          <a href={post.refs.landing_page}>Read Now</a>

          <SavePostContainer
            post={post}
            handlePostSubmit = {(e, post) => this.props.handlePostSubmit(e, post)}
            />
        </div>
      )
    })
    return(
      <div className="blogResults">
        {results}
      </div>
    )
  }
}
