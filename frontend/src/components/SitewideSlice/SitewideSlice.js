import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { styles } from './SitewideSlice.styles';

const SitewideSlice = ({classes, children}) => {

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

SitewideSlice.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.element
};

SitewideSlice.defaultProps = {
  classes: {},
  children: ''
};

export default withStyles(styles)(SitewideSlice);
