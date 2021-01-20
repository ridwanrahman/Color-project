import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item sm={5}>
                        Color Swatch App
                    </Grid>
                    {/* <Grid item sm={6}>
                        hope this shows up
                    </Grid> */}

                </Grid>

            </Toolbar>

        </AppBar>
    )
}
