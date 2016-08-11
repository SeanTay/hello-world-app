
class SaveJobButton extends React.Component {
  render(){
    let {handleSaveSubmit} = this.props
    return(
        <form onSubmit={(e) => handleSaveSubmit(e)}>
        <button type="submit">Save </button>
        </form>
      )
    }
  }
