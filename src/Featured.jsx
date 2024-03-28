import Card from "./components/Card";

export default function Featured() {
  return (
    <>
      <div className="featured">
        <h1 style={{ textAlign: "center" }}>Our Top Influencers</h1>
        <div className="card_wrapper">
          {/* iname = Influencer Name, fc = Follower Count experties can be in different fields like
            Fashion and Style:
                Fashion bloggers
                Personal stylists
                Makeup artists

            Beauty and Skincare:
                Beauty influencers
                Skincare experts
                Makeup artists

            Fitness and Wellness:
                Fitness coaches
                Yoga instructors
                Nutritionists
                
            Travel and Adventure:
                Travel bloggers
                Adventure enthusiasts
                Travel photographers

            Food and Cooking:
                Food bloggers
                Chefs
                Cooking enthusiasts

            Technology and Gadgets:
                Tech reviewers
                Gadget enthusiasts
                Gamers

            Parenting and Family:
                Parenting bloggers
                Family vloggers
                Childcare experts

            Business and Entrepreneurship:
                Business coaches
                Entrepreneurial influencers
                Marketing experts

            Art and Design:
                    Artists
                    Designers
                    Illustrators

            Entertainment and Pop Culture:
                Movie reviewers
                Pop culture commentators
                Entertainment journalists

            Home Decor and DIY:
                Home decor enthusiasts
                DIY bloggers
                Interior designers

            Lifestyle and Personal Development:
                Lifestyle bloggers
                Personal development coaches
                Motivational speakers 
                */}

                  <Card imgSrc="/public/img/OIP.jpeg" iName="Devendra Shahi Thakuri" fc="222" expertise="Art and Design" />
                  
                  <Card imgSrc="/public/img/OIP1.jpeg" iName="Sonia Sharma" fc="122" expertise="Beauty and Skincare" />

                  <Card imgSrc="/public/img/deepak.jpg" iName="Deepak Bhattrai" fc="123" expertise="Beauty and Skincare" />

                  <Card imgSrc="/public/img/sangam.jpg" iName="Sangam Kshettri" fc="243" expertise="Entertainment and Pop Culture" />

                  <Card imgSrc="/public/img/saroj.jpg" iName="सरोज घिमिरे" fc="456" expertise="Business and Entrepreneurship" />
          
                  <Card imgSrc="/public/img/saroj.jpg" iName="सरोज घिमिरे" fc="456"   expertise="Technology and Gadgets" />

        </div>
      </div>
    </>
  );
}
