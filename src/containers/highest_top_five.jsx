import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { } from '../actions';

class HighestTopFive extends Component {


  render() {
    return (
      <div className='container-top'>
        {this.props.highestTopFive.map(top => {
          return (
            <div className='top' key={top[0]}>
              <div>{top[0]}</div>
              <div>{top[1]}</div>
            </div>
          )
        }
        )}
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    highestTopFive: state.topFiveAge.sort((a, b) => a[1] - b[1]).slice(0, 5)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HighestTopFive);