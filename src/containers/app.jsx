import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { } from '../actions';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import MyTeams from './my_teams';
import MyTeams from './top_five';

class App extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div className="app-container">
        <Navbar />
        <div className="row">
          <div className="col-6 first-column">
            <div className="my-teams rounded-corners">
              <MyTeams />
            </div>
          </div>
          <div className="col-6 second-column">
            <div className="top-five rounded-corners">
              <TopFive />
            </div>
            <div className="most-less-picker rounded-corners">

            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
