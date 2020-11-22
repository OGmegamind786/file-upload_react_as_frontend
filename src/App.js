import React, { Component, createRef } from 'react';
import axios from 'axios';
import './App.css';
import Files from './Files'

class App extends Component {

  state={
    file : null,
    uploading :true,
  }


  inputRef = createRef();
  
  componentDidMount = () => {
    console.log(this.inputRef);
  }

  handleClick = () => {
    this.inputRef.current.click();
  }

  handleChange = async(e) =>{
    this.setState({file : e.target.files[0]})

    const form = new FormData();
    form.append('pic' , e.target.files[0]);

    await axios.post('http://localhost:3012/upload' ,form)
    alert('file uploaded');
    window.location.reload(false);
  }
    
 

  render(){


    return(
      <div>
        <input className='input-btn' onChange={this.handleChange} type="file" ref={this.inputRef} />

        <button style={{marginLeft:'25px'}} className='upload-btn'  onClick={this.handleClick}>Upload File</button>

        <Files />

      </div>

    )


  }
}

export default App;
