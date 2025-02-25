import { StyleSheet, Text, Touchable, TouchableOpacity, View, Dimensions, StatusBar, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useHabit } from "../context/HabitContext";
import Streak from "../components/Streak";

const { width, height } = Dimensions.get("window");

const BUTTON_WIDTH = width * 0.5;
const BUTTON_HEIGHT = height * 0.06;

const Home = ({ navigation }) => {
    const { savedHabit } = useHabit();

    const pressHandler = () => {
        navigation.navigate("AddNewHabit");
    }

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.homeContainer}>
                <StatusBar
                    backgroundColor="#921A40"
                    barStyle="light-content"
                />
                <View style={styles.headerContainer}>
                    <Icon name="cog" size={30} color="#F4D9D0" style={styles.icon} />
                    <Text style={styles.header}>HabitFlow</Text>
                    <Icon name="plus-circle" size={30} color="#F4D9D0" style={styles.icon} onPress={pressHandler} />
                </View>
                {savedHabit.length > 0 ? <Streak /> : <View style={styles.body}>
                    <Icon name="plus-circle" size={35} color="#F4D9D0" style={styles.icon} onPress={pressHandler} />
                    <Text style={styles.caption}>No habit found</Text>
                    <Text style={styles.caption}>Create a new habit to track your progress</Text>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn} onPress={pressHandler}>
                            <Text style={styles.btnName}>Create Habit</Text>
                            <Icon name="rocket" size={22} color="#921A40" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>}
            </View>
        </SafeAreaView>

    )
}

export default Home;

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: "#921A40",
    },
    homeContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#921A40",
        width: "100%",
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        position: "absolute",
        top: 35,
        zIndex: 1, // ensures it stays on to
    },
    header: {
        fontSize: 28,
        color: "#F4D9D0",
        fontWeight: "500"
    },
    body: {
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 8
    },
    caption: {
        color: "#F4D9D0",
        fontSize: 16
    },
    btnContainer: {
        marginTop: 10
    },
    btn: {
        backgroundColor: "#F4D9D0",
        width: BUTTON_WIDTH,
        height: BUTTON_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        gap: 6
    },
    btnName: {
        fontSize: 16,
        fontWeight: "500",
        color: "#921A40"
    }
})