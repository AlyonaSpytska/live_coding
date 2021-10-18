import React from "react";
import User from "./User.jsx";
import Pagination from "./Pagination.jsx";

class UsersList extends React.Component {
  state = {
    pageNumber: 1,
    usersPerPage: 3,
  };

  handleNext = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    });
  };

  handlePrev = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1,
    });
  };

  render() {
    const { pageNumber, usersPerPage } = this.state;
    const {users} = this.props;
    
    const startIndex = (pageNumber - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const userToRender = users.slice(startIndex, endIndex);
    return (
      <div>
        <Pagination
          usersPerPage={3}
          usersCount={this.props.users.length}
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
          pageNumber={pageNumber}
        />
        <ul className="users">
          {userToRender.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
