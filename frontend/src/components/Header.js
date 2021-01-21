import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid } from '@material-ui/core';


export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item sm={5}>
                        Color Swatch Web App
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
