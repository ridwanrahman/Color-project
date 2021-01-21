import { Button, Fade, Modal, withStyles } from '@material-ui/core';
import React, {Component} from 'react'
import CardComponent from './CardComponent';

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
            <div>
                <p>You clicked {this.state.count} times</p>

                {this.state.colors.map(color => <CardComponent color={color}></CardComponent>)}
                <br></br>
                
                <Button onClick={this.buttonClick} variant="contained" color="primary" className={classes.button}>
                    Regenerate
                </Button>
            </div>
        )
    }
}

export default withStyles(useStyles)(MainComponent)