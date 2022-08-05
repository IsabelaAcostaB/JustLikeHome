import React from "react";
import footer from "../../styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="footer-boxes">
                <div className="copyright">

                    <p>2022</p>
                    <p>Digital Booking</p>

                </div>

            <div className="social-media">
                <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
            </div>

        </div>

        </footer>

    )
}

export default Footer