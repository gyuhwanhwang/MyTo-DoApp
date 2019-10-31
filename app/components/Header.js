import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>My To-Do</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 70,
        marginBottom: 40
    },
    headerText: {
        fontSize: 26,
        fontWeight: "600",
        color: "#2c2c54"
    }
});

export default Header;
