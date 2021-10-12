import {StyleSheet } from 'react-native';
import {COLORS, SIZES } from '../../src/container/theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    image: {
        width: '70%',
        height: '50%',
    }
})

export default styles;