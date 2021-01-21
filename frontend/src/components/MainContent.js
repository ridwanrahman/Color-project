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

    renderColors(){
        console.log("herer");
        this.state.justColors = [];
        for(let i=0;i<this.state.colors.length;i++) {
            // console.log(this.state.colors[i]);
            // <CardComponent value={this.state.colors[i]}></CardComponent>
            for (const property in this.state.colors[i]) {
                // console.log(`${property}: ${this.state.colors[i][property]}`);
                if(property == 'type') {
                    continue;
                }
                this.state.justColors.push(this.state.colors[i][property]);
              }
            
        }
        console.log(this.state.justColors);
    }

    render() {
        const {classes} = this.props;
        return (

        )
    }
}

export default withStyles(useStyles)(MainComponent)