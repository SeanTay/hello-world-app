
class SaveJobButton extends React.Component {
  render(){
    let {handleSaveSubmit, job} = this.props
    return(
        <form onSubmit={(e) => handleSaveSubmit(e)}>
        <button type="submit">Save </button>
        </form>
      )
    }
  }
