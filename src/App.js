import React, { Component } from 'react'
import Back from './Back'
import './style.css'

class App extends Component {
    state={
        name:"",
        dept:"",
        rating:"",
        user:[],
        showDetails: true,
    }


    handleChange=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
    })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state);

        var tempArr=[]
        console.log(tempArr);
        var tempObj={
        name: this.state.name,
        dept: this.state.dept,
        rating: this.state.rating
        }

        tempArr=this.state.user
        tempArr.push(tempObj)
        this.setState({user:tempArr})
        this.setState({name:'',dept:'',rating:''})
        this.setState({showDetails: !this.state.showDetails})
        console.log(this.state.user);
    }

     BackFile = ()=>{
      this.setState({showDetails: !this.state.showDetails});
    }

  render() {
    return (
      <>    
        {this.state.showDetails?
        <div className="body">
        <div className="head">EMPLOYEEE FEEDBACK FORM</div>
        <form  onSubmit={this.handleSubmit} className='form_part'>
            <label>Name:</label>
            <input type="text" name="name" autoComplete='off'   className='inpt' value={this.state.name} onChange={this.handleChange} /><br />
            <label>Department:</label>
            <input type="text" name="dept" autoComplete='off' className='inpt'  value={this.state.dept} onChange={this.handleChange} /><br />
            <label>Rating:</label>
            <input type="text" name="rating" autoComplete='off' className='inpt'  value={this.state.rating} onChange={this.handleChange} /><br />
            <button className='btn' onClick={this.handleSubmit}>submit</button>
        </form>
        

      </div> 
      : <Back feedback={this.state.user}  toggleFunc={this.BackFile} />
      }

      </>
    )
  }
}

export default App