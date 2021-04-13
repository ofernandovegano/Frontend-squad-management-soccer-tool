import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { } from '../actions';

class Table extends Component {


  render() {
    return (
      <table className='my-teams-table' id='my-teams'>
      <thead>
        <tr>
          <div className="row">
            <div className="col-3">
              <th>Name</th>
            </div>
            <div className="col-9">
              <th>Description</th>
            </div>
          </div>
        </tr>
      </thead>
      <tbody>
        { this.props.rows.map((row) => {
          return (
            <tr>
              <div className="row">
                <div className="col-3">
                  <td>{row[0]}</td>
                </div>
                <div className="col-9">
                  <td>{row[1]}</td>
                </div>
              </div>
            </tr>
          )
        })}
      </tbody>
    </table>
    )
  }
};

function mapStateToProps(state) {
  return {
    rows: state.rows
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
