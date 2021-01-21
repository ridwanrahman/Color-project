import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = theme =>({
    cardthing: {
        height: '500px',
        width: '12rem',
        paddingLeft: '50px',
        background: 'rgb(255, 0, 0)'
    },
    cardStyle: {
        display: 'inline-block',
        paddingLeft: '20px',
    },
    divStyle: {
        display: 'inline-block'
    },
    title: {
        fontSize:'34px',
        fontWeight: '500',
        align: 'center',
        paddingTop: '210px'
    },
    colorCode: {
        display: 'flex-wrap',
        fontWeight: '100',
        paddingRight:'300px',
        // left: '200px',
        // paddingLeft:'-90px'
    }
});

class CardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorValues: [],
            inputStyle: {},
            colorCode:""
        };
    }

    componentDidMount() {
    }

    renderColorCode() {
        var s = "";
        for (var prop in this.state.inputStyle) {
            s = this.state.inputStyle[prop];
        }
        return s;
    }

    render() {
        const {classes} = this.props;
        this.state.colorValues = [];
        this.state.inputStyle = {};
        var string = "";
        for(var property in this.props.color) {
            string = string + this.props.color[property] + ",";
        }
        string = string.replace(",",'(');
        string = string.replace(/,$/,")");
        this.state.inputStyle={
            background: '' + string
        }
        
        return (
            <div className={classes.divStyle}>
                <div className={classes.cardStyle}>
                    <Card className={classes.cardthing} style={this.state.inputStyle}>
                      <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                              {this.props.color.type}
                        </Typography>
                        
                        {/* <Typography className={classes.colorCode} gutterBottom>
                        {this.renderColorCode()}          
                        </Typography> */}

                        </CardContent>
                    </Card>
                  </div>
                  
            </div>
        );
    }
}
export default withStyles(useStyles)(CardComponent)
