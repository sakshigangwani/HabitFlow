import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { useHabit } from "../context/HabitContext";
import Icon from 'react-native-vector-icons/FontAwesome';

const Streak = () => {
    const { savedHabit } = useHabit();

    const days = Array.from({ length: 365 }, (_, i) => i);

    const chunkSize = 7;
    const chunkedData = [];
    for (let i = 0; i < days.length; i += chunkSize) {
        chunkedData.push(days.slice(i, i + chunkSize));
    }

    return (
        <View style={styles.streakContainers}>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                {savedHabit.map((habit) => (
                    <View key={habit.id} style={styles.streakContainer}>
                        <View style={[styles.streakBox, { backgroundColor: habit.selectedColor }]}>
                            <View style={styles.streakHeaderPart}>
                                <Icon name={habit.selectedIcon} size={28} color="#000" />
                                <View style={styles.textPart}>
                                    <Text style={styles.name}>{habit.habitName}</Text>
                                    <Text style={styles.desc}>{habit.habitDescription}</Text>
                                </View>
                            </View>
                            <View style={styles.streakPart}>
                                <FlatList
                                    data={chunkedData}
                                    horizontal
                                    keyExtractor={(_, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <View style={styles.column}>
                                            {item.map((day) => (
                                                <View key={day} style={styles.box} />
                                            ))}
                                        </View>
                                    )}
                                />
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Streak;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        paddingTop: 10,
        paddingBottom: 50,
        marginBottom: 40
    },
    streakContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    streakContainers: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 70
        paddingTop: 70
    },
    streakBox: {
        width: "94%",
        height: 197,
        marginTop: 20,
        borderRadius: 10
    },
    streakHeaderPart: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginLeft: 30,
        marginTop: 20,
    },
    textPart: {
        flexDirection: "column",
        gap: 4,
        marginLeft: 10,
    },
    streakPart: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    box: {
        width: 11, // Adjust based on your layout
        height: 11,
        margin: 2,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
    },
    column: {
        flexDirection: "column",
        marginHorizontal: 2, // Space between columns
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
    },
    desc: {
        fontSize: 16,
        fontWeight: "600"
    }
})