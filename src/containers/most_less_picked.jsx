import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MostLessPicked extends Component {


  render() {
    return (
    <div className='container-most-less-picked'>
      <div className="circle"></div> 
      <div className='row most-less-picked-row'>
        <div className='most col-6'>
            <h2>Most picked player</h2>
            <div className='img-percent'>
              <img src="assets/images/bear.png" alt="" />
              <div className='most-less-percent'>75%</div>
            </div>
          </div>
        <div className='less col-6'>
          <h2 id='h2-less'>Less picked player</h2>
            <div className='img-percent'>
              <img src="assets/images/grandmother.png" alt="" />
              <div className='most-less-percent'>25%</div>
            </div>
        </div>
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MostLessPicked);
