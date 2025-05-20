import React, { Component } from "react";

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nguyen Van A",
      age: "20",
      email: "Anguyen12@gmail.com",
    };
  }

  render() {
    return (
      <div> {/* Thẻ div bọc tất cả các phần tử */}
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>{this.state.email}</h1>
      </div>
    );
  }
}

export default Member;