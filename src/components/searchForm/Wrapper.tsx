import * as React from 'react';
import classNames from 'classnames';
import { withStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Input, FormControl, InputLabel, InputAdornment, IconButton } from '@material-ui/core';
import Logo from './Logo';
import Search from '@material-ui/icons/Search';
import { WithStyles, createStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  textLabel: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
  },
});

interface Props extends WithStyles<typeof styles> {
  classes: {
    root: string;   
    formContainer: string;
    margin: string;
    textField: string;
    textLabel: string;
    icon: string;
  };
}

class SearchForm extends React.Component<Props> {
  
  state = {
    searchValue: '',      
  };

  handleChange = (prop:any) => (event:any) => {
    this.setState({ [prop] : event.target.value });
  }

  handleClickSearchYoutube = (prop:any) => (event:any) => {
    
  }

  render(){

    const { classes } = this.props;

    return (
      <div>
        <Grid container justify="center" className={classes.root}> 
          <Grid item xs={5}>
              <Paper elevation={1}>              
                <Grid item>
                  <Logo />
                </Grid>   
                <Grid item xs={12}>

                  <FormControl className={classNames(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="searchValue">Search for</InputLabel>
                    <Input
                      id="searchValue"
                      type={'text'}
                      value={this.state.searchValue}
                      onChange={this.handleChange('searchValue')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Search for input"
                            onClick={this.handleClickSearchYoutube}
                          >
                            <Search />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>    
              </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SearchForm);