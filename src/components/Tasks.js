import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from "react-native";

// export default function Tasks () {
// We are now using props sent from the Home.js file, so we are doing it this way.
export default props => {
    const styles = StyleSheet.create({
        tasks: {
            // We don't need this anymore.  We just wanted to see how much this <View /> with the tasks style would expand with flex:1.
            // backgroundColor: "red",
            // We used this flex:1 in order to try to get as much space as possible for this <View /> with the tasks style, inside of its parent component.
            flex: 1,
            paddingTop: 20,
            paddingBottom: 80,
        },
        sectionTitle: {
            fontSize: 30,
            color: "#646da1",
            fontWeight: "700",
            marginBottom: 20,
        },
        container: {
            paddingLeft: 20,
            paddingRight: 20,
        },
        task: {
            backgroundColor: "white",
            borderRadius: 5,
            padding: 20,
            marginBottom: 10,
            shadowColor: "#1b1b1b",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.2,
            shadowRadius: 6.68,
        },
        taskTitle: {
            fontSize: 18,
            color: "#7c8bc0",
            fontWeight: "700",
        },
    });

    // This tasks [] contains all of the tasks.
    // We commented out the tasks [] because we moved it to the App.js file.  This is the main file for the entire application.
    // const tasks = [
    //     // Each {} in the tasks [] will represent a single task.
    //     {
    //         // For each id, we are using the Date API from JavaScript.  This will give us a string with the current time.  We are also using the Math.random() in order to get a random number and we are multiplying it by another random number.  This is all going to be inside of a template string.  This is going to be assigned as the id for each task.
    //         // The reason we are using a unique id for each task is because we need a unique id for each key.  Whenever we want to use something, like the map() method, and we want to display a whole bunch of items in React, we need to have an original unique id or unique key for each item.  So we are creating a unique random key for each task.
    //         id: `${new Date().getTime()}_${Math.random() * Math.random()}`,
    //         title: "Clean Your Car",
    //     },
    //     {
    //         id: `${new Date().getTime()}_${Math.random() * Math.random()}`,
    //         title: "Pay Light Bill",
    //     },
    //     {
    //         id: `${new Date().getTime()}_${Math.random() * Math.random()}`,
    //         title: "Go Live on YouTube",
    //     },
    // ];

    // const handleTaskClick = () => {
    //     alert("id");
    // };

    // This is how we handle when a task is clicked.
    const handleTaskClick = id => {
        // This is where we are setting a task to active.  We are passing in the id of the task that we want to set to active.
        props.setActiveTask(id);
        // This is going to send us to the <Edit /> in order to edit this task.
        props.setRoute("Edit");
        // Once we set the task that we want to edit to active, we say, change the page to the edit page.

        // alert(id);
    };

    // The showTasks() will display all of the tasks from the tasks [].
    const showTasks = () => {
        // Here we are looping through all of the tasks, represented by {}s, in the tasks [] and return a <View /> with a child <Text /> inside for each task.
        // return tasks.map(task => {
        // We are now doing it this way because we no longer have a tasks const variable and are using props, instead.
        return props.currentTasks.map(task => {
            return (
                // <View style={styles.task} key={task.id}>
                // We turned the <View /> into a <TouchableHighlight /> so that we can click on each task and be taken to the <Edit /> in order to edit the selected task.
                // <TouchableHighlight style={styles.task} key={task.id} onPress={handleTaskClick}>
                // <TouchableHighlight style={styles.task} key={task.id} onPress={handleTaskClick.bind(null, task.id)}>
                <TouchableHighlight style={styles.task} key={task.id} onPress={() => handleTaskClick(task.id)}>
                    <Text style={styles.taskTitle}>{task.title}</Text>
                </TouchableHighlight>
                // </View>
            );
        });
    };

    return (
        <View style={styles.tasks}>
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Tasks</Text>
                {/* This is just for us to see something. */}
                {/* <Text style={styles.sectionTitle}>Tasks {props.activeTask}</Text> */}
                {/* Now we are going to put in a couple of cards that are each going to represent a single task in our application. */}
                {/* This <View /> represents a single task. */}
                {/* <View style={styles.task}>
                    <Text style={styles.taskTitle}>Task</Text>
                </View> */}
                <ScrollView>
                    {/* Here we are calling the showTasks(). */}
                    {showTasks()}
                </ScrollView>
            </View>
        </View>
    );
};