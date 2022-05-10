import React from 'react';

class Login extends React.Component {

render() {
  return (
    <div>
      <button onClick={this.props.handleLogout}>Logout</button>
    </div>
  );
}
}

export default Login;