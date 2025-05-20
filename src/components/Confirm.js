import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from './layout_admin/wrapper.js';
import Banner from './layout_admin/banner.js';
import { useParams } from 'react-router-dom';

function Add() {
  const { id } = useParams();
  const [formState, setFormState] = useState({
    id: '',
    name: '',
    email: '',
    messages: '',
    status: '',
  });

  useEffect(() => {
    if (id) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/contacts/${id}`,
        data: null
      }).then(res => {
        const data = res.data;
        setFormState(prev => ({
          ...prev,
          id: data.id,
          status: data.status,
        }));
      }).catch(err => {
        // handle error if needed
      });
    }
  }, [id]);

  const onChange = (event) => {
    const { name, value, type } = event.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSave = (e) => {
    e.preventDefault();
    // Bạn có thể thêm logic lưu dữ liệu tại đây nếu cần
  };

  return (
    <React.Fragment>
      <div>
        <div id="wrapper">
          <Wrapper />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="contentt">
              <Banner />
              <form onSubmit={onSave} className="contact-form">
                <select
                  className="form-control sl"
                  name="status"
                  value={formState.status}
                  onChange={onChange}
                  required
                >
                  <option value="true">Xác nhận</option>
                  <option value="false">Chưa xác nhận</option>
                </select>
                <div className="form-block">
                  <button type="submit" className="btn btn-primary">Lưu</button>&nbsp;
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Add;
