import React, { Component } from "react";
import data from "./data";

class Add extends Component {
    constructor(props) {
        super(props);
        const list = props.products || []; // Phòng props.products bị undefined

        this.state = {
            id: list.length > 0 ? parseInt(list[list.length - 1].id) + 1 : 1,
            name: "",
            code: "",
            price: "",
            old_price: "",
            name_category: "",
            image: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;

        if (nam === 'image') {
            val = 'images/' + event.target.files[0]?.name; // Lấy file đúng cách
        }

        this.setState({ [nam]: val });
    }

    saveProducts() {
        localStorage.setItem("products", JSON.stringify(this.list));
    }
    

    handleSubmit(event) {
        event.preventDefault();
        alert("Một sản phẩm đã được thêm vào");
        this.saveProducts();
        window.location.reload(true);
    }

    render() {
        return (
            <div className="col-sm-4">
                <div id="form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name_category">Category</label>
                        <select
                            className="form-control"
                            id="name_category"
                            name="name_category"
                            onChange={this.handleChange}
                        >
                            <option value="Thời trang nam">Nam</option>
                            <option value="Thời trang nữ">Nữ</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input
                            className="form-control"
                            id="code"
                            name="code"
                            placeholder="XXXXXXX"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image" id="avatar-label">Image</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            className="form-control"
                            id="price"
                            name="price"
                            placeholder="Price"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="old_price">Old price</label>
                        <input
                            className="form-control"
                            id="old_price"
                            name="old_price"
                            placeholder="Old price"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary mb-2"
                        id="submit"
                        onClick={this.handleSubmit}
                    >
                        Save
                    </button>
                </div>
            </div>
        );
    }
}

export default Add;
