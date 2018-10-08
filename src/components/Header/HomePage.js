import React from 'react';


const HomePage =(props)=> {
        return (
            <section className="homepage" >
                <section className="homepage-img-section" >
                    <img
                        src={require("../../images/my-pic.jpg")}
                        className="homepage-img"
                    />
                </section>
                <section className="homepage-banner">
                    <h2><strong>Full Stack Web Developer</strong></h2>
                    <p>
                        <a title="" className="homepage-anchor" href="http://reactjs.org/">ReactJs</a>  {"  |  "}
                        <a title="" className="homepage-anchor" href="http://redux.js.org/">Redux</a>   {"  |  "}
                        <a title="" className="homepage-anchor" href="https://nodejs.org/en/">NodeJs</a>{"  |  "}
                        <a title="" className="homepage-anchor" href="https://nodejs.org/en/">HapiJs</a>{"  |  "}
                        <a title="" className="homepage-anchor" href="https://nodejs.org/en/">NodeJs</a>{"  |  "}
                        <a title="" className="homepage-anchor" href="https://www.w3schools.com/js/">JavaScript</a>{"  |  "}
                        <a title="" className="homepage-anchor" href="https://www.mongodb.com/">MongoDB</a>{"  |  "}
                        <a title="" className="homepage-anchor" href="https://getbootstrap.com/docs/3.3/">Bootstrap</a>{"  |  "}
                        <a title="" className="homepage-anchor" href="https://www.w3schools.com/html/">HTML</a>{"  |  "}
                        <a title="" className="homepage-anchor" href="https://www.w3schools.com/Css/">CSS</a>
                    </p>
                    <a title="View on LinkedIn" href="#" className="social-link">  <i className="fab fa-linkedin homepage-icon-g"></i> </a>
                    <a title="View on Google" href="#" className="social-link">  <i className="fab fa-google homepage-icon"></i></a>
                    <a title="View on Facebook" href="#" className="social-link">  <i className="fab fa-facebook-square homepage-icon"></i></a>
                    <a title="View on GitHub" href="https://github.com/abhilash-Pandey94" className="social-link">  <i className="fab fa-github homepage-icon"></i></a>
                    <a title="View on Twitter" href="#" className="social-link">  <i className="fab fa-twitter-square homepage-icon"></i></a>
                </section>

            </section>
        );
    }
export default HomePage;
