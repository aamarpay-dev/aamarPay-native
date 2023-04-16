import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    formTitle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        marginVertical: SIZES.small,
        textAlign: 'center',

    },
    inputField: {
        fontFamily: FONT.regular,
        width: "100%",
        padding: SIZES.small,
        paddingHorizontal: SIZES.medium,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.small / 1.25,
        marginBottom: SIZES.xSmall
    },
    btnContainer:{
        alignItems:"flex-end",
        width:'100%',
        height:40,
    },
    payBtn: {
        width: 60,
        height: 40,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.small / 1.25,
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    payBtnText:{
        color:COLORS.white,
        fontSize:SIZES.medium,
    }
})

export default styles;