import { connect } from 'react-redux';
import { priceChangesAction } from '../_actions';
import React, { Component } from 'react';
import AppBar from '../_components/appbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../_components/nav';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';
const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
       zIndex: 1,
       overflow: 'hidden',
       position: 'relative',
       display: 'flex',
       width: '100%',
    },
    appBar: {
       width: `calc(100% - ${drawerWidth}px)`,
    },
    'appBar-left': {
        marginLeft: drawerWidth,
    },
    'appBar-right': {
        marginRight: drawerWidth,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});
class PriceChanges extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(priceChangesAction.getPriceChanges());
    }
    handleChange = event => {
        this.setState({
            anchor: event.target.value,
        });
    };
    handleClick = (event, id) => {
        const { dispatch } = this.props;
        dispatch(priceChangesAction.deletePriceChangesById(id))
    };
    render() {
        const { classes } = this.props;
        const { priceChanges } = this.props.priceChanges;
        return (
            <div className={classes.root}>
              <div className={classes.appFrame}>
                <AppBar/>
                <Nav />
                <main className={classes.content}>
                   <div className={classes.toolbar} />
                   <Grid container spacing={24}>
                      <Grid item xs={3}>
                         <Typography>{'Price Changes'}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                      </Grid>
                      <Grid item xs={3} container justify="flex-end">
                      </Grid>
                   </Grid>
                   <Grid container spacing={24}>
                      <Grid item xs={3}>
                      </Grid>
                      <Grid item xs={6}>
                      </Grid>
                      <Grid item xs={3} container justify="flex-end">
                          <Button variant="contained" color="primary" className={classes.button} component='a' href="/add-priceChanges">Add Price Changes</Button>
                      </Grid>
                   </Grid>
                   <br /><br />
                   <Grid container spacing={24}>
                     <Paper className={classes.root}>
                       <Table className={classes.table}>
                          <TableHead>
                             <TableRow>
                                <TableCell>Item#</TableCell>
                                <TableCell>Item Name</TableCell>
                                <TableCell numeric>Price</TableCell>
                                <TableCell numeric>Location</TableCell>
                                <TableCell numeric>Analytics Info</TableCell>
                                <TableCell>Merchant Decision</TableCell>
                                <TableCell>Action</TableCell>
                             </TableRow>
                          </TableHead>
                          <TableBody>
                           {priceChanges.map(n => {
                              return (
                                  <TableRow key={n.id}>
                                    <TableCell component="th" scope="row">
                                      {n.itemNum}
                                    </TableCell>
                                    <TableCell numeric>{n.itemName}</TableCell>
                                    <TableCell numeric>{n.itemPrice}</TableCell>
                                    <TableCell>{n.location}</TableCell>
                                    <TableCell>{n.analyticsInfo}</TableCell>
                                    <TableCell>{n.merchantDecision}</TableCell>
                                    <TableCell>
                                        <IconButton className={classes.button} aria-label="Edit" component='a' href={`/edit-priceChanges/${n.id}`}>
                                           <EditIcon />
                                        </IconButton>
                                        <IconButton className={classes.button} aria-label="Delete" onClick={(event) => this.handleClick(event, n.id)}>
                                           <DeleteIcon /> 
                                        </IconButton>
                                    </TableCell>
                                 </TableRow>
                             );
                           })}
                        </TableBody>
                     </Table>
                  </Paper>
              </Grid>
           </main>
       </div>
     </div>
   );
  }
}
PriceChanges.propTypes = {
     classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) =>{
    return {
       priceChanges : state.priceChanges
    };
}
const connectedPriceChangesPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(PriceChanges)));
export { connectedPriceChangesPage as PriceChanges };