import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGray = "#868686";

const theme = createMuiTheme({
    palette: {
        customColor: {
            blue: arcBlue,
            orange: arcOrange,
            grey: arcGray
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        },
        estimate : {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: 'white',
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: arcBlue,
            lineHeight: 1.5
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: arcBlue
        },
        h4: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "1.75rem",
            color: arcBlue,
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: arcGray,
        },
        learnButton: {
            borderColor: arcBlue,
            color: arcBlue,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        },

    }
}); 



export default theme;