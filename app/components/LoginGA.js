import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); 

const BUTTON_WIDTH = width * 0.7; // 70% of screen width
const BUTTON_HEIGHT = height * 0.07; // 7% of screen height

const LoginGA = ({name, imageSource}) => {
    return (    
        <View>
            <TouchableOpacity style={styles.btn}>
                <Image source={imageSource} style={styles.image}/>
                <Text style={styles.btnName}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginGA;

const styles = StyleSheet.create({
    btn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backgroundColor: "#fff",
        width: BUTTON_WIDTH, 
        height: BUTTON_HEIGHT, 
        borderRadius: 10,
        marginTop: 10
    },
    image: {
        width: BUTTON_HEIGHT * 0.45,
        height: BUTTON_HEIGHT * 0.45
    },
    btnName: {
        fontSize: BUTTON_HEIGHT * 0.26,
        fontWeight: "500"
    }
})