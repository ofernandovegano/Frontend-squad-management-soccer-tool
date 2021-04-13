import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { } from '../actions';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import MyTeams from './my_teams';

class App extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div className="">
        < Navbar />
        <div className="row">
          <div className="col-6">
            < MyTeams />
          </div>
        </div>
        < Footer />
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
