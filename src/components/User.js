import React from "react";
import "../App.css";

const User = ({ avatar, email, firstName, lastName }) => {
  return (
    <div className="user">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
        <div className="info">
          <div className="name">
            {firstName} {lastName}
          </div>
          <div className="email">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
