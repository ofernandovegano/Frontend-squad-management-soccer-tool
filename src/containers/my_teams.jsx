import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { } from '../actions';
import Table from './table';

class MyTeams extends Component {

  render() {
    return (
      <div className="">
        <div className="my-teams-top5-header">
          <h2>My Teams</h2>
          <div className="add-team"><div>+</div></div>
        </div>
        <hr />
        <Table key='my-teams-table' id='my-teams-table' />
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

export default connect(mapStateToProps, mapDispatchToProps)(MyTeams);
