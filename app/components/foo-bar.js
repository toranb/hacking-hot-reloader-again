import Component from '@ember/component';
import { connect } from 'ember-redux';

const stateToComputed = state => ({
  number: state.number.up
});

const dispatchToActions = dispatch => ({
  update: () => dispatch({type: 'ADD'})
});

export default connect(stateToComputed, dispatchToActions)();
