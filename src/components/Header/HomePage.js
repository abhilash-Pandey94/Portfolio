import React from 'react';


class HomePage extends React.Component {
    render() {
        return (
            <section  >
                <section style={{ 'margin-left': '37%', 'margin-right': '31%' }} >
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
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
                    <a title="View on LinkedIn" href="#" className="social-link">  <i style={{ 'font-size': "30px" }} className="fab fa-linkedin"></i> </a>
                    <a title="View on Google" href="#" className="social-link">  <i className="fab fa-google homepage-icon"></i></a>
                    <a title="View on Facebook" href="#" className="social-link">  <i className="fab fa-facebook-square homepage-icon"></i></a>
                    <a title="View on GitHub" href="https://github.com/abhilash-Pandey94" className="social-link">  <i className="fab fa-github homepage-icon"></i></a>
                    <a title="View on Twitter" href="#" className="social-link">  <i className="fab fa-twitter-square homepage-icon"></i></a>
                </section>

            </section>
        );
    }
}
export default HomePage;
