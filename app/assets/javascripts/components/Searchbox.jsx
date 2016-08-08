
class Searchbox extends React.Component {
  render(){

    function queryGHJobs (query) {
         var term = query.replace(/\s/, "+"); // replace any white space characters with a "+"
         var url = "https://jobs.github.com/positions.json?search="+term+"&callback=?";
         // fetch all jobs matching the passed in search as JSON
         return $.getJSON(url).then(function(response) {
           return response
         });
       }

    let {handleSearchInput, handleSearchSubmit, query} = this.props
    return(
      <div className="searchBox">
        <form onSubmit={(e) => handleSearchSubmit(e)}>
          <input onChange={(e) => handleSearchInput(e)} value={query} type="text" placeholder="Job search" />
          <button type="submit"> Search</button>
        </form>
      </div>
    )
  }
}
