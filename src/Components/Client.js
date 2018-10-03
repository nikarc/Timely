import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { clients: state.clients };
}

// const ConnectedClient =