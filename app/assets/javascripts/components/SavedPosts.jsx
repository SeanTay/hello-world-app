class SavedPosts extends React.Component {


  render(){
    let {handleDelete, post} = this.props
    let component = this
    console.log("props", this.props)
    savedPosts = this.props.savedPosts.map(function(post, index){
      return(
        <div key={index}>
          <h4>{post.title}</h4>
          <p>By: {post.author}</p>
            <p><a href="{post.url}" target="_blank">Read</a></p>

          <form onSubmit={(e) => component.props.handlePostDelete(e, post.id)}>
            <button type="submit">Delete </button>
          </form>
        </div>
      )
    })
    return(
      <div className = "savedPosts">
      <h2 className="dashboardHeader">Resource Library</h2>
        {savedPosts}
      </div>
    )
  }
}
