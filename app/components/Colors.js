import { StyleSheet, Touchable, TouchableOpacity, View, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get("window");

const BUTTON_WIDTH = width * 0.138; // 25% of screen width
const BUTTON_HEIGHT = height * 0.035; // 5% of screen height

const Colors = (props) => {
    return (
        <View>
            <TouchableOpacity style={[styles.icon, { backgroundColor: props.bg }, props.selected && styles.selectedColor]} onPress={() => props.onPress(props.bg)}>

            </TouchableOpacity>
        </View>
    )
}

export default Colors;

const styles = StyleSheet.create({
    icon: {
        width: BUTTON_WIDTH,
        height: BUTTON_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        marginTop: 10
    },
    selectedColor: {
        borderColor: "#fff",
        borderWidth: 6
    }
})