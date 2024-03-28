function Navbar() {
    return <>
     <nav>
         <div className="nav_left">
             <div className="logo">
                    <img src="./img/promosphere.png" alt="Promosphere_logo" />
             </div>
            <a href="#">PromoSphere</a>
         </div>
        
         <div className="nav_center">
             <div className="nav_links">
                 <a href="">Home</a>
                 <a href="">Explore</a>
                 <a href="">Dashboard</a>
                 <a href="">Hire</a>
             </div>
         </div>

         <div className="nav_right">
                <div className="user">
                <i className="bi bi-person-bounding-box"></i>
                    {/* <img src="./img/person-bounding-box.svg" alt="" /> */}
            </div>
         </div>
     </nav>
    </>
}

export default Navbar;