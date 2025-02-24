import { StyleSheet, Touchable, TouchableOpacity, View, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get("window"); 

const BUTTON_WIDTH = width * 0.138; // 25% of screen width
const BUTTON_HEIGHT = height * 0.044; // 5% of screen height

const Icons = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.icon}>
                <Icon name={props.icon} size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

export default Icons;

const styles = StyleSheet.create({
    icon: {
        backgroundColor: "#921A40",
        width: BUTTON_WIDTH,
        height: BUTTON_HEIGHT,
        justifyContent: "center",
        alignItems:"center",
        borderRadius: 6,
        marginTop: 10
    }
})