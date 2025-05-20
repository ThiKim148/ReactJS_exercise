import React, { Component } from "react";

class Dientich_hcn_class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      width: 0,
      area: 0,
    };
  }

  handleLengthChange = (e) => {
    this.setState({ length: Number(e.target.value) });
  };

  handleWidthChange = (e) => {
    this.setState({ width: Number(e.target.value) });
  };

  calculateArea = () => {
    this.setState({ area: this.state.length * this.state.width });
  };

  
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Tính diện tích hình chữ nhật</h2>

        <div>
          <label>Chiều dài</label>
          <input
            type="number"
            value={this.state.length}
            onChange={this.handleLengthChange}
          />
        </div>

        <div>
          <label>Chiều rộng</label>
          <input
            type="number"
            value={this.state.width}
            onChange={this.handleWidthChange}
          />
        </div>

        <button onClick={this.calculateArea}>Tính diện tích</button>
        <h3>Diện tích: {this.state.area}</h3>
      </div>
    );
  }
}

export default Dientich_hcn_class;