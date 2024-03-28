import Button from "./Button";
import Card from "./Card";
import GalleryCard from "./GalleryCard";

function Influencer(props) {
    return <>
        <div className="influencer_wrapper">
            <div className="influencer_aside">
                <div className="card_top">
                    <img src='./img/OIP.jpeg' alt="" />
                </div>
                <div className="card_body">
                    <div className="item_box">
                        <p className="name">Devendra Shahi Thakuri</p>
                    </div>
                    <div className="item_box">
                        <i className="bi bi-balloon-heart"></i>
                        <p className="follower_count">Follower Count: 222</p>
                    </div>
                    <div className="item_box">
                        <i className="bi bi-mortarboard"></i>
                        <p className="expertise">Art and Design</p>
                    </div>
                    <div className="socials">
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-threads"></i>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter-x"></i>
                    </div>
                    <Button name="Hire Now" padding="0.4rem 2rem" bgColor='white' color='black'/>
                </div>
            </div>

            <div className="influencer_main">
                <div className="influencer_brief">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio, exercitationem sapiente debitis blanditiis iste totam labore? Similique quidem quo cupiditate cum quam perferendis itaque quae illo sint velit nesciunt architecto mollitia provident ipsam, ipsa nostrum. Delectus harum tenetur eius quia totam fugit qui reiciendis recusandae. Explicabo, animi nihil neque dolorum veritatis ipsum laudantium voluptatum, facilis quidem voluptatibus rerum totam. Cupiditate adipisci esse reiciendis sapiente et ullam incidunt. Dolor magnam, velit nesciunt voluptatum, eos ex facere mollitia, explicabo aliquid dolorum voluptatibus nihil non perferendis suscipit minus similique?</p>
                </div>

                <div className="influencer_gallery">
                    <h2>Gallery</h2>
                    <div className="gallery_wrapper">
                        <GalleryCard src='./img/OIP1.jpeg'/>
                        <GalleryCard src='./img/OIP.jpeg'/>
                        <GalleryCard src='./img/deepak.jpg'/>
                        <GalleryCard src='./img/sangam.jpg'/>
                        <GalleryCard src='./img/saroj.jpg'/>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Influencer;