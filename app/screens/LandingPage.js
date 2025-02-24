import { Image, StyleSheet, View, Dimensions, Text, StatusBar } from "react-native";
import Button from "../components/Button";

const { width, height } = Dimensions.get("window");

const IMAGE_WIDTH = 250;
const IMAGE_HEIGHT = 300;

const scaleFactor = width / 411.93;

const LandingPage = ({navigation}) => {
    return (
        <View style={styles.landingPageContainer}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#921A40"
            />
            <View style={styles.landingPageHeading}>
                <Text style={styles.header}>HabitFlow</Text>
                <Text style={styles.caption}>Track habits. Stay consistent.
                    Crush goals!!</Text>
            </View>
            <View style={styles.landingPageImage}>
                <Image source={require("../assets/images/landingImgNew.png")} style={styles.image} />
            </View>
            <View style={styles.btnContainer}>
                <Button name="Get Started" icon="arrow-right" onPress={() => navigation.navigate('Login')}/>
            </View>
        </View>
    )
}

export default LandingPage;

const styles = StyleSheet.create({
    landingPageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#921A40",
        width: "100%"
    },
    landingPageHeading: {
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 40,
        color: "#F4D9D0",
        fontWeight: "bold"
    },
    caption: {
        fontSize: 16,
        marginTop: 4,
        color: "#F4D9D0",
        fontWeight: "500"
    },
    landingPageImage: {
        marginTop: 38
    },
    image: {
        width: IMAGE_WIDTH * scaleFactor,
        height: IMAGE_HEIGHT * scaleFactor,
        marginLeft: 21
    },
    btnContainer: {
        marginTop: 20
    }
})