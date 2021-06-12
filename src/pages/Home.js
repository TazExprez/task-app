import React, { useState } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// Now we are also importing the <StatusBar /> in order to be able to change it.  This is the bar at the top, with the battery, time, and other information.
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from "react-native";
// We are importing the <Header /> this way because we are going back to the root directory and then going to the components directory and locating the Header.js file.
import Header from "../components/Header";
import StatusCards from "../components/StatusCards";
import Tasks from "../components/Tasks";

// export default function Home () {
// We don't need this function to be named, so we can just create a regular arrow f().
// We are passing in props, so that we can use the props that we are passing in to the components in the App.js file.
// If there is only one parameter for an arrow f(), () are not needed.
export default props => {
    // Joe moved the styles up here, inside of the f(), so that it could be easier to find things, as we continue to change things around.
    const styles = StyleSheet.create({
        home: {
            flex: 1,
            backgroundColor: "#F7FAFD",
        },
        top: {
            backgroundColor: "#221040",
        },
        // Just like in regular HTML and CSS, where we use a container to give us a certain padding on the sides, we are also going to use that here.
        container: {
            // We are using a paddingTop property because many devices have a notch or notifications at the top of the display.
            paddingTop: 36,
            paddingRight: 20,
            paddingLeft: 20,
        },
        text: {
            color: "white",
        },
        addTaskBtn: {
            backgroundColor: "#FFF740",
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            // We can set the position property to the "absolute", just like in CSS.  This way we can have this button floating around.
            position: "absolute",
            // This is going to place the button near the bottom of the screen.
            bottom: 20,
            // This is going to place the button near the right of the screen.
            right: 20,
            // This sets the drop shadow color.
            shadowColor: "#1b1b1b",
            // This is how we will control the drop shadow.
            shadowOffset: {
                width: 0,
                height: 5,
            },
            // This will set the drop shadow opacity.  We won't really be able to see the drop shadow until we set the shadowOpacity property. 
            shadowOpacity: 0.2,
            // This will set the drop shadow blur radius.
            shadowRadius: 6.68,
        },
    });

    // This will handle presses on the button that adds tasks. 
    const handleAddTaskBtn = () => {
        // This will let us find out what the current route is.
        // alert(props.currentRoute);
        // This will let us change the current route to some other route.  This will set the current route to become the "Create".
        // alert(props.setRoute("Create"));
        props.setRoute("Create");
    };

    return (
        <View style={styles.home}>
            {/* Here we are setting our status bar how we would like it to be.  We set the backgroundColor property to be the same color as the <View /> with the top style.  The backgroundColor property can only be set for Android devices.  We set the barStyle property to the "light-content".  This will set the status bar to use a dark background with white text and icons. */}
            {/* You can also put the <StatusBar /> in the App.js file, if you want the status bar to always remain the same.  If not, you can put it in different components and change it in each one. */}
            {/* This is the status bar section. */}
            <StatusBar backgroundColor="#221040" barStyle="light-content" />
            {/* If we put the <View /> with the style property set to the styles.container property up here, we would get the padding, but not the background for the entire top portion of the screen. */}
            {/* <View style={styles.container}> */}
            {/* This is the top section, right under the status bar section.  This is like a header section.  This has the top section and then it has the status cards underneath the top section. */}
            <View style={styles.top}>
                {/* The main reason we have this container is to make sure that we have control over the background color and we can put in a padding within the background color.  We want to make sure that we have the padding inside of it, not outside of it. */}
                <View style={styles.container}>
                    {/* <Text style={styles.text}>This is the home page!</Text> */}
                    <Header />
                    {/* <StatusCards /> */}
                    {/* We want to pass down the tasks to the status cards. */}
                    <StatusCards currentTasks={props.currentTasks} />
                </View>
            {/* </View> */}
            </View>
            {/* This is the tasks area, located right under the top section. */}
            {/* <Tasks /> */}
            <Tasks
                // We are passing these props from the App.js file to the Home.js file.  From the Home.js file, we are now passing these props to the Tasks.js file.
                setRoute={props.setRoute}
                currentTasks={props.currentTasks}
                setTasks={props.setTasks}
                activeTask={props.activeTask}
                setActiveTask={props.setActiveTask}
            />
            {/* <TouchableOpacity style={styles.addTaskBtn}> */}
            <TouchableOpacity style={styles.addTaskBtn} onPress={handleAddTaskBtn}>
                {/* This is going to be like a floating button that we can use. */}
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

// const styles = StyleSheet.create({
//     home: {
//         flex: 1,
//         backgroundColor: "#fff",
//     },
// });

// Joe is teaching us how to create our own routing/navigation system, but there are libraries for this.  This is in case we need to do this some day.