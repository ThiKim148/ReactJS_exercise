import React,{Component} from "react";

class ProductList_class extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
        };
    }
    componentDidMount() {
        // Fetch dữ liệu từ API
        fetch('http://127.0.0.1:8000/api/products')
        .then(response => response.json())
        .then(data => {
            // Cập nhật state với dữ liệu từ API
            this.setState({ products: data });
        })
        .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <div>
            <h1>Product</h1>
            <ul>
                    {/* Hiển thị danh sách sản phẩm */}
                    {this.state.products.map(product => (
                        <li key={product.id}>
                            <img src={product.image} alt={product.name}></img>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>{product.unit_price} USD</p>
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}

export default ProductList_class;