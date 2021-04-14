import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { } from '../actions';


class TopFive extends Component {

  render() {
    return (
    <div className="">
      <div className="my-teams-top5-header">
        <h2>Top 5</h2>
      </div>
      <hr />
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

export default connect(mapStateToProps, mapDispatchToProps)(TopFive);
