import { useState } from "react";
import {
    Dimensions,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from "react-native";
import { Button, SegmentedButtons } from 'react-native-paper';
import LoginGA from "../components/LoginGA";
import LoginDetails from "../components/LoginDetails";
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get("window");
const IMAGE_WIDTH = 160;
const IMAGE_HEIGHT = 200;
const scaleFactor = width / 411.93;

const BUTTON_WIDTH = width * 0.6
const BUTTON_HEIGHT = width * 0.14

const Login = ({navigation}) => {
    const [value, setValue] = useState('login');

    const pressHandler = () => {
        navigation.navigate("Home");
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0} // adjust as needed
        >
            <ScrollView contentContainerStyle={styles.loginContainer}>
                <StatusBar barStyle="dark-content" backgroundColor="#F4D9D0"/>
                <View style={styles.headerContainer}>
                    <Image source={require("../assets/images/landingImgNew.png")} style={styles.image} />
                    <Text style={styles.header}>Welcome to HabitFlow!</Text>
                </View>
                <View style={styles.segmentedBtnsContainer}>
                    <SegmentedButtons
                        value={value}
                        onValueChange={setValue}
                        buttons={[
                            {
                                value: 'login',
                                label: 'Login',
                                checkedColor: '#fff'
                            },
                            {
                                value: 'signUp',
                                label: 'Sign Up',
                                checkedColor: '#fff'
                            },
                        ]}
                        style={styles.segBtns}
                        theme={{ colors: { secondaryContainer: "#921A40" } }}
                    />
                </View>
                {value === "login" ? (
                    <View style={styles.bodyContainer}>
                        <View style={styles.btnContainer}>
                            <LoginGA name="Login with Apple" imageSource={require("../assets/images/apple.png")} />
                            <LoginGA name="Login with Google" imageSource={require("../assets/images/google.png")} />
                        </View>
                        <View style={styles.dividerContainer}>
                            <View style={styles.divider} />
                            <Text style={styles.emailtxt}>or continue with Email</Text>
                            <View style={styles.divider} />
                        </View>
                        <View style={styles.loginDetailsContainer}>
                            <LoginDetails icon="envelope" label="Enter your email" />
                            <LoginDetails icon="lock" label="Enter your password" />
                        </View>
                        <View style={styles.loginBtnContainer}>
                            <TouchableOpacity style={styles.btn} onPress={pressHandler}>
                                <Text style={styles.btnName}>Login</Text>
                                <Icon name="sign-in" size={21} color="#F4D9D0" style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : <View style={styles.bodyContainer}>
                    <View style={styles.loginDetailsContainer}>
                        <LoginDetails icon="user" label="Enter your name" />
                        <LoginDetails icon="envelope" label="Enter your email" />
                        <LoginDetails icon="lock" label="Enter your password" />
                        <LoginDetails icon="lock" label="Confirm your password"/>
                    </View>
                    <View style={styles.loginBtnContainer}>
                        <TouchableOpacity style={styles.btn} onPress={pressHandler}>
                            <Text style={styles.btnName}>Sign Up</Text>
                            <Icon name="user-plus" size={21} color="#F4D9D0" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginContainer: {
        flexGrow: 1,
        backgroundColor: "#F4D9D0",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    image: {
        width: IMAGE_WIDTH * scaleFactor,
        height: IMAGE_HEIGHT * scaleFactor,
        marginLeft: 21
    },
    headerContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4
    },
    header: {
        fontSize: 26,
        color: "#921A40",
        fontWeight: "bold"
    },
    segmentedBtnsContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        marginTop: 20
    },
    bodyContainer: {
        width: "100%",
        alignItems: "center",
    },
    btnContainer: {
        marginTop: 10
    },
    dividerContainer: {
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 6,
    },
    divider: {
        backgroundColor: "#921A40",
        height: 1,
        width: 50
    },
    emailtxt: {
        color: "#921A40"
    },
    loginBtnContainer: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        backgroundColor: "#921A40",
        width: BUTTON_WIDTH,
        height: BUTTON_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        gap: 8,
        marginTop: 4
    },
    btnName: {
        color: "#F4D9D0",
        fontSize: 17,
        fontWeight: "700"
    },
});
