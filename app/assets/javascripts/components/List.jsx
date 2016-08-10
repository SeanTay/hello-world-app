class List extends React.Component {
  constructor(props){
    super()
    this.state = {
      items: items
    }
  }

  addItem(item){
    let items = this.state.items
    items.push(item)
    this.setState({items})
  }
  delete(index){
    let items = this.state.items
    items.splice(index, 1)
    this.setState({items})
    console.log(this.state)
  }
  render(){
    return(
      <div>
        {this.state.items.map( (item, index) => {
          console.log("inside map", item, index)
          return <Item index={index} key={index} item={item}/>
        })}
        <NewItem onCreate={ item => this.addItem(item) }/>
      </div>
    )
  }
}

let items =[{
  body: "learn react",
  tag: "study",
  dueDate: "August 1, 2016"
}, {
  body: "learn comp sci",
  tag: "study",
  dueDate: "August 1, 2016"
}
]
