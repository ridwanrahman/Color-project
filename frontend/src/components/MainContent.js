import React, {Component} from 'react'

class MainComponent extends Component{
    constructor(props) {
        console.log("herere")
        super(props);
        this.data={
            colors:[]
        };
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/')
            .then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <div>
                
                I hope this shows up
            </div>
        )
    }
}

export default MainComponent