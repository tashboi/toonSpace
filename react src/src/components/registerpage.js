import React from 'react';

class Registerpage extends React.Component {

render() {
  return (

    <div>
        <div>
            <h1>Please fill in the form below to register!</h1>
            <h2> Test </h2>
            <br/>
        </div>

<div id="RegistrationForm">
    <p> Please enter your email</p>
    <input
        type='text'
        placeholder='email'
        value={this.props.email}
        onChange={this.props.handleEmail}/>

    <p> Please enter your password</p>
    <input
        type='password'
        placeholder='password'
        value={this.props.password}
        onChange={this.props.handlePassword}
    />
    <br />
    <button onClick={this.props.handleRegisterClick}>Register</button>

</div>


    </div>
  );
}
}

export default Registerpage;