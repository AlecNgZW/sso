import * as React from 'react';

import * as toastr from 'toastr';
import { ApiService } from '../services/ApiService';
import { AuthService } from '../services/AuthService';

import AuthContent from './AuthContent';
import Buttons from './Button';

export default class AppContent extends React.Component<any, any> {


  constructor(props: any) {
    super(props);

    this.authService = new AuthService();
    this.apiService = new ApiService();
    this.state = { user: {}, api: {} };
    this.shouldCancel = false;
  }

  componentDidMount() {
    this.getUser();
  }

  login = () => {
    this.authService.login();
  };

  callApi = () => {
    this.apiService
      .callApi()
      .then(data => {
        this.setState({ api: data.data });
        toastr.success('Api return successfully data, check in section - Api response');
      })
      .catch(error => {
        toastr.error(error);
      });
  };

  componentWillUnmount() {
    this.shouldCancel = true;
  }

  renewToken = () => {
    this.authService
      .renewToken()
      .then(user => {
        toastr.success('Token has been sucessfully renewed. :-)');
        this.getUser();
      })
      .catch(error => {
        toastr.error(error);
      });
  };

  logout = () => {
    this.authService.logout();
  };

  getUser = () => {
    this.authService.getUser().then(user => {
      if (user) {
        toastr.success('User has been successfully loaded from store.');
      } else {
        toastr.info('You are not logged in.');
      }

      if (!this.shouldCancel) {
        this.setState({ user });
      }
    });
  };

  render() {
    return (
      <>
        <Buttons
          login={this.login}
          logout={this.logout}
          renewToken={this.renewToken}
          getUser={this.getUser}
          callApi={this.callApi}
        />

        <AuthContent api={this.state.api} user={this.state.user} />
      </>
    );
  }
}