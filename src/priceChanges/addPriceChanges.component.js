import React, { Component } from 'react';
import AppBar from '../_components/appbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../_components/nav';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { priceChangesAction } from '../_actions';
import { withRouter } from 'react-router-dom';
const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    contentRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
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
});
class AddPriceChanges extends Component {
    handleChange = prop => event => {
        const { dispatch } = this.props;
        dispatch(priceChangesAction.onChangeProps(prop, event));
    };
    componentDidMount() {
        const { match : { params } } = this.props;
        if(params.id){
            const { dispatch } = this.props;
            dispatch(priceChangesAction.getPriceChangesById(params.id));
        }
    }
    handleClick(event){
        const { match : { params } } = this.props;
        const { dispatch } = this.props;
        let payload={
            id: this.props.priceChanges.id,
            itemNum: this.props.priceChanges.itemNum,
            itemName: this.props.priceChanges.itemName,
            itemPrice: this.props.priceChanges.itemPrice,
            location: this.props.priceChanges.location,
            analyticsInfo: this.props.priceChanges.analyticsInfo,
            merchantDecision: this.props.priceChanges.merchantDecision,
        }
        if(params.id){
            dispatch(priceChangesAction.editPriceChangesInfo(payload));
        }else{
            dispatch(priceChangesAction.createPriceChanges(payload));
        }
    }
    render() {
        const { classes } = this.props;
        const { match : { params } } = this.props;
        function InsertText(props) {
            return <Typography>{'Add New Price Change'}</Typography>;
        }

        function EditText(props) {
            return <Typography>{'Edit Price Change'}</Typography>;
        }
        function SegHeader() {
            if(params.id){
                return <EditText />;
            }
            return <InsertText />;
        }
        return (
            <div className={classes.root}>
               <div className={classes.appFrame}>
                  <AppBar/>
                  <Nav />
                  <main className={classes.content}>
                      <div className={classes.toolbar} />
                      <Grid container spacing={24}>
                         <Grid item xs={3}>
                            <SegHeader />
                         </Grid>
                         <Grid item xs={6}>
                         </Grid>
                         <Grid item xs={3} container justify="flex-end">
                         </Grid>
                     </Grid>
                     <br /><br />
                     <Grid container spacing={24}>
                        <Grid item xs={12}>
                        <div>
                          <Paper className={classes.contentRoot} elevation={1}>
                             <form className={classes.container}>
                                <Grid container spacing={24}>
                                   <Grid item xs={3}>
                                      <TextField
                                       id="itemNum"
                                       label="Item#"
                                       className={classes.textField}
                                       value={this.props.priceChanges.itemNum}
                                       onChange={this.handleChange('itemNum')}
                                       margin="normal"
                                      />
                                   </Grid>
                                   <Grid item xs={3}>
                                      <TextField
                                       id="itemName"
                                       label="Item Name"
                                       className={classes.textField}
                                       value={this.props.priceChanges.itemName}
                                       onChange={this.handleChange('itemName')}
                                       margin="normal"
                                      />
                                   </Grid>
                                   <Grid item xs={3}>
                                      <TextField
                                       id="itemPrice"
                                       label="Item Price"
                                       className={classes.textField}
                                       value={this.props.priceChanges.itemPrice}
                                       onChange={this.handleChange('itemPrice')}
                                       margin="normal"
                                      />
                                   </Grid>
                                   <Grid item xs={3}>
                                      <TextField
                                       id="location"
                                       label="Location"
                                       multiline
                                       rowsMax="4"
                                       className={classes.textField}
                                       value={this.props.priceChanges.location}
                                       onChange={this.handleChange('location')}
                                       margin="normal"
                                      />
                                   </Grid>
                                   <Grid item xs={3}>
                                      <TextField
                                       id="analyticsInfo"
                                       label="Analytics Info"
                                       multiline
                                       rowsMax="4"
                                       className={classes.textField}
                                       value={this.props.priceChanges.analyticsInfo}
                                       onChange={this.handleChange('analyticsInfo')}
                                       margin="normal"
                                      />
                                   </Grid>
                                   <Grid item xs={3}>
                                      <TextField
                                       id="merchantDecision"
                                       label="Merchant Decision"
                                       multiline
                                       rowsMax="4"
                                       className={classes.textField}
                                       value={this.props.priceChanges.merchantDecision}
                                       onChange={this.handleChange('merchantDecision')}
                                       margin="normal"
                                      />
                                   </Grid>
                                </Grid>
                                <br />
                                <Grid container spacing={24}>
                                   <Grid item xs={3}>
                                   </Grid>
                                   <Grid item xs={6}>
                                   </Grid>
                                   <Grid item xs={3} container justify="center">
                                      <Grid container spacing={24}>
                                         <Grid item xs={6} container justify="center">
                                            <Button variant="contained" color="secondary" className={classes.button} component='a' href="/priceChanges">Cancel</Button>
                                         </Grid>
                                         <Grid item xs={6} container justify="flex-start">
                                            <Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleClick(event)}>Save</Button>
                                         </Grid>
                                      </Grid>
                                   </Grid>
                                </Grid>
                             </form>
                           </Paper>
                         </div>
                       </Grid>
                     </Grid>
                  </main>
                </div>
              </div>
        );
    }
}
AddPriceChanges.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) =>{
    return state;
}

const connectedAddPriceChangesPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(AddPriceChanges)));
export { connectedAddPriceChangesPage as AddPriceChanges };