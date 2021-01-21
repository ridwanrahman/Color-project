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
      font:'14px'
  }
});

class CardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorValues: [],
            inputStyle: {}
        };
    }

    componentDidMount() {
    }

    render() {
        const {classes} = this.props;
        this.state.colorValues = [];
        this.state.inputStyle = {};
        var string = "";
        for(var property in this.props.color) {
            string = string + this.props.color[property] + ",";
            // if(this.props.color[property] == 'rgb') {
            //     console.log("found rgb here");
            //     // console.log(this.props.color);
            //     for(var a in this.props.color) {
            //         console.log(this.props.color[a]);
            //     }
            // }
            // if(this.props.color[property] == 'hsl') {
            //     console.log("found hsl here")
            // }
            // this.state.colorValues.push(this.props.color[property]);
            // console.log(string);
        }
        string = string.replace(",",'(');
        string = string.replace(/,$/,")");
        console.log(string);
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
                              {/* {this.props.color} */}
                              </Typography>
                          </CardContent>
                      </Card>
                  </div>
            </div>
        );
    }
}
export default withStyles(useStyles)(CardComponent)
