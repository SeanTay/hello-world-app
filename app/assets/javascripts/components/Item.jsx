class Item extends React.Component {
  constructor(props){
    super()
    this.state = props
  }
  toggleEdit(e){
    let isEditing = !this.state.isEditing
    this.setState({
      item: this.state.item,
      isEditing: isEditing
    })
  }
  componentDidUpdate(){
    let found = ReactDOM.findDOMNode(this.refs.edit)
    if(found) found.focus();
  }
  isTyping(e){
    console.log(e)
    this.setState({
      item: e.target.value,
      isEditing: true
    })
  }
  render () {
    if(this.state.isEditing){
      return (
        <input
          onBlur={e => this.toggleEdit(e)}
          onChange={e => this.isTyping(e) }
          ref="edit"
          value={this.state.item.body} />
      )
    } else {
      return (
        <div>
          <p>{this.state.item.body}</p>
          <p>{this.state.item.tag}</p>
          <p>{this.state.item.dueDate}</p>
        </div>
      )
    }
}
}
