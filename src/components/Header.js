import React from "react";
import Moment from "react-moment";
import "../styles/Header.css";

// function Header(props) {
class Header extends React.Component {
  render() {
    return (
      <Moment format="dddd MMMM Do YYYY, h:mm a">
        {this.props.dateToFormat}
      </Moment>
    );
  }
}

export default Header;
