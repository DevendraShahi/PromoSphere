import ReasonCard from "./components/ReasonCard";

function ChooseUs() {
    return <>
        <div className="chooseUs">
            <h1>Why Choose Us</h1>
            <div className="reasons">

                <ReasonCard icon="bi bi bi-bullseye" title="Targeted Reach" desc="Our platform features a handpicked selection of influencers, ensuring that you collaborate with the best voices in your industry. We meticulously vet each influencer to guarantee authenticity, relevance, and professionalism." />
                
                <ReasonCard icon="bi bi-collection-fill" title="Seamless Collaboration" desc="We provide a user-friendly interface that facilitates seamless communication and collaboration between businesses and influencers. Our platform streamlines the negotiation process, making it easy to reach agreements and execute campaigns efficiently." />

                <ReasonCard icon="bi bi-people-fill" title="Targeted Reach" desc="With our advanced search and filtering tools, you can pinpoint influencers whose audiences align perfectly with your target demographics. Whether you're targeting specific age groups, interests, or locations, we help you connect with the right influencers for maximum impact." />

                <ReasonCard icon="bi bi-bar-chart-fill" title="Performance Analytics" desc="Gain valuable insights into your campaign's performance with our comprehensive analytics and reporting tools. Track key metrics such as reach, engagement, conversions, and ROI to measure the effectiveness of your influencer marketing efforts." />

                <ReasonCard icon="bi bi-patch-question-fill" title="Personalized Support" desc="Our dedicated support team is here to assist you every step of the way. From campaign planning to post-campaign analysis, we offer personalized guidance and support to ensure your success with influencer marketing." />

                <ReasonCard icon="bi bi-cash-coin" title="Transparent Pricing" desc="We believe in transparent pricing with no hidden fees or surprises. Our pricing plans are flexible and tailored to suit businesses of all sizes and budgets. With clear pricing structures, you can confidently invest in influencer marketing without any guesswork." />
              
                <ReasonCard icon="bi bi-activity" title="Stay Ahead of the Curve" desc="Influencer marketing is constantly evolving, and we're committed to staying ahead of the curve. We continuously update our platform with the latest features and trends to help you stay competitive in the ever-changing digital landscape." />
              
                <ReasonCard icon="bi bi-share-fill" title="Join a Thriving Community" desc="Become part of a thriving community of businesses and influencers who are leveraging the power of influencer marketing to drive growth and engagement. Network with like-minded individuals, share insights, and forge valuable partnerships." />
            </div>
        </div>
        
    </>
}

export default ChooseUs;