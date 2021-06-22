import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import HeaderSection from './components/HeaderSection'

const App = () => {

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const classes = useStyles();

  return (
     <Grid container spacing={3} >
        <Grid item xs={12}>
          <HeaderSection />
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
  )
}

export default App