import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get("window");

const BUTTON_WIDTH = width * 0.25; // 25% of screen width
const BUTTON_HEIGHT = height * 0.05; // 5% of screen height

const Checkbox = (props) => {
    return (
        <TouchableOpacity style={[styles.checkboxContainer, props.selected && styles.selectedCategory]} onPress={() => props.onPress(props.name)}>
            <Icon name={props.icon} size={15} color="#921A40" style={styles.icon} />
            <Text style={styles.name}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default Checkbox;

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAB95B",
        width: BUTTON_WIDTH,
        height: BUTTON_HEIGHT,
        borderRadius: 10,
        gap: 6,
        marginTop: 10,
    },
    name: {
        fontSize: 13,
        fontWeight: "500",
        color: "#921A40"
    },
    selectedCategory: {
        borderColor: "#000",
        borderWidth: 2
    }
})