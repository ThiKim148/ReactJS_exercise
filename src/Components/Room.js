import React, { Component } from 'react';
import { getData } from './data1';

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      myfile: '',
      type_room: '',
      area: '',
      price: '',
      oldprice: '',
      rooms: [], // Lưu danh sách phòng ngay trong state
    };
  }

  componentDidMount() {
    // Khi component load lần đầu, lấy dữ liệu từ localStorage
    const storedRooms = JSON.parse(localStorage.getItem('rooms')) || [];
    this.setState({ rooms: storedRooms });
  }

  saveLocalStorage = (event) => {
    event.preventDefault();

    const newRoom = {
      id: this.state.rooms.length + 1,
      name: this.state.name,
      myfile: this.state.myfile,
      type_room: this.state.type_room,
      area: this.state.area,
      price: this.state.price,
      oldprice: this.state.oldprice,
    };

    const updatedRooms = [...this.state.rooms, newRoom];
    this.setState({
      rooms: updatedRooms,
      name: '',
      myfile: '',
      type_room: '',
      area: '',
      price: '',
      oldprice: '',
    });

    localStorage.setItem('rooms', JSON.stringify(updatedRooms));
  };

  myChangeHandler = (event) => {
    const nam = event.target.name;
    let val = event.target.value;
    if (nam === 'myfile' && event.target.files.length > 0) {
      val ="images/"  + event.target.files[0].name;
    }
    this.setState({ [nam]: val });
  };

  handleMessage = (event) => {
    event.preventDefault();
    alert('Thanks for your order!');
  };

  render() {
    return (
      <div className="container">
        <h2>Add Room</h2>
        <form>
          <label>Enter your name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter name"
            onChange={this.myChangeHandler}
          />

          <label>Enter Image:</label>
          <input
            type="file"
            name="myfile"
            id="myfile"
            onChange={this.myChangeHandler}
          />

          <label>Enter Type Room:</label>
          <input
            className="form-control"
            type="text"
            name="type_room"
            value={this.state.type_room}
            placeholder="Enter type room"
            onChange={this.myChangeHandler}
          />

          <label>Enter Area:</label>
          <input
            className="form-control"
            type="text"
            name="area"
            value={this.state.area}
            placeholder="Enter area"
            onChange={this.myChangeHandler}
          />

          <label>Enter Price:</label>
          <input
            className="form-control"
            type="text"
            name="price"
            value={this.state.price}
            placeholder="Enter price"
            onChange={this.myChangeHandler}
          />

          <label>Enter Old Price:</label>
          <input
            className="form-control"
            type="text"
            name="oldprice"
            value={this.state.oldprice}
            placeholder="Enter old price"
            onChange={this.myChangeHandler}
          />

          <div className="btt-add">
            <button type="button" onClick={this.saveLocalStorage} className="btn btn-primary">Add</button>
            <button type="button" onClick={this.handleMessage} className="btn btn-success">Đặt Phòng</button>
          </div>
        </form>

        <br /><br />

        {/* Menu */}
        <div className="menu-header">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">TRANG CHỦ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">PHÒNG VÀ MỨC GIÁ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ĐẶT PHÒNG</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">HÌNH ẢNH</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">GIỚI THIỆU</a>
            </li>
          </ul>
        </div>

        {/* Bảng hiển thị danh sách phòng */}
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>TYPE ROOM</th>
              <th>IMAGE</th>
              <th>AREA</th>
              <th>PRICE</th>
              <th>OLD PRICE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.rooms.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.type_room}</td>
                <td><img src={item.myfile} style={{ width: '50px', height: '50px' }} alt="Room" /></td>
                <td>{item.area}</td>
                <td>{item.price}</td>
                <td>{item.oldprice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Room;
