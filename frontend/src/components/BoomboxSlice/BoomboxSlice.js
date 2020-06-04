import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import SitewideSlice from '../SitewideSlice/SitewideSlice';

import { styles } from './BoomboxSlice.styles';

const BoomboxSlice = ({classes, direction, data}) => {
  console.log(data);
  return (
    <SitewideSlice background="blue" padding="padding2">
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>

          <Grid item xs={4} className={classes.centered}>
            <Typography className={classes.title} variant="h2" component="h2">
              <FormattedMessage
                id="BoomboxSlice.title"
                defaultMessage={data.title}/>
            </Typography>
            <Typography className={classes.bodyCopy} variant="body1" component="p">
                <div>{data.copy}</div>
            </Typography>
          </Grid>

          <Grid item xs={4}></Grid>
        </Grid>
      </Container>
    </SitewideSlice>
  );
};

BoomboxSlice.propTypes = {
  classes: PropTypes.object,
  direction: PropTypes.string,
  data: PropTypes.object,
};

BoomboxSlice.defaultProps = {
  classes: {},
  direction: 'row',
  data: {},
};

export default withStyles(styles)(BoomboxSlice);
