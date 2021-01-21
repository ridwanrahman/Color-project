import { Button, Fade, Modal, withStyles } from '@material-ui/core';
import React, {Component} from 'react'
import CardComponent from './CardComponent';

const useStyles = theme => ({
    alignColorsAndJustifyContent: {
        padding: '10px',
        display:'block',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    alignButtonAndJustifyContent: {
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

class MainComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:0,
            colors:[],
            justColors:[]
        };
        this.buttonClick = this.buttonClick.bind(this);
    }

    getData() {
        console.log("getting data");
        fetch('http://127.0.0.1:8000/api/')
            .then(response => response.json())
            // .then(data => console.log(data));
            .then(data => {
                this.setState({
                    colors:data
                })
            })
    }

    buttonClick() {
        this.getData();
    }

    componentDidMount(){
        this.getData();
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.alignColorsAndJustifyContent}>
                    {this.state.colors.map(color => <CardComponent color={color}></CardComponent>)}    
                </div>
                <br></br>
                <div className={classes.alignButtonAndJustifyContent}>
                    <Button onClick={this.buttonClick} variant="contained" color="primary">
                        Regenerate
                    </Button>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(MainComponent)