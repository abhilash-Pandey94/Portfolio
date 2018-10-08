import React from 'react';

import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

const ContactPage = () => {
    return (
        <section>
            
            <br />
            <Card shadow={0} style={{ width: '820px', height: 'auto', margin: 'auto' }}>
                <CardTitle expand style={{ color: '#fff', height: '185px', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>
                <article style={{ 'text-align': 'center', 'font-size': '50px', 'margin-top': "100px", color: '#41295a' }} shadow={20}><strong>Contact me</strong></article></CardTitle>
                <CardText style={{ 'text-align': 'center', 'font-size': '20px' }} >
                    <center> Want to say Hello ?</center><br /><br />
                    <center> Then don't hesitate to email me via:</center> <br /><br /><br />
                    <center><strong style={{color: '#41295a'}}><a style={{'textDecoration':'none'}} href='https://accounts.google.com'>pandeyabhilash87@gmail.com</a></strong></center><br />
                    <center>  <strong>else</strong> </center><br />
                    <center>  Ring me: </center><br />
                    <center><strong style={{color: '#41295a'}}> +91-8006379335</strong> </center><br /><br /><br />
                    <center>  You can also find me on these website </center><br /><br />
                    <center>
                    <i className="fab fa-facebook-square contact-icon"></i>
                    <i class="fab fa-twitter-square contact-icon"></i>
                    <i class="fab fa-linkedin contact-icon"></i><br /><br />
                    </center>
                </CardText>
            </Card>
            <section style={{height:'50px','backgroundColor':'gray','marginTop':"20px",color:'white','paddingTop':'13px'}}>
                <center>
                        <article><b>
                            Privarcy  @Terms Condition
                            </b>
                        </article>
                </center>
            
            </section>
        </section>
    )
}
export default ContactPage;
