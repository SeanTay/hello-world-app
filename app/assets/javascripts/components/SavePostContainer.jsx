class SavePostContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSaved: false,
    }
  }
  handleSaveSubmit(e){
    let component = this
    e.preventDefault()
    let {handlePostSubmit, post} = component.props

    $.ajax({
      url: '/api/posts',
      type: 'POST',
      data: { post: { title: post.name, author: post.author.name, url: post.refs.landing_page, hasSaved: true} },
      success: () => {
        component.props.handlePostSubmit(e, post);
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
