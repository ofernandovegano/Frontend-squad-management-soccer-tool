import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { Field, reduxForm } from 'redux-form';

import { addTeam } from '../actions';

class CreateTeamForm extends Component {
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.addTeam(this.props.teams, values, () => {
  //     this.props.history.push('/');
  //   });
  // }

  render() {
    return (
    <div key="add" className="form-container">
      <form>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="name">Team Name</label>
              <imput name="name" type="text" placeholder="Juventus F. C."className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <imput name="description" type="text" placeholder="Cristiano Ronaldo is better than Lionel Messi"className="form-control form-description" />
            </div>     
          </div>
          <div className="col-6">
            
            <div className="form-group form-right form-check">
              <label htmlFor="website">Team website</label>
              <imput name="website" type="text" placeholder="www.juventus.com"className="form-control" />
            </div>
            <div className="form-group form-right">
                <label htmlFor="teamType">Team Type</label>
                <div className="radio-check">

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="teamType" value='Real' id="radio-real" value="option1" checked />
                    <label className="form-check-label" for="radio-real">
                      Real
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="teamType" value='Fantasy' id="radio-fantasy" value="option2" />
                    <label className="form-check-label" for="radio-fantasy">
                      Fantasy
                    </label>
                  </div>
                </div>
            </div>


            <div className="form-group form-right">
              <label htmlFor="tags">Tags</label>
              <input name="tags" type="text"className="form-control form-tags" />
            </div>
              
          </div>       
        </div>
          
        <button type="submit">Add Team</button>
      </form>
    </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    teams: state.myTeams
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTeam }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeamForm);
