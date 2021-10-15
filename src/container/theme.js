import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#240046",
    disabled: "#e0aaff",
    secondary: "#9d4edd",
    card: "#c77dff",
    background: '#10002b',

    black: "#001219",
    white: "#f8f9fa",
    grey: "#d8d7da"
}


export const SIZES = {
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    width,
    height

}

const appTheme = { COLORS, SIZES };

export default appTheme;