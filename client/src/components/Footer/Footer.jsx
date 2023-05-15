import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"


import "./Footer.scss";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, non? Exercitationem assumenda, vitae totam tempore nam doloremque? Sit, hic, illum quia nulla, debitis amet tempore deleniti et atque voluptatum esse?
                </div>

            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-items">
                    <FaLocationArrow />
                    <div className="text">
                        Kayaloram Rd, Punnamada, Kottankulangara, Alaappuzha, Kerala, 688006
                    </div>
                </div>
                <div className="c-items">
                    <FaMobileAlt />
                    <div className="text">
                        981341038
                    </div>
                </div>
                <div className="c-items">
                    <FaEnvelope />
                    <div className="text">
                        APPPILot@gmail.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <div className="text">Headphones</div>
                <div className="text">Smart Watches</div>
                <div className="text">Bluetooth Speakers</div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Home Theatre</div>
                <div className="text">Projectors</div>
                <div className="text">Mobile Phones</div>
                
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <div className="text">Home</div>
                <div className="text">About</div>
                <div className="text">Privacy Policy</div>
                <div className="text">Returns</div>
                <div className="text">Terms and conditions</div>
                <div className="text">Contact Us</div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    ECOM 2023 Created by bhardwaj technolgies
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>;
};

export default Footer;
