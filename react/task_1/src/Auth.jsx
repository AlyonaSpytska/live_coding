import React from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

// input props (obj)
// output JSX

// algo
// 1. show login by default (login по умолчанию)
// 2. after login click - hide login, show spinner for 2 sec
// 3. after 2 sec - hide spinner, show logout
// 4. after logout click - hide logout and show login

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isProcessig: false,
  };

  loginHandler = () => {
    this.setState({ isProcessig: true });
    setTimeout(() => {
      this.setState({ isProcessig: false, isLoggedIn: true });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isProcessig, isLoggedIn } = this.state;
    if (isProcessig) {
      return <Spinner />;
    }

    return isLoggedIn ? (
      <Logout onLogout={this.logoutHandler} />
    ) : (
      <Login onLogin={this.loginHandler} />
    );
    //   if (isLoggedIn) {
    //     return <Logout onLogout={this.logoutHandler} />;
    //   }

    // return <Login onLogin={this.loginHandler} />;
  }
}

export default Auth;
