import {StyleSheet } from 'react-native'
import {COLORS, SIZES } from '../../src/container/theme'

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: SIZES.body2,
        color: COLORS.white,
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 120
    },
    cardContainer: {
        flex: 1,
        // backgroundColor: COLORS.disabled,
        marginTop: 10,
        alignItems: 'center'
    },
    card: {
        width: '90%',
        height: "20%",
        borderRadius: 20,
        backgroundColor: COLORS.secondary,
        marginTop: 15,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    containerImage: {
        width: '35%',
        height: '80%',
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 15,
        
    },
    image: {
        width: 100,
        height: 100,
    },
    description: {
        width: '60%',
        marginLeft: 10,
        marginTop: 10,
    }
})

export default styles;