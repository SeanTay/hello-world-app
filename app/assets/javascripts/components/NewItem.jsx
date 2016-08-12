class NewItem extends React.Component {
  constructor(props){
    super(props)
    console.log("newItem props", props);
    this.state = {
      body: "",
      tag: "",
      dueDate: ""
    }
  }
  render(){
    return (
      <div className="todoForm">
        <h1>To Do</h1>
        <form onSubmit={ e => this.create(e)}>
          <input type="text" value={this.state.body} placeholder="New Task" onChange={ e => this.change(e)} />
          <input type="string" value={this.state.tag} placeholder="Tags"
            onChange={e => this.changeTag(e)} />
          <input type="string" value={this.state.dueDate} placeholder="Due Date"
            onChange={e => this.changeDueDate(e)} />
          <button type="Submit">Create New</button>
        </form>
      </div>
    )
  }
  change(e){
    this.setState({
      body: e.target.value
    })
  }
  changeTag(e){
    this.setState({
      tag: e.target.value
    })
  }
  changeDueDate(e){
    this.setState({
      dueDate: e.target.value
    })
  }

  create(e){
    e.preventDefault()
    console.log("create button clicked")
    let component = this
    let {handleSubmitTodo} = component.props
    let item = this.state
    console.log(item)
    $.ajax({
      url: '/api/todos',
      type: 'POST',
      data: {todo: {body: item.body, tag: item.tag, dueDate: item.dueDate}},
      success: () => {
        console.log("create success")
        component.props.handleSubmitTodo(e, item);
        component.setState({body:"", tag:"", dueDate:""})

      }
    })




    // let item = this.state
    // this.props.onCreate(item)
    // this.setState({
    //   body: '',
    //   tag: '',
    //   dueDate: ''
    // })
  }

}
