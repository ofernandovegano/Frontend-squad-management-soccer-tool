import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Field, reduxForm } from 'redux-form';

// import { } from '../actions';

class CreateTeamForm extends Component {
  onSubmit = (values) => {
  //   this.props.addTeam(values, () => {
  //     this.props.history.push('/');
  //   });
  }

  render() {
    return (
      <div key="add" className="form-container">
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Team Name</label>
          <Field name="name" type="text" placeholder="Juventus F. C." component="input" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <Field name="description" type="text" placeholder="Cristiano Ronaldo is better than Lionel Messi" component="input" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="website">Team website</label>
          <Field name="website" type="text" placeholder="www.juventus.com" component="input" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="teamType">Team Type</label>
          <label>
            <Field name="teamType" type="radio" component="input" />
            Real  
          </label>
          <label>
            <Field name="teamType" type="radio" component="input" />
            Fantasy  
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <Field name="tags" type="text" component="input" className="form-control" />
        </div>
        <button type="submit">Add car</button>
      </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeamForm);
