import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { } from '../actions';

import Navbar from '../components/navbar';
import Footer from '../components/footer';


class CreateYourTeam extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="main rounded-corners create-your-team-container">

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

export default connect(mapStateToProps, mapDispatchToProps)(CreateYourTeam);
