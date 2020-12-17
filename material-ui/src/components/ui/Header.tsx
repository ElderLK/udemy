import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import { Menu, MenuItem, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from  'clsx';

import LogoSVG from '../../assets/logo.svg';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}
  
function ElevationScroll(props: Props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles((theme: Theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em",
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em",
        }
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")]: {
            height: "7em"
        },
        [theme.breakpoints.down("xs")]: {
            height: '5.5em'
        }
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    hidden: {
        display: 'none',
    },
    button: {
        ...theme.typography.estimate,
        borderRadius:"50px",
        marginLeft: "50px",
        marginRight: "50px",
        height: "45px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    menu: {
       backgroundColor: String(theme.palette.customColor.blue),
       color: "white",
       borderRadius: 0,
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: .7,
        "&:hover": {
            opacity: 1
        } 
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            background: "transparent",
            opacity: ".7"
        }
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
    },
    drawer: {
        backgroundColor: String(theme.palette.customColor.blue)
    },
    listItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: .7,
    },
    drawerItemEstimate: {
        backgroundColor: String(theme.palette.customColor.orange)
    },
    drawerItemSelected: {
        opacity: 1
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}))
  
const locations: { [x: string]: number } = {
    "/": 0,
    "/services": 1, 
    "/customsoftwares": 1, 
    "/mobileapps": 1, 
    "/websites": 1, 
    "/revolutions": 2,
    "/about": 3, 
    "/contact": 4,
    "/estimate": 5,
}

const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftwares" },
    { name: "Mobile Software Development", link: "/mobileapps" },
    { name: "Website Software Development", link: "/websites" },
];



const Header = (props: any) => {
    const { 
        activeTab, 
        setActiveTab, 
        activeMenuIndex, 
        setActiveMenuIndex 
    } = props;
    const classes = useStyles();
    const theme = useTheme();
    const isBrowser = typeof window !== 'undefined';
    const iOS = isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const [openDrawer, setOpenDrawer] = React.useState(false);
    // const [ activeTab, setActiveTab ] = React.useState<number>(0);
    const [ anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const [ activeMenuIndex, setActiveMenuIndex ] = React.useState(0);

    React.useEffect(() => {
        const location = window.location.pathname;
        setActiveTab(locations[location] || 0);
        if(location === '/customsoftwares') {
            setActiveMenuIndex(1);
        } else if(location === '/mobileapps') {
            setActiveMenuIndex(2);
        } else if(location === '/websites') {
            setActiveMenuIndex(3);
        }
    }, [])

    const handleChangeTab = React.useCallback((_: React.ChangeEvent<{}>, value: any) => {
        setActiveTab(value);
    }, []);


    const handleClickTab = React.useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setAnchorEl(e.currentTarget);
        setActiveTab(1);
    }, []); 

    const handleCloseTab = React.useCallback((e) => {
        setAnchorEl(null);
    }, []); 

    const handleMenuItemClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, idx: number) => {
        setAnchorEl(null);
        setActiveMenuIndex(idx);
        handleClickTab(e);
    }, [handleClickTab]); 

    const TabsComponent = (
        <React.Fragment>
            <Tabs 
                value={activeTab} 
                onChange={handleChangeTab} 
                className={classes.tabContainer}
                indicatorColor="primary"
            >
                <Tab className={classes.tab} component={Link} to="/" label="Home" />
                <Tab 
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup={!!anchorEl}
                    className={classes.tab} 
                    component={Link} 
                    onMouseOver={handleClickTab}
                    to="/services" 
                    label="Service" />
                <Tab className={classes.tab} component={Link} to="/revolutions" label="The Revolution" />
                <Tab className={classes.tab} component={Link} to="/about" label="About us" />
                <Tab className={classes.tab} component={Link} to="/contact" label="Contact us" />
                <Tab className={classes.hidden}/>
                
                
            </Tabs>
                <Button 
                component={Link} to="/estimate"
                onClick={() => setActiveTab(5)}
                variant="contained" 
                color="secondary" 
                className={classes.button}>
                    Free Estimate
                </Button> 
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseTab}
                MenuListProps={{onMouseLeave: handleCloseTab}}
                classes={{ paper: classes.menu }}
                elevation={0}
                style={{ zIndex: 1302 }}
                keepMounted
            >
                {
                    menuOptions.map((el, idx) => (
                        <MenuItem 
                        key={idx}
                        classes={{ root:classes.menuItem }} 
                        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleMenuItemClick(e, idx)} 
                        component={Link} to={el.link}
                        selected={idx === activeMenuIndex && activeTab === 1}>
                            {el.name}
                        </MenuItem>
                    ))
                }
            </Menu>   
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer 
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS}
                open={openDrawer}
                onOpen={() => setOpenDrawer(true)}
                onClose={() => setOpenDrawer(false)}
                classes={{ paper: classes.drawer }}
                >
                <div className={classes.toolbarMargin} />
                    <List disablePadding>
                        <ListItem selected={activeTab === 0} className={activeTab === 0 ? clsx(classes.listItem, classes.drawerItemSelected) : classes.listItem} onClick={() => {setOpenDrawer(false);  setActiveTab(0);}} divider button component={Link} to="/">
                            <ListItemText disableTypography>
                                Home
                            </ListItemText>
                        </ListItem>
                        <ListItem selected={activeTab === 1} className={activeTab === 1 ? clsx(classes.listItem, classes.drawerItemSelected) : classes.listItem} onClick={() => {setOpenDrawer(false);  setActiveTab(1);}} divider button component={Link} to="/services">
                            <ListItemText disableTypography>
                                Service
                            </ListItemText>
                        </ListItem>
                        <ListItem selected={activeTab === 2} className={activeTab === 2 ? clsx(classes.listItem, classes.drawerItemSelected) : classes.listItem} onClick={() => {setOpenDrawer(false);  setActiveTab(2);}} divider button component={Link} to="/revolutions">
                            <ListItemText disableTypography>
                                The Revolutions
                            </ListItemText>
                        </ListItem>
                        <ListItem selected={activeTab === 3} className={activeTab === 3 ? clsx(classes.listItem, classes.drawerItemSelected) : classes.listItem} onClick={() => {setOpenDrawer(false);  setActiveTab(3);}} divider button component={Link} to="/about">
                            <ListItemText disableTypography>
                                About Us
                            </ListItemText>
                        </ListItem>
                        <ListItem selected={activeTab === 4} className={activeTab === 4 ? clsx(classes.listItem, classes.drawerItemSelected) : classes.listItem} onClick={() => {setOpenDrawer(false);  setActiveTab(4);}} divider button component={Link} to="/contact">
                            <ListItemText disableTypography>
                                Contact Us
                            </ListItemText>
                        </ListItem>
                        <ListItem selected={activeTab === 5}  
                            className={activeTab === 5 ? clsx(classes.listItem, classes.drawerItemEstimate, classes.drawerItemSelected) :  clsx(classes.listItem, classes.drawerItemEstimate)} 
                            onClick={() => {setOpenDrawer(false);  setActiveTab(5);}} 
                            divider button component={Link} to="/estimate">
                            <ListItemText disableTypography>
                                Free Estimate
                            </ListItemText>
                        </ListItem>
                    </List>
            </SwipeableDrawer>
            <IconButton
                className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
            >
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    );

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar disableGutters>
                    <Button 
                        onClick={() => setActiveTab(0)}
                        component={Link} 
                        to="/" 
                        disableRipple
                        className={classes.logoContainer}>
                        <img 
                            className={classes.logo}
                            src={LogoSVG} 
                            alt="company logo"/>
                    </Button>       
                       {
                           matches ?
                           drawer :
                           TabsComponent
                       }
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </>
    )
}

export default Header;
