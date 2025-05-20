import React from 'react';
import Slide from './layout_page/Slide.js';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Introduce = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div id="content">
          <div>
            <div className="space50">&nbsp;</div>
            <div className="space50">&nbsp;</div>
            <h2 className="text-center wow fadeInDown animated" style={{ visibility: 'visible' }}>
              Món quà lớn nhất của chúng tôi là có được sự hài lòng của quý khách
            </h2>
            <div className="space20">&nbsp;</div>
            <p className="text-center wow fadeInLeft animated" style={{ visibility: 'visible' }}>
              Đói thì phải ăn, khát thì phải uống. Các nhà khoa học gọi đó là Định Luật Bảo Toàn Tính Mạng
            </p>
            <div className="space35">&nbsp;</div>

            {/* Beta Counters */}
            <div className="row">
              <div className="col-sm-2 col-sm-push-2">
                <div className="beta-counter">
                  <p className="beta-counter-icon"><i className="fa fa-user" /></p>
                  <p className="beta-counter-value timer numbers" data-to={19855} data-speed={2000}>19,855</p>
                  <p className="beta-counter-title">Clients Satisfied</p>
                </div>
              </div>
              <div className="col-sm-2 col-sm-push-2">
                <div className="beta-counter">
                  <p className="beta-counter-icon"><i className="fa fa-picture-o" /></p>
                  <p className="beta-counter-value timer numbers" data-to={3568} data-speed={2000}>3,568</p>
                  <p className="beta-counter-title">Amazing Works</p>
                </div>
              </div>
              <div className="col-sm-2 col-sm-push-2">
                <div className="beta-counter">
                  <p className="beta-counter-icon"><i className="fa fa-clock-o" /></p>
                  <p className="beta-counter-value timer numbers" data-to={258934} data-speed={2000}>258,934</p>
                  <p className="beta-counter-title">Support Hours</p>
                </div>
              </div>
              <div className="col-sm-2 col-sm-push-2">
                <div className="beta-counter">
                  <p className="beta-counter-icon"><i className="fa fa-pencil" /></p>
                  <p className="beta-counter-value timer numbers" data-to={150} data-speed={2000}>150</p>
                  <p className="beta-counter-title">New Projects</p>
                </div>
              </div>
            </div>

            <div className="space50">&nbsp;</div>
            <hr />
            <div className="space50">&nbsp;</div>

            {/* Team Section */}
            <h2 className="text-center wow fadeInDown animated" style={{ visibility: 'visible' }}>
              Đội ngũ của chúng tôi
            </h2>
            <div className="space20">&nbsp;</div>
            <h5 className="text-center other-title wow fadeInLeft animated">Founders</h5>
            <p className="text-center wow fadeInRight animated">
              Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia <br />consequuntur magni dolores.
            </p>
            <div className="space20">&nbsp;</div>

            {/* Founders */}
            <div className="row">
              {/* Founder 1 */}
              {/* ... giống như bạn đã viết, giữ nguyên HTML các phần tử như trong class component */}
              {/* Member section cũng tương tự, chỉ cần giữ nguyên JSX */}
            </div>

            <div className="space60">&nbsp;</div>
            <h5 className="text-center other-title wow fadeInDown animated">Thành viên</h5>
            <p className="text-center wow fadeInUp animated">
              Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia <br />consequuntur magni dolores.
            </p>
            <div className="space20">&nbsp;</div>

            {/* Members */}
            <div className="row">
              {/* Các member như Thông, Đạt, Đào, Vương, bạn giữ nguyên JSX như trong phần trước */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Introduce;
