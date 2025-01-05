import { StyleSheet } from "react-native"
import colors from "./colors/colors"


const text = StyleSheet.create({
    large: {
        fontSize: 24,
        fontFamily: 'PM',
    },
    medium: {
        fontSize: 18,
        fontFamily: 'PM',
    },
    small: {
        fontSize: 13,
        fontFamily: 'PM',
    },
    largeBold: {
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing : 1,
        fontFamily: 'PM',

    },
    mediumBold: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'PM',
        letterSpacing : 1,
    },
    smallBold: {
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: 'PM',
        letterSpacing : 1,
    },
    smallExtraBold: {
        fontSize: 13,
        fontFamily: 'PEB',
        letterSpacing : 1,
    },
    mediumExtraBold: {
        fontSize: 18,
        fontFamily: 'PEB',
        letterSpacing : 1,
    },
    largeExtraBold: {
        fontSize: 24,
        fontFamily: 'PEB',
        letterSpacing : 1,
    },
    
    // caption: {
    //     fontSize: 12,
    //     color: colors.dark,
    // },
    // error: {
    //     fontSize: 14,
    //     color: colors.error,
    // },
    // link: {
    //     fontSize: 14,
    //     color: colors.primary,
    // },
})

export default text;