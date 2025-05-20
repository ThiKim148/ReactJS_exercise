import React, { useState, useEffect } from 'react';
import Slide from './layout_page/Slide.js';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import axios from 'axios';

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(res => setProducts(res.data))
      .catch(err => {});
  }, []);

  useEffect(() => {
    if (sort === true) {
      axios.get('http://localhost:3000/products?_sort=price&_order=asc&_limit=8')
        .then(res => setProducts(res.data))
        .catch(err => {});
    } else {
      axios.get('http://localhost:3000/products?_sort=price&_order=desc&_limit=4')
        .then(res => setProducts(res.data))
        .catch(err => {});
    }
  }, [sort]);

  const Low = () => {
    setSort(true);
  };

  const High = () => {
    setSort(false);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="mt-2">
        <Slide />
      </div>
      <div className="container mb-5 mt-5">
        <marquee width="80%" scrollAmount="10">
          <h4 className="txtdeepshadow">Các loại bánh tại cửa hàng</h4>
        </marquee>
        <div className="row">
          <div className="col-md-6 beta-products-details">
            <p className="pull-left t">Hiện có <span className="text-danger">{products.length}</span> sản phẩm</p>
            <div className="clearfix"></div>
          </div>
          <div className="col-md-6">
            <button onClick={Low} className="beta-btn primary op">Thấp đến cao</button>
            <button onClick={High} className="beta-btn primary lz">Cao đến thấp</button>
          </div>
        </div>
        <div className="row">
          {products.map((product, index) => (
            <Item key={index} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

const Item = ({ product }) => {
  const showType = (name_category) => {
    if (name_category === 'sản phẩm mới') return "New";
    if (name_category === 'sản phẩm hot') return "Hot";
    if (name_category === 'sản phẩm khuyến mãi') return "Sale";
    return '';
  };

  return (
    <div className="col-sm-3 mt-4">
      <div className="single-item">
        <div className="ribbon-wrapper">
          <div className="ribbon sale">{showType(product.name_category)}</div>
        </div>
        <div className="single-item-header">
          <a><img src={product.image} alt="" height="300" width="500" /></a>
        </div>
        <div className="single-item-body">
          <p className="single-item-title text-center text-danger t">{product.name}</p>
          <p className="single-item-price text-center">
            <span className="mb-3 t">$ {product.price}</span>
          </p>
        </div>
        <div className="single-item-caption mt-1 ml-5">
          <a className="add-to-cart pull-left"><i className="fa fa-shopping-cart" /></a>
          <NavLink to={`/products/${product.id}/productdetail`}>
            <button className="beta-btn primary">Details <i className="fa fa-chevron-right" /></button>
            <div className="clearfix" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
