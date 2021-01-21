import { CssBaseline,makeStyles } from '@material-ui/core';
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
    <CssBaseline/>
    </>
  );
}

export default App;
