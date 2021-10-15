import { StyleSheet } from 'react-native';
import {COLORS, SIZES} from "../../src/container/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        // alignContent: "center",
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: SIZES.h1,
        // fontFamily: 'Inter_900Black',
        color: COLORS.white,
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 10,
    },
    input: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: COLORS.background,
        paddingLeft: 15,
        color: COLORS.white
    }

})


export default styles;