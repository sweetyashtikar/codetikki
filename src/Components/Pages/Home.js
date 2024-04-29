// Home.js
import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="home-container">
          <div className="welcome-text">
            <h1>
              Welcome To <span className="whitspace"> </span> CodeTikki IT
              Solutions
            </h1>
            <p>
              At CodeTikki, we are dedicated to redefining possibilities in the
              realm of technology. Our commitment extends beyond delivering mere
              solutions; we strive to transform challenges into opportunities,
              empowering businesses and individuals to thrive in the digital
              age.
            </p>
            <p>
              <a href="#">Explore</a>
            </p>
          </div>
          <div className="image-container">
            <img src="../Images/AI-removebg-preview 1.png" alt="Your Image" />
          </div>
        </div>
        {/* //our mission */}
        <div className="mission-container">
          <div className="our-container">
            <h1>
              <span> Our</span> Mission
            </h1>
          </div>
          <div className="h3">
            <h3>Empowering Your Digital Footprint</h3>
          </div>

          <div className="text1">
            <p>
              We are on a mission to empower your digital footprint. Our ethos
              revolves around harnessing technology's potential to craft bespoke
              solutions that elevate your digital presence, foster growth, and
              drive success in an increasingly competitive market.
            </p>
          </div>
        </div>

        {/* our valuse */}

        <div className="mission-container">
          <div className="our-container">
            <h1>
              <span> Our</span> Values
            </h1>
          </div>
          <div className="h3">
            <h3>Exacellances. Inovation. Integrity.</h3>
          </div>

          <div className="text1">
            <p>
              We are on a mission to empower your digital footprint. Our ethos
              revolves around harnessing technology's potential to craft bespoke
              solutions that elevate your digital presence, foster growth, and
              drive success in an increasingly competitive market.
            </p>
          </div>
        </div>
      </div>
      {/* Services */}
      <button className="button">Services</button>

      <div className="container">
        <div className="center1">
          <img src="../Images/Plugin.png" alt="image1"></img>
        </div>
        <div className="center2">
          <img src="../Images/MacBook Pro 16_ - 6.png" alt="image2"></img>
        </div>
        <div className="center3">
          <img src="../Images/Frame 481992.png" alt="image3"></img>
        </div>
        <div className="center4">
          <img
            src="../Images/Real Estate Landing Page 1.png"
            alt="image4"
          ></img>
        </div>
      </div>

      {/* portfolio */}
      <div className="port">
        <div className="a1">
          <div className="a2">
            <h1>What Our Client Says About Us</h1>
          </div>
          <div className="a3">
            <div className="a4">
              <div className="a5">
                <div className="a6">
                  <div className="circle">
                    <img src="../Images/Ellipse 17.png" />
                  </div>
                  <div className="a7">
                    <h3>Hannah Schmitt</h3>
                    <div className="a8">
                      <p>Lead designer</p>
                      <div className="a9">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cursus nibh mauris, nec turpis orci lectus
                          maecenas. Suspendisse sed magna eget nibh in turpis.
                          Consequat duis diam lacus arcu. Faucibus venenatis
                          felis id augue sit cursus pellentesque enim
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="a3">
            <div className="a4">
              <div className="a5">
                <div className="a6">
                  <div className="circle">
                    <img src="../Images/Ellipse 17.png" />
                  </div>
                  <div className="a7">
                    <h3>Hannah Schmitt</h3>
                    <div className="a8">
                      <p>Lead designer</p>
                      <div className="a9">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cursus nibh mauris, nec turpis orci lectus
                          maecenas. Suspendisse sed magna eget nibh in turpis.
                          Consequat duis diam lacus arcu. Faucibus venenatis
                          felis id augue sit cursus pellentesque enim
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="a3">
            <div className="a4">
              <div className="a5">
                <div className="a6">
                  <div className="circle">
                    <img src="../Images/Ellipse 17.png" />
                  </div>
                  <div className="a7">
                    <h3>Hannah Schmitt</h3>
                    <div className="a8">
                      <p>Lead designer</p>
                      <div className="a9">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cursus nibh mauris, nec turpis orci lectus
                          maecenas. Suspendisse sed magna eget nibh in turpis.
                          Consequat duis diam lacus arcu. Faucibus venenatis
                          felis id augue sit cursus pellentesque enim
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
