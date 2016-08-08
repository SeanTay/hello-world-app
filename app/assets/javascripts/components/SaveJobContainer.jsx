class SaveJobContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSaved: false,
      savedJobs: []
    }
  }


  toggleSave(job){

  		if(this.isJobInSavedJobs(job)){
  			this.removeFromSavedJobs(job);
  		}
  		else{
  			this.addToSavedJobs(job);
  		}

  	}

  	addToSavedJobs(job){

  		var savedJobs = this.state.savedJobs;

  		savedJobs.push({
  			title: title,
        company: company
  			timestamp: Date.now()
  		});

  		this.setState({
  			savedJobs: savedJobs
  		});

  		localStorage.savedJobs = JSON.stringify(savedJobs);
  	}

  	removeFromSavedJobs(job){

  		var savedJobs = this.state.savedJobs;
  		var index = -1;

  		for(var i = 0; i < savedJobs.length; i++){

  			if(savedJobs[i].job == job){
  				index = i;
  				break;
  			}

  		}

  		// If it was found, remove it from the savedJobs array

  		if(index !== -1){

  			savedJobs.splice(index, 1);

  			this.setState({
  				savedJobs: savedJobs
  			});

  			localStorage.savedJobs = JSON.stringify(savedJobs);
  		}

  	}

  	isJobInSavedJobs(job){

  		var savedJobs = this.state.savedJobs;

  		for(var i = 0; i < savedJobs.length; i++){

  			if(savedJobs[i].job == job){
  				return true;
  			}

  		}

  		return false;
  	}


  handleSaveSubmit(e){
    e.preventDefault()
    let component=this
    // saveTheJob(this.state.job).then( data => {
      component.setState({
        hasSaved: true,
        job: data
      })
    // })
  }





  render(){
    console.log(this.job)
    return (
      <SaveJobButton
        handleSaveSubmit={(e) => this.handleSaveSubmit(e)}/>
    )
  }

}
