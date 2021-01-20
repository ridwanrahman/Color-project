import { makeStyles } from '@material-ui/core';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import './App.css';

const useStyles = makeStyles({
  parent: {
    // border: 2px,
    display: 'inline-block',
    background: 'red'
  },
  box: {
    display: 'inline-block',
  }
})

function App() {
  const classes = useStyles();
  return (
    <>
    <Header></Header>
    
    <MainContent></MainContent>
      {/* <div className={classes.parent}>
        <div className={classes.box}>One</div>
        <div className={classes.box}>Two</div>
        <div className={classes.box}>Three</div>
        <div className={classes.box}>Four</div>
      </div> */}
    </>
  );
}

export default App;
