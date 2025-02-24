import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";

const { width, height } = Dimensions.get("window");

const BUTTON_WIDTH = width * 0.8; // 25% of screen width
const BUTTON_HEIGHT = height * 0.035; // 5% of screen height

const Fields = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>{props.name}</Text>
                <TextInput placeholder={props.label} style={styles.input} />
            </View>
        </View>
    )
}

export default Fields;

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    fieldContainer: {
        marginHorizontal: 30,
    },
    input: {
        backgroundColor: "#F6E1E1",
        paddingLeft: 20,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 10,
        width: BUTTON_WIDTH
    },
    label: {
        fontSize: 15,
        fontWeight: "600",
        color: "#921A40"
    }
})