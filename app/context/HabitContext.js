import React, { createContext, useContext, useState } from "react";

const HabitContext = createContext();

export const useHabit = () => {
    return useContext(HabitContext);
}

export const HabitProvider = ({ children }) => {
    const [number, setNumber] = useState(1);
    const [habitName, setHabitName] = useState("");
    const [habitDescription, setHabitDescription] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [savedHabit, setSavedHabit] = useState([]);

    const increment = (num) => {
        setNumber(prevNum => prevNum + 1);
    }

    const decrement = (num) => {
        setNumber(prevNum => prevNum > 1 ? prevNum - 1 : 1);
    }

    const toggleCategory = (categoryName) => {
        setSelectedCategories(prev => {
            if (prev.includes(categoryName)) {
                return prev.filter(cat => cat != categoryName)
            } else {
                return [...prev, categoryName];
            }
        })
    }

    const saveHabit = () => {
        const habitData = {
            habitName,
            habitDescription,
            number,
            selectedCategories,
            selectedIcon,
            selectedColor,
        };
        setSavedHabit([...savedHabit, habitData]);

        setHabitName("");
        setHabitDescription("");
        setNumber(1);
        setSelectedCategories([]);
        setSelectedIcon(null);
        setSelectedColor(null);
    }

    return (
        <HabitContext.Provider
            value={{
                number,
                setNumber,
                habitName,
                setHabitName,
                habitDescription,
                setHabitDescription,
                selectedCategories,
                setSelectedCategories,
                selectedIcon,
                setSelectedIcon,
                selectedColor,
                setSelectedColor,
                increment,
                decrement,
                toggleCategory,
                savedHabit,
                saveHabit
            }}
        >
            {children}
        </HabitContext.Provider>
    )
}

