import React from "react";
import { useParams } from "react-router-dom";

// сделать запрос и закинуть в state
class User extends React.Component {
  state = {
    avatarUrl: null,
    userName: null,
    userLocation: null,
  };

  componentDidMount() {
    this.updateUserData(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    const currentUserId = this.props.match.params.userId;

    if (currentUserId !== prevProps.match.params.userId) {
      this.updateUserData(currentUserId);
    }
  }

  // input urlId
  // output undefined
  updateUserData = () => {
    fetch(`https://api.github.com/users/${this.props.match.params.userId}`)
      .then(res => res.json())
      .then(userData => {
        this.setState({
          avatarUrl: userData.avatar_url,
          userName: userData.name,
          userLocation: userData.location,
        });
      });
  };

  
  render() {
    const { avatarUrl, userName, userLocation } = this.state;
    if (!avatarUrl || !userName || !userLocation) {
      return null;
    }
    return (
      <div className="user">
        <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{userName}</span>
          <span className="user__location">{userLocation}</span>
        </div>
      </div>
    );
  }
}
export default User;
