import React from "react";
import { Lottie } from '@crello/react-lottie'
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import animationData from '../animations/landinganimation/data.js';
import ButtonArrow from "./ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';

const useStyle = makeStyles(theme => ({
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em",
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
        }
    },
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em",
        },
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: String(theme.palette.customColor.orange),
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: ".9rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    learnMore: {
        ...theme.typography.learnButton,
        fontSize: ".9rem",
        height: 45,
        width: 145
    },
    specialText: {
        fontFamily: "Pacifico",
        color: String(theme.palette.customColor.orange),
    },
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
       marginLeft: "2em",
       [theme.breakpoints.down("xs")]: {
           marginLeft: 0
       } 
    },
    serviceContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    revolutionBackground: {
      backgroundImage: `url(${revolutionBackground})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
      width: "100%"
    },
    revolutionCard: {
      position: "absolute",
      boxShadow: theme.shadows[10],
      borderRadius: 15,
      padding: "10em"
    }
}))

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

const LandingPage = () => {
    const classes = useStyle();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return ( 
       
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item> {/* hero block */}
                <Grid container direction="row" justify="flex-end" alignItems="center">
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography align="center" variant="h2">Bringing West Cost Technology<br />to the Midwest</Typography>
                        <Grid container justify="center" className={classes.buttonContainer}>
                            <Grid item>
                             <Button className={classes.estimateButton} variant="contained">
                                Free Estimate 
                             </Button>
                            </Grid>
                            <Grid item>
                             <Button variant="outlined" className={classes.learnMore}>
                                <span style={{marginRight: 10}}>Learn More</span>
                                <ButtonArrow width={15} height={15} fill={String(theme.palette.customColor.blue)}/>
                             </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie config={defaultOptions} height="100%" width="100%" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/* Custom Software Block */}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-start"}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                           Complete digital solutions, from investigation to{" "}
                           <span className={classes.specialText}>celebration</span>
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={String(theme.palette.customColor.blue)}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={customSoftwareIcon} alt="Custom Software Icon"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/* Web Apps */}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"}>
                    <Grid item style={{ textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant="h4">
                            Mobile Apps Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                           Integrate your web experience or create a standalone app{matchesSM ? null : <br />}with either mobile platform.
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={String(theme.palette.customColor.blue)}/>
                        </Button>
                    </Grid>
                    <Grid item style={{  marginRight: matchesSM ? 0 : "5em" }}>
                        <img className={classes.icon} src={mobileAppsIcon} alt="Mobile Icon"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/* Website Block */}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-start"}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach Mote. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                           Optimized fro Search Engines, build for speed.
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={String(theme.palette.customColor.blue)}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={websiteIcon} alt="Website Icon"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
              <Grid container style={{ height: "100em" }} alignItems="center" justify="center">
                <Card className={ classes.revolutionCard }>
                  <CardContent>
                    <Grid container direction="column" style={{ textAlign: "center"}}>
                      <Grid item>
                        <Typography variant="h3">
                          The Revolution
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          Visionary insights coupled with cutting-edge technology is a recipe for revolution
                        </Typography>
                        <Grid item>
                          <Button variant="outlined" className={classes.learnMore}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={15} height={15} fill={String(theme.palette.customColor.blue)}/>
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
                <div className={classes.revolutionBackground} /> 

              </Grid>
            </Grid> 
        </Grid>    

    )
}

export default LandingPage;