import React from "react";
import Login from "./login.js";
import Logout from "./logout.js";
import UserContext from "./userContext.js";


class LoginPage extends React.Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = { 
            useridfinal: '  ',
            authenticated: false, 
            email: "", 
            password: ""
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
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
    
    handleLoginClick = () => {
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
            let newid = parseInt(data.results.id.id);
            const {userID,setUser} = this.context;
            console.log(newid);
            localStorage.setItem("UserID",JSON.stringify(newid));
            const id = localStorage.getItem("UserID")
            console.log(id);
            const FINALID =  JSON.parse(id);
            console.log("userid= "+FINALID);
               
            console.log({userID})
        })
        .catch ((err) => {
            console.log("something went wrong ", err)
            }
        );
        
    }
	
    render() {

        let page = (
            <Login 
                handleEmail={this.handleEmail} 
                handlePassword={this.handlePassword}
                handleLoginClick={this.handleLoginClick}
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
    this
}

export default LoginPage;