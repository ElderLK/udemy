import '@material-ui/core/styles/createPalette';
import '@material-ui/core/styles/createTypography';

interface customProps {
    [name: string]: string | number;
}

declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
        customColor: customProps;
    }
    interface PaletteOptions {
        customColor: customProps;
    }
}

declare module '@material-ui/core/styles/createTypography' {
    interface Typography {
        tab?: customProps;
        estimate?: customProps;
        learnButton: customProps;
    }
    interface TypographyOptions {
        tab?: customProps;
        estimate?: customProps;
        learnButton: customProps;
    }
}
