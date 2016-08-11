
class Searchbox extends React.Component {
  render(){
    let {handleSearchInput, handleSearchSubmit, query} = this.props
    return(
      <div className="searchBox">
        <form onSubmit={(e) => handleSearchSubmit(e)}>
          <input onChange={(e) => handleSearchInput(e)} value={query} type="text" placeholder={this.props.placeholder} />
          <button type="submit"> Search</button>
        </form>
      </div>
    )
  }
}
