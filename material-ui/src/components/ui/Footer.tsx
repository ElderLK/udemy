import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";
import footerAdormentSVG from "../../assets/Footer Adornment.svg";

import facebookSVG from '../../assets/facebook.svg';
import twitterSVG from '../../assets/twitter.svg';
import instagramSVG from '../../assets/instagram.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: String(theme.palette.customColor.blue),
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em"
        }
    },
    mainContainer: {
        position: "absolute",
        // justifyContent: "center"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: ".75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: "3em"
    },
    icon: {
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em",
        },
    },
    socialContainer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]: {
            right: ".6em",
        },
    }
}))

const Footer = (props: any) => {
    const { 
        setActiveTab, 
        setActiveMenuIndex 
    } = props;
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justify="center" className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid onClick={() => setActiveTab(0)} item component={Link} to="/" className={classes.link}>
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => {setActiveTab(1); setActiveMenuIndex(0)}} to="/services" className={classes.link}>
                                Service
                            </Grid>
                            <Grid item component={Link} onClick={() => {setActiveTab(1); setActiveMenuIndex(1)}} to="/customsoftwares" className={classes.link}>
                                Custom Software
                            </Grid>
                            <Grid item component={Link} onClick={() => {setActiveTab(1); setActiveMenuIndex(2)}} to="/mobileapps" className={classes.link}>
                                Mobile App
                            </Grid>
                            <Grid item component={Link} onClick={() => {setActiveTab(1); setActiveMenuIndex(3)}} to="/websites" className={classes.link}>
                                Website Development
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => setActiveTab(2)} to="/revolutions" className={classes.link}>
                                Revolution
                            </Grid>
                            <Grid item component={Link} onClick={() => setActiveTab(2)} to="/revolutions" className={classes.link}>
                                Vision
                            </Grid>
                            <Grid item component={Link} onClick={() => setActiveTab(2)} to="/revolutions" className={classes.link}>
                                Technology
                            </Grid>
                            <Grid item component={Link} onClick={() => setActiveTab(2)} to="/revolutions" className={classes.link}>
                                Process
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item onClick={() => setActiveTab(3)} component={Link} to="/about" className={classes.link}>
                                About Us
                            </Grid>
                            <Grid item onClick={() => setActiveTab(3)} component={Link} to="/about" className={classes.link}>
                                History
                            </Grid>
                            <Grid item onClick={() => setActiveTab(3)} component={Link} to="/about" className={classes.link}>
                                Team
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item onClick={() => setActiveTab(4)} component={Link} to="/contact" className={classes.link}>
                                Contact us
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img className={classes.adornment} src={footerAdormentSVG} alt="black slash"/>

            <Grid spacing={2} justify="flex-end" container className={classes.socialContainer}>
                <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_black">
                    <img src={facebookSVG} alt="facebook" className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_black">
                    <img src={twitterSVG} alt="twitter" className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_black">
                    <img src={instagramSVG} alt="instagram" className={classes.icon}/>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;