import React, {Component} from 'react'
import Axios from 'axios';

const initialState={
  email: '',
  name: '',
  password: '',
  phone: ''
}

class SignUp extends Component{
  constructor(){
    super();
    this.state = {initialState}
  }

  changeHandler = event =>{
    this.setState(
      {[event.target.name]: event.target.value}
    )
  }

  submitHandler = ()=> {
    Axios.post('/users', this.state)
      .then(res => {
        if(res.message ==='success')
        alert('Successfully created user');
      })
      .catch(error => {
        console.log(error)
      })
  }

  render(){
    const {name, email, password, phone} = this.state;
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <input type='text' placeholder='Name'
            name='name'
            value={name}
            onChange={this.changeHandler}
          /><br></br>

          <input type='email' placeholder='Email'
            name='email'
            value={email}
            onChange={this.changeHandler}
          /><br></br>

          <input type='password' placeholder='Password'
            name='password'
            value={password}
            onChange={this.changeHandler}
          /><br></br>

          <input type='number' placeholder='Phone'
            name='phone'
            value={phone}
            onChange={this.changeHandler}
          /><br></br>
          <button className='btn btn-danger' type='submit'>Sign up</button>
        </form>
      </div>
    )
  }
}

export default SignUp
