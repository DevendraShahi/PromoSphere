import Button from "./components/Button";

export default function Hero() {
    return <>
        <div className="hero">
            <img src="./img/hero1.webp" alt="" />
        </div>
        <div className="hero_body">
        <h1>Unlock the Power of Influencer Marketing</h1>
        <h5>Connect with the Perfect Influencers to Elevate Your Brand.</h5>
        <p>Welcome to <strong>PromoSphere</strong>, where businesses and brands meet the most influential voices in the digital world. Our platform streamlines the process of finding, collaborating with, and hiring top-tier influencers to promote your products and services. With a diverse array of creators spanning various niches and industries, we empower you to harness the unparalleled reach and authenticity of influencer marketing.</p>
        <Button name='Explore Influencers'/>
        </div>
        
    </>
}