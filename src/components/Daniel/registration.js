import React from "react";
import Logout from "./logout.js";
import Register from "./register.js";
class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            authenticated: false, 
            email: "", 
            password: ""
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
    }

    componentDidMount() {
        if(localStorage.getItem('loginToken')) {
            this.setState({authenticated:true});
        }
    }

    handlePassword = (e) => {
        this.setState({password:e.target.value})
    }

    handleEmail = (e) => {
        this.setState({email:e.target.value})
    }
    handleLogout = () => {
        this.setState({Authenticated: false});
        localStorage.removeItem('loginToken');
        window.location.reload(); 

    }

    
    handleRegisterClick = () => {
        let url = "http://unn-w18018515.newnumyspace.co.uk/26test/new/api/register" 
    
        // Send the email and password as 'Form Data'.
        let formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
    
        // A fetch request with 'POST' method specified
        fetch(url, { method: 'POST',
                     headers : new Headers(),
                     body:formData
                   })
        .then( (data) => {
            console.log(data)
            let url = "http://unn-w18018515.newnumyspace.co.uk/26test/new/api/authenticate" 
    
            // Send the email and password as 'Form Data'.
            let formData = new FormData();
            formData.append('email', this.state.email);
            formData.append('password', this.state.password);
        
            // A fetch request with 'POST' method specified
            fetch(url, { method: 'POST',
                         headers : new Headers(),
                         body:formData
                       })
            .then( (response) => {
                // Successful authentication will return
                // a 200 status code.
                if (response.status === 200) {
                    return response.json() 
                } else {
                    throw Error(response.statusText)
                }
            })
            .then( (data) => {
                console.log(data)
        
                // If results include a token, change state
                // to authenticated
                if ("token" in data.results) {
                    this.setState({ authenticated: true })
                    localStorage.setItem('loginToken', data.results.token); 
                }
            })
            .catch ((err) => {
                console.log("something went wrong ", err)
                }
            );
        })
        .catch ((err) => {
            console.log("something went wrong ", err)
            }
        );
    }
	
    render() {

        let page = (
            <Register 
                handleEmail={this.handleEmail} 
                handlePassword={this.handlePassword}
                handleRegisterClick={this.handleRegisterClick}
            />
        )
        if (this.state.authenticated) {
            page = (
                <Logout
                    handleLogout={this.handleLogout}
               />
            )
        }

        return (
            <div>{page}</div>
        )
    }
}

export default Registration;