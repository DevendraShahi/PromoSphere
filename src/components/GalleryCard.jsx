import { useState } from "react";

function GalleryCard({ src }) {
    
    const [fullScreen, setFullScreen] = useState(false);

    const viewFullScreen = ()=> {
        setFullScreen(true);
        document.body.style.overflow = 'hidden';
    }

    const closeFullScreen = () => {
        setFullScreen(false);
        document.body.style.overflow = '';
    }
    return (<>
        <div className="gallery_card" onClick={viewFullScreen}>
            <img src={src} alt="" />
        </div>
        {fullScreen && (
            <div className="fullscreen-overlay">
                <i className="bi bi-x-lg" onClick={closeFullScreen}></i>
                <img src={src} alt=""/>
            </div>
        )}
    </>
    );
}

export default GalleryCard;