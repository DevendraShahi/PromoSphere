function Footer() {
    return <>
        <footer>
            <div className="footer_wrapper">
                <div className="footer_left">
                    <div className="logo">
                        <img src="./img/promosphere.png" alt="" />
                    </div>
                </div>
                <div className="footer_center">
                    <label htmlFor="Quick Links">Quick Links</label>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Influencers</a></li>
                        <li><a href="">Brands</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Terms and Policies</a></li>
                    </ul>
                </div>

                <div className="footer_right">
                    <div className="social_wrapper">
                        <label htmlFor="Contact Us">Contact Us</label>
                        <div className="socials">
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-threads"></i>
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-twitter-x"></i>
                        </div>
                    </div>

                    <div className="email">
                        <div className="email_box">
                            <i className="bi bi-envelope"></i>
                            <p href="">promosphere2023@gmail.com</p>
                        </div>
                        
                        <div className="email_box">
                        <i className="bi bi-geo"></i>
                            <p>Kathmandu, Nepal</p>
                        </div>

                        <div className="email_box">
                            <i className="bi bi-telephone"></i>
                            <p>+01-987654321</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright_bar">&copy; PromoSphere 2023</div>
        </footer>
        
    </>
}

export default Footer;