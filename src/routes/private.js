import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  auth,
  profile,
  redirectLimitCustomers,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={renderProps =>
        auth.token ? (
          <Component {...renderProps} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps)(PrivateRoute);
