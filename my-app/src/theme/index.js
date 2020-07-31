import { createMuiTheme } from '@material-ui/core/styles';

const darkgray = "#A9A9A9"
const teal = "#008080"

export default createMuiTheme({
    palette : {
        common: {
            black: "#000",
            white:"#fff"
        },
        primary: {
            main:`${darkgray}`,
        },
        secondary: {
            main:`${teal}`,
        }
        
    },
    typography : {
        tab: {
            fontFamily: "Ubuntu",
            fontSize:".85rem",
        } 
    },
})