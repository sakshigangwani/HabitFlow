import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = (props) => {
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={props.onPress}>
                <Text style={styles.btnName}>{props.name}</Text>
                <Icon name={props.icon} size={21} color="#921A40" style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#F4D9D0",
        width: 260,
        height: 57,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        gap: 8
    },
    btnName: {
        color: "#921A40",
        fontSize: 20,
        fontWeight: "700"
    }
})