import React from "react";
import "./footerStyles.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>The Outdoors Blog INC</h4>
            <ul className="list-unstyled">
              <li>(757)-123-4567</li>
              <li>123 West River RD.</li>
              <li>Moutain Town, Virginia 12345</li>
            </ul>
          </div>
          <div className="col">
            <h4>Resources</h4>
            <ul className="list-unstyled">
              <li>https://www.rei.com/</li>
              <li>https://www.basspro.com/shop/en#</li>
              <li>https://www.backcountry.com/</li>
            </ul>
          </div>
          <div className="col">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Email: theOutdoorsBlog@gmail.com</li>
              <li>Phone: (757-123-4567)</li>
            </ul>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} The Outdoors Blog INC | ALL right
              reserved | Terms of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
