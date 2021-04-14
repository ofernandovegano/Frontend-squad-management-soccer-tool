import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { } from '../actions';

class Table extends Component {


  render() {
    return (
      <table className='my-teams-table' id='my-teams'>
      <div className='thead'>
        <div className='tr'>
          <div className="row row-table">
            <div className="col-3">
              <div className='th'>Name</div>
            </div>
            <div className="col-9">
              <div className='th'>Description</div>
            </div>
          </div>
          </div>
      </div>
      <div className='tbody'>
        { this.props.rows.map((row) => {
          return (
            <div className="row row-table">
              <div className="col-3">
                <div className='td'>{row[0]}</div>
              </div>
              <div className="col-9 team-info">
                <div className='td'>{row[1]}</div>
                <div className="icons">
                  <span aria-label="Delete" data-balloon-pos="up"><i className="fas fa-trash icon"></i></span>
                  <span aria-label="Share" data-balloon-pos="up"><i className="fas fa-share-alt icon"></i></span>
                  <span aria-label="Edit" data-balloon-pos="up"><i className="fas fa-pen icon"></i></span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
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
