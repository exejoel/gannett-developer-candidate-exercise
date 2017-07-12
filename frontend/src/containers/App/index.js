import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAPIData, getAPIDataWithProfile } from './actions';
import { selectApiData } from './selectors';
import { withCookies } from 'react-cookie';
import moment from 'moment';

import Header from '../../components/Header'
import TabulatedList from '../../components/TabulatedList'

import logo from './images/logo.svg';

class App extends Component {
  componentWillMount() {
    const { cookies } = this.props;
    const id = cookies.get('profileId')
    if (id) {
      this.props.actions.getAPIDataWithProfile(id);
    } else {
      this.props.actions.getAPIData();
    }
  }

  componentDidUpdate() {
    const { cookies } = this.props;
    if (cookies && !cookies.get('profileId')) {
      console.log("Setting cookie ----------", this.props.apiData);
      cookies.set('profileId',
        this.props.apiData && this.props.apiData.profileId,
        {
          expires: moment().add(365, 'd').toDate(),
        }
      );
    }
  }

  render() {
    return (
      <div className="app">
        <Header logo={logo} headerText={"My Delicious Articles"} />
        <TabulatedList {...this.props.apiData} />
      </div>
    );
  }
}

App.defaultProps = {
  apiData: {},
};

App.propTypes = {
  actions: PropTypes.object.isRequired,
  apiData: PropTypes.object
};

const mapStateToProps = (state) => ({
  apiData: selectApiData(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getAPIData, getAPIDataWithProfile }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(App));
