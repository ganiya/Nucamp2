import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect,  } from 'react-router-dom'

  
class Main extends Component {

        render() {
 
        return (
            <div>
                                <Header />
                                <Switch>
                                    <Route path='/home' component={Home} />
                                    { /*<Route exact path='/aboutus' render={() => <About partners={this.props.partners} />} />
                                    <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} />
                                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
        <Route exact path='/contactus' component={Contact} /> */}
                                    <Redirect to='/home' />
                                </Switch>
                                <Footer />
                            </div>
        );
    }
}
export default Main;