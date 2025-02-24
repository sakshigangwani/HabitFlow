import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Fields from "../components/Fields";
import Checkbox from "../components/Checkbox";
import { useState } from "react";
import Icons from "../components/Icons";
import Colors from "../components/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const BUTTON_WIDTH = width * 0.54
const BUTTON_HEIGHT = height * 0.05

const AddNewHabit = ({navigation}) => {
    const [number, setNumber] = useState(1);

    const increment = (num) => {
        setNumber(prevNum => prevNum + 1);
    }

    const decrement = (num) => {
        setNumber(prevNum => prevNum > 1 ? prevNum - 1 : 1);
    }

    const pressHandler = () => {
        navigation.navigate("Home")
    }

    return (
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar 
                backgroundColor="#F4D9D0"
                barStyle="dark-content"
            />
            <View style={styles.addNewHabitContainer}>
                <View style={styles.headerContainer}>
                    <Icon name="close" size={30} color="#921A40" style={styles.icon} onPress={pressHandler}/>
                    <Text style={styles.header}>New Habit</Text>
                    <Icon name="cog" size={30} color="#921A40" style={styles.icon} />
                </View>
                <View style={styles.contentContainer}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                        <View style={styles.fieldsContainer}>
                            <Fields name="Name" label="Enter habit name" />
                        </View>
                        <View style={styles.fieldsContainer}>
                            <Fields name="Description" label="Enter habit description" />
                        </View>
                        <View style={styles.categoriesContainer}>
                            <Text style={styles.label}>Categories</Text>
                            <View style={styles.checkboxContainer}>
                                <Checkbox icon="paint-brush" name="Art" />
                                <Checkbox icon="money" name="Finances" />
                                <Checkbox icon="bicycle" name="Fitness" />
                            </View>
                            <View style={styles.checkboxContainer}>
                                <Checkbox icon="coffee" name="Nutrition" />
                                <Checkbox icon="heart" name="Health" />
                                <Checkbox icon="code" name="Study" />
                            </View>
                            <View style={styles.checkboxContainer}>
                                <Checkbox icon="user" name="Social" />
                                <Checkbox icon="laptop" name="Work" />
                                <Checkbox icon="leaf" name="Other" />
                            </View>
                        </View>
                        <View style={styles.checkInForm}>
                            <Text style={styles.checklabel}>Check-ins per Day</Text>
                            <View style={styles.checkInBtns}>
                                <TouchableOpacity style={styles.numberBtn}>
                                    <Text style={styles.txtDay}>{number} / Day</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.minusBtn} onPress={decrement}>
                                    <Text style={styles.txtminus}> - </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.addBtn} onPress={increment}>
                                    <Text style={styles.txtplus}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.iconContainer}>
                            <Text style={styles.iconlabel}>Icons</Text>
                            <View style={styles.icon}>
                                <Icons icon="bicycle" />
                                <Icons icon="heartbeat" />
                                <Icons icon="clock-o" />
                                <Icons icon="apple" />
                                <Icons icon="bed" />
                            </View>
                            <View style={styles.icon}>
                                <Icons icon="money" />
                                <Icons icon="code" />
                                <Icons icon="pencil" />
                                <Icons icon="music" />
                                <Icons icon="coffee" />
                            </View>
                            <View style={styles.icon}>
                                <Icons icon="leaf" />
                                <Icons icon="gamepad" />
                                <Icons icon="book" />
                                <Icons icon="heart" />
                                <Icons icon="laptop" />
                            </View>
                        </View>
                        <View style={styles.colorContainer}>
                            <Text style={styles.colorlabel}>Colors</Text>
                            <View style={styles.colors}>
                                <Colors bg="#8D77AB" />
                                <Colors bg="#FB9EC6" />
                                <Colors bg="#81BFDA" />
                                <Colors bg="#B1F0F7" />
                                <Colors bg="#A1EEBD" />
                            </View>
                            <View style={styles.colors}>
                                <Colors bg="#37AFE1" />
                                <Colors bg="#00FF9C" />
                                <Colors bg="#FF8A8A" />
                                <Colors bg="#6482AD" />
                                <Colors bg="#55AD9B" />
                            </View>
                            <View style={styles.colors}>
                                <Colors bg="#FA7070" />
                                <Colors bg="#F7418F" />
                                <Colors bg="#09122C" />
                                <Colors bg="#FF204E" />
                                <Colors bg="#720455" />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AddNewHabit;

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: "#F4D9D0",
    },
    addNewHabitContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F4D9D0",
        width: "100%",
        paddingTop: 50
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
    },
    header: {
        fontSize: 24,
        color: "#921A40",
        fontWeight: "600"
    },
    contentContainer: {
        width: "100%", // Ensures full width usage
        alignItems: "center", // Aligns content to the left
        justifyContent: "center"
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingTop: 4,
        paddingBottom: 50,
    },
    label: {
        fontSize: 15,
        fontWeight: "600",
        color: "#921A40",
        marginLeft: 30
    },
    checklabel: {
        fontSize: 15,
        fontWeight: "600",
        color: "#921A40",
    },
    iconlabel: {
        fontSize: 15,
        fontWeight: "600",
        color: "#921A40",
    },
    colorlabel: {
        fontSize: 15,
        fontWeight: "600",
        color: "#921A40",
    },
    categoriesContainer: {
        marginTop: 22
    },
    checkboxContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    checkInForm: {
        marginLeft: 30,
        marginTop: 22
    },
    checkInBtns: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    numberBtn: {
        width: BUTTON_WIDTH,
        backgroundColor: "#F6E1E1",
        paddingLeft: 20,
        borderRadius: 10,
        marginTop: 10,
        height: BUTTON_HEIGHT,
        justifyContent: "center",
    },
    addBtn: {
        width: BUTTON_WIDTH * 0.2,
        backgroundColor: "#F6E1E1",
        borderRadius: 10,
        marginTop: 10,
        height: BUTTON_HEIGHT,
        justifyContent: "center",
        alignItems: "center"
    },
    minusBtn: {
        width: BUTTON_WIDTH * 0.2,
        backgroundColor: "#F6E1E1",
        borderRadius: 10,
        marginTop: 10,
        height: BUTTON_HEIGHT,
        justifyContent: "center",
        alignItems: "center"
    },
    iconContainer: {
        marginLeft: 32,
        marginTop: 22
    },
    icon: {
        flexDirection: "row",
        gap: 10
    },
    colorContainer: {
        marginLeft: 32,
        marginTop: 22
    },
    colors: {
        flexDirection: "row",
        gap: 10
    },
    fieldsContainer: {
        marginTop: 5
    }
})