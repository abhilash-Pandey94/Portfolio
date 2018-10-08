import React from 'react';

import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class ProjectPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 }

    }
    _projectCategorie() {
        if (this.state.activeTab === 0) {
            return (
            <div style={{display:"flex","padding-top":"20px"}}>
            
                <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC' }}>React Assignment #1</CardTitle>
                    <CardText>
                        Simple React Application with Login Page,Welcome Page.Tells how to call API?
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePpan</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                </Card>

                <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC' }}>React Assignment #2</CardTitle>
                    <CardText>
                        Simple React Application with Login Page,Welcome Page.Tells how to call API?
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePpan</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                </Card>

                    <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC' }}>React Assignment #3</CardTitle>
                    <CardText>
                        Simple React Application with Login Page,Welcome Page.Tells how to call API?
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePpan</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                </Card>

                
                <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC' }}>React Assignment #3</CardTitle>
                    <CardText>
                        Simple React Application with Login Page,Welcome Page.Tells how to call API?
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePpan</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                </Card>
            </div>);
        }
        else if (this.state.activeTab === 1) {
            return (            <div style={{display:"flex","padding-top":"20px"}}>
            
            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC' }}>VueJs Assignment #1</CardTitle>
                <CardText>
                    Simple React Application with Login Page,Welcome Page.Tells how to call API?
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePpan</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
            </Card>

            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC' }}>VueJs Assignment #2</CardTitle>
                <CardText>
                    Simple React Application with Login Page,Welcome Page.Tells how to call API?
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePpan</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
            </Card>

                <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC' }}>VueJs Assignment #3</CardTitle>
                <CardText>
                    Simple React Application with Login Page,Welcome Page.Tells how to call API?
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePpan</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
            </Card>

            
            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC' }}>VueJs Assignment #3</CardTitle>
                <CardText>
                    Simple React Application with Login Page,Welcome Page.Tells how to call API?
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePpan</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
            </Card>
        </div>)
        }
        else if (this.state.activeTab === 2) {
            return (            <div style={{display:"flex","padding-top":"20px"}}>
            
            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC' }}>MongoDB Assignment #1</CardTitle>
                <CardText>
                    Simple React Application with Login Page,Welcome Page.Tells how to call API?
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePpan</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
            </Card>

            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC' }}>MongoDB Assignment #2</CardTitle>
                <CardText>
                    Simple React Application with Login Page,Welcome Page.Tells how to call API?
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePpan</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
            </Card>

                <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC' }}>MongoDB Assignment #3</CardTitle>
                <CardText>
                    Simple React Application with Login Page,Welcome Page.Tells how to call API?
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePpan</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
            </Card>

            
            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url() bottom right 15% no-repeat #46B6AC' }}>MongoDB Assignment #3</CardTitle>
                <CardText>
                    Simple React Application with Login Page,Welcome Page.Tells how to call API?
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePpan</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
            </Card>
        </div>)
        }
    }
    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>ReactJs</Tab>
                    <Tab>VueJs</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                <section >
                    {this._projectCategorie()}
                </section>
            </div>
        )
    }
}
export default ProjectPage;
