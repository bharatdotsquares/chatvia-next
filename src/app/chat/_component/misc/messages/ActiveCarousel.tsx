'use client'
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import $ from 'jquery'; 

// window.$ = window.jQuery = $
 
function ActiveCarousel() {
  return (
    <div className="px-4 pb-4" dir="ltr">
      {/* <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        id="user-status-carousel"
      > */}
        <div className="item">
          <a href="#" className="user-status-box">
            <div className="avatar-xs mx-auto d-block chat-user-img online">
              <img
                src="assets/images/users/avatar-4.jpg"
                alt="user-img"
                className="img-fluid rounded-circle"
              />
              <span className="user-status" />
            </div>
            <h5 className="font-size-13 text-truncate mt-3 mb-1">Doris</h5>
          </a>
        </div>
      {/* </OwlCarousel> */}
    </div>
  )
}

export default ActiveCarousel
