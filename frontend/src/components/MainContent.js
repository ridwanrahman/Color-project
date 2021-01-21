import { Button, Fade, Modal, withStyles } from '@material-ui/core';
import React, {Component} from 'react'
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = theme => ({
    button: {
        position: 'absolute',
        right:'450px',

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

    componentWillMount() {
        
    }

    componentDidMount(){
        this.getData();
    }

    render() {
        const {classes} = this.props;
        return (
        )
    }
}

export default withStyles(useStyles)(MainComponent)