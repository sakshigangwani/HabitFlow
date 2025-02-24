import { StyleSheet, Text, TouchableOpacity, Dimensions, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get("window");

const BUTTON_WIDTH = width * 0.7; // 70% of screen width
const BUTTON_HEIGHT = height * 0.07; // 7% of screen height

const LoginDetails = (props) => {
    return (
        <View style={styles.inputContainer}>
            <Icon name={props.icon} size={20} color="#921A40" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder={props.label}
            />
        </View>
    )
}

export default LoginDetails;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: BUTTON_WIDTH,
        height: BUTTON_HEIGHT,
        borderWidth: 1,
        borderColor: "#921A40",
        borderRadius: 8,
        // paddingHorizontal: 10,
        gap: 16,
        paddingLeft: 20,
        marginTop: 16
    },
    input: {
        fontSize: 16
    }
})