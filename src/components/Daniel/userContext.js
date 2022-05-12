import React from 'react';

const UserContext = React.createContext();
export default UserContext;
export class UserProvider extends React.Component{
    state={
        userID:null
    }
    setUser=(newid)=>{
     this.setState({userID:newid});
     console.log(this.state.userID)
    }
    render(){
        return(
            <UserContext.Provider value={{...this.state,setUser: this.setUser}}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}


