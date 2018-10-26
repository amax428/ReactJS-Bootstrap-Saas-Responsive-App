import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import HomePage from '../../pages/home-page';
import SkilledPage from '../../pages/skilled-page';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <main>
                    <Route exact path="/skilled" component={SkilledPage}/>
                    <Route exact path="/" component={HomePage}/>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;