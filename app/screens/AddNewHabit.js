import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Fields from "../components/Fields";
import Checkbox from "../components/Checkbox";
import Icons from "../components/Icons";
import Colors from "../components/Colors";
import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHabit } from "../context/HabitContext";

const { width, height } = Dimensions.get("window");

const BUTTON_WIDTH = width * 0.54
const BUTTON_HEIGHT = height * 0.05

const AddNewHabit = ({ navigation }) => {
    const {
        number,
        habitName,
        habitDescription,
        selectedCategories,
        selectedIcon,
        selectedColor,
        increment,
        decrement,
        setHabitName,
        setHabitDescription,
        toggleCategory,
        setSelectedIcon,
        setSelectedColor,
        saveHabit
    } = useHabit();

    const pressHandler = () => {
        navigation.navigate("Home")
    }

    const handleSave = () => {
        saveHabit();
        navigation.navigate("Home");
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar
                backgroundColor="#F4D9D0"
                barStyle="dark-content"
            />
            <View style={styles.addNewHabitContainer}>
                <View style={styles.headerContainer}>
                    <Icon name="close" size={30} color="#921A40" style={styles.icon} onPress={pressHandler} />
                    <Text style={styles.header}>New Habit</Text>
                    <Icon name="cog" size={30} color="#921A40" style={styles.icon} />
                </View>
                <View style={styles.contentContainer}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                        <View style={styles.fieldsContainer}>
                            <Fields name="Name" label="Enter habit name" value={habitName} onChangeText={setHabitName} />
                        </View>
                        <View style={styles.fieldsContainer}>
                            <Fields name="Description" label="Enter habit description" value={habitDescription} onChangeText={setHabitDescription} />
                        </View>
                        <View style={styles.categoriesContainer}>
                            <Text style={styles.label}>Categories</Text>
                            <View style={styles.checkboxContainer}>
                                <Checkbox icon="paint-brush" name="Art" onPress={toggleCategory} selected={selectedCategories.includes("Art")} />
                                <Checkbox icon="money" name="Finances" onPress={toggleCategory} selected={selectedCategories.includes("Finances")} />
                                <Checkbox icon="bicycle" name="Fitness" onPress={toggleCategory} selected={selectedCategories.includes("Fitness")} />
                            </View>
                            <View style={styles.checkboxContainer}>
                                <Checkbox icon="coffee" name="Nutrition" onPress={toggleCategory} selected={selectedCategories.includes("Nutrition")} />
                                <Checkbox icon="heart" name="Health" onPress={toggleCategory} selected={selectedCategories.includes("Health")} />
                                <Checkbox icon="code" name="Study" onPress={toggleCategory} selected={selectedCategories.includes("Study")} />
                            </View>
                            <View style={styles.checkboxContainer}>
                                <Checkbox icon="user" name="Social" onPress={toggleCategory} selected={selectedCategories.includes("Social")} />
                                <Checkbox icon="laptop" name="Work" onPress={toggleCategory} selected={selectedCategories.includes("Work")} />
                                <Checkbox icon="leaf" name="Other" onPress={toggleCategory} selected={selectedCategories.includes("Other")} />
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
                                <Icons icon="bicycle" onPress={setSelectedIcon} selected={selectedIcon === "bicycle"} />
                                <Icons icon="heartbeat" onPress={setSelectedIcon} selected={selectedIcon === "heartbeat"} />
                                <Icons icon="clock-o" onPress={setSelectedIcon} selected={selectedIcon === "clock-o"} />
                                <Icons icon="apple" onPress={setSelectedIcon} selected={selectedIcon === "apple"} />
                                <Icons icon="bed" onPress={setSelectedIcon} selected={selectedIcon === "bed"} />
                            </View>
                            <View style={styles.icon}>
                                <Icons icon="money" onPress={setSelectedIcon} selected={selectedIcon === "money"} />
                                <Icons icon="code" onPress={setSelectedIcon} selected={selectedIcon === "code"} />
                                <Icons icon="pencil" onPress={setSelectedIcon} selected={selectedIcon === "pencil"} />
                                <Icons icon="music" onPress={setSelectedIcon} selected={selectedIcon === "music"} />
                                <Icons icon="coffee" onPress={setSelectedIcon} selected={selectedIcon === "coffee"} />
                            </View>
                            <View style={styles.icon}>
                                <Icons icon="leaf" onPress={setSelectedIcon} selected={selectedIcon === "leaf"} />
                                <Icons icon="gamepad" onPress={setSelectedIcon} selected={selectedIcon === "gamepad"} />
                                <Icons icon="book" onPress={setSelectedIcon} selected={selectedIcon === "book"} />
                                <Icons icon="heart" onPress={setSelectedIcon} selected={selectedIcon === "heart"} />
                                <Icons icon="laptop" onPress={setSelectedIcon} selected={selectedIcon === "laptop"} />
                            </View>
                        </View>
                        <View style={styles.colorContainer}>
                            <Text style={styles.colorlabel}>Colors</Text>
                            <View style={styles.colors}>
                                <Colors bg="#8D77AB" onPress={setSelectedColor} selected={selectedColor === "#8D77AB"} />
                                <Colors bg="#FB9EC6" onPress={setSelectedColor} selected={selectedColor === "#FB9EC6"} />
                                <Colors bg="#81BFDA" onPress={setSelectedColor} selected={selectedColor === "#81BFDA"} />
                                <Colors bg="#B1F0F7" onPress={setSelectedColor} selected={selectedColor === "#B1F0F7"} />
                                <Colors bg="#A1EEBD" onPress={setSelectedColor} selected={selectedColor === "#A1EEBD"} />
                            </View>
                            <View style={styles.colors}>
                                <Colors bg="#37AFE1" onPress={setSelectedColor} selected={selectedColor === "#37AFE1"} />
                                <Colors bg="#00FF9C" onPress={setSelectedColor} selected={selectedColor === "#00FF9C"} />
                                <Colors bg="#FF8A8A" onPress={setSelectedColor} selected={selectedColor === "#FF8A8A"} />
                                <Colors bg="#6482AD" onPress={setSelectedColor} selected={selectedColor === "#6482AD"} />
                                <Colors bg="#55AD9B" onPress={setSelectedColor} selected={selectedColor === "#55AD9B"} />
                            </View>
                            <View style={styles.colors}>
                                <Colors bg="#FA7070" onPress={setSelectedColor} selected={selectedColor === "#FA7070"} />
                                <Colors bg="#F7418F" onPress={setSelectedColor} selected={selectedColor === "#F7418F"} />
                                <Colors bg="#09122C" onPress={setSelectedColor} selected={selectedColor === "#09122C"} />
                                <Colors bg="#FF204E" onPress={setSelectedColor} selected={selectedColor === "#FF204E"} />
                                <Colors bg="#720455" onPress={setSelectedColor} selected={selectedColor === "#720455"} />
                            </View>
                        </View>
                        <View style={styles.saveBtnContainer}>
                            <TouchableOpacity style={styles.btn} onPress={handleSave}>
                                <Text style={styles.btnName}>Save</Text>
                                <Icon name="save" size={21} color="#F4D9D0" style={styles.icon} />
                            </TouchableOpacity>
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
    },
    saveBtnContainer: {
        marginTop: 20,
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
})