// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from "react-native";
// import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TextInput } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, StatusBar, TextInput } from "react-native";

// export default function Home () {
export default props => {
    // I had to move this up here, or I would get an error when assigning the background color on the status buttons.  The error was that the formState was not an {}, so the formState needs to be created before the style that uses a ternary operator.
    const [formState, setFormState] = useState({
        // id: "",
        // Every time we click on the create button, a new id will be created for each new task.
        id: `${new Date().getTime()}_${Math.random() * Math.random()}`,
        title: "",
        description: "",
        // status: "",
        // The status is going to be initiated by default.
        status: "initiated",
    });

    const styles = StyleSheet.create({
        home: {
            flex: 1,
            backgroundColor: "#F7FAFD",
        },
        top: {
            backgroundColor: "#221040",
        },
        container: {
            paddingTop: 36,
            paddingRight: 20,
            paddingLeft: 20,
        },
        menuContainer: {
            alignItems: "flex-start",
            paddingTop: 10,
            paddingBottom: 10,
        },
        backBtn: {
            color: "white",
            // We removed the border because an iOS device would not really have a button with a border around it.
            // borderWidth: 1,
            borderColor: "white",
            borderRadius: 5,
            padding: 10,
        },
        sectionTitle: {
            fontSize: 30,
            color: "#646da1",
            fontWeight: "700",
            marginBottom: 20,
        },
        label: {
            fontWeight: "700",
            marginBottom: 10,
        },
        textInput: {
            backgroundColor: "white",
            fontSize: 18,
            padding: 10,
            marginBottom: 10,
            // The borderColor property will not seem to do anything until the borderWidth property is set.
            borderColor: "#d1d1d1",
            borderWidth: 1,
            borderRadius: 5,
        },
        textArea: {
            backgroundColor: "white",
            fontSize: 18,
            padding: 10,
            marginBottom: 10,
            borderColor: "#d1d1d1",
            borderWidth: 1,
            borderRadius: 5,
            // Unlike the regular text input, this text input will also get a height because it is going to be used as a text area.
            height: 300,
            // We actually set this as a property for the <TextInput /> that is going to be used as a text area.
            // multiline: true,
        },
        submitButton: {
            backgroundColor: "#0a70ff",
            padding: 10,
            borderRadius: 5,
            // This does not seem to do anything.
            // justifyContent: "center",
            alignItems: "center",
        },
        submitButtonText: {
            color: "white",
            fontSize: 18,
        },
        // touchableBack: {
        //     backgroundColor: "red",
        // },
        statusContainer: {
            flexDirection: "row",
        },
        // statusBtn: {
        //     padding: 10,
        //     marginBottom: 10,
        //     borderColor: "#d1d1d1",
        //     borderWidth: 1,
        //     borderRadius: 5,
        //     marginRight: 10,
        // },
        statusBtn1: {
            // The background color is going to be set to white for all 3 status buttons by default.
            // backgroundColor: "white",
            backgroundColor: formState.status === "completed" ? "yellow" : "white",
            padding: 10,
            marginBottom: 10,
            borderColor: "#d1d1d1",
            borderWidth: 1,
            borderRadius: 5,
            marginRight: 10,
        },
        statusBtn2: {
            // backgroundColor: "white",
            // backgroundColor: "yellow",
            backgroundColor: formState.status === "initiated" ? "yellow" : "white",
            padding: 10,
            marginBottom: 10,
            borderColor: "#d1d1d1",
            borderWidth: 1,
            borderRadius: 5,
            marginRight: 10,
        },
        statusBtn3: {
            // backgroundColor: "white",
            backgroundColor: formState.status === "deleted" ? "red" : "white",
            padding: 10,
            marginBottom: 10,
            borderColor: "#d1d1d1",
            borderWidth: 1,
            borderRadius: 5,
            marginRight: 10,
        },
    });

    const handleBackBtn = () => {
        props.setRoute("Home");
    };
    
    // const [formState, setFormState] = useState({
    //     // id: "",
    //     // Every time we click on the create button, a new id will be created for each new task.
    //     id: `${new Date().getTime()}_${Math.random() * Math.random()}`,
    //     title: "",
    //     description: "",
    //     // status: "",
    //     // The status is going to be initiated by default.
    //     status: "initiated",
    // });

    const handleChange = (name, text) => {
        // alert(text);

        const newState = Object.assign({}, formState, {
            [name]: text,
        });

        setFormState(newState);
    };

    // We are going to be updating this f() that we copied from the <Edit /> because we are not actually updating any task inside of the props.currentTasks[] when using the <Create />.  We are just adding a new task to the props.currentTasks[].
    // const submit = () => {
    //     let taskIndex = props.currentTasks.findIndex(x => x.id === props.activeTask);
    //     let newTasks = [...props.currentTasks];
    //     newTasks.splice(taskIndex, 1, formState);
    //     props.setTasks(newTasks);
    //     props.setRoute("Home");
    // };
    const submit = () => {
        // My 2 line solution.
        // let newTasks = [...props.currentTasks];
        // newTasks.push(formState);
        // Joe's 1 line solution.
        let newTasks = [...props.currentTasks, formState];
        props.setTasks(newTasks);
        props.setRoute("Home");
    };

    // We are probably not going to need this in the <Create />.  We use this to set the currentTasks[] and fill in all of the different forms, but on the <Edit />.  We already have a default state, which is the {} with the id, title, description, and status properties.
    // One thing we do need in the <Create /> is creating an id property.  We will go to the main component, the <App />, in order to get the formula to do this in the <Create />.
    // useEffect(() => {
    //     const task = props.currentTasks.filter(item => {
    //         return item.id === props.activeTask;
    //     })[0];

    //     setFormState(task);
    // }, []);

    return (
        <View style={styles.home}>
            <StatusBar backgroundColor="#221040" barStyle="light-content" />
            <View style={styles.top}>
                <View style={styles.container}>
                    {/* We put a <View /> around the <Text /> to use it as a container, so that it could represent the whole area surrounded by the border.  This will allow us to control the back button by itself. */}
                    <View style={styles.menuContainer}>
                        {/* <TouchableOpacity onPress={handleBackBtn} style={styles.touchableBack}> */}
                        <TouchableOpacity onPress={handleBackBtn}>
                            {/* The reason we are putting a back button is because iOS devices, unlike Android devices, don't have a back button, so we have to do this. */}
                            <Text style={styles.backBtn}>Back</Text>
                        </TouchableOpacity>
                        {/* <Text>Create Task</Text> */}
                    </View>
                </View>
            </View>
            {/* <Tasks /> */}
            {/* Here we are creating a form.  We are going to need labels, input fields, and a text area.  We are going to have the title of the task and then a description of the task. */}
            <View style={styles.formContainer}>
                <View style={styles.container}>
                    <Text style={styles.sectionTitle}>Create Task</Text>
                    <Text style={styles.label}>Title</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Title"
                        onChangeText={text => handleChange("title", text)}
                        value={formState.title}
                    />
                    {/* This is the label for the text area. */}
                    <Text style={styles.label}>Description</Text>
                    {/* Now we are going to create a text area.  In React Native, a text area is just a regular input field, but we give it a height. */}
                    {/* Here we are setting the multiline property to true because this <TextInput /> is going to be used as a text area. */}
                    <TextInput
                        style={styles.textArea}
                        placeholder="Enter Text"
                        multiline={true}
                        onChangeText={text => handleChange("description", text)}
                        value={formState.description}
                    />
                    {/* We removed the ability to edit the status in the <Create /> because we are not going to edit the status right away.  We added this ability to the <Edit /> because it makes sense for this to be there. */}
                    {/* <Text style={styles.label}>Status</Text>
                    <View style={styles.statusContainer}>
                        <TouchableHighlight 
                            // style={styles.statusBtn} 
                            style={styles.statusBtn1} 
                            onPress={() => handleChange("status", "completed")}
                            underlayColor="white"
                        >
                            <Text style={styles.statusBtnText}>Completed</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            // style={styles.statusBtn} 
                            style={styles.statusBtn2} 
                            onPress={() => handleChange("status", "initiated")}
                            underlayColor="white"
                        >
                            <Text style={styles.statusBtnText}>Initiated</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            // style={styles.statusBtn} 
                            style={styles.statusBtn3} 
                            onPress={() => handleChange("status", "deleted")}
                            underlayColor="white"
                        >
                            <Text style={styles.statusBtnText}>Delete</Text>
                        </TouchableHighlight>
                    </View> */}
                    {/* Here we are creating a submit button. */}
                    {/* <View style={styles.submitButton}> */}
                    {/* Here we are changing the <View /> into a <TouchableHighlight /> so that we can press the submit button. */}
                    <TouchableHighlight 
                        style={styles.submitButton} 
                        onPress={submit}
                        // This is the color of the button when you click it.  This is going to remove the black color that we get when we click the button.
                        underlayColor="#0a70ff"
                    >
                        <Text style={styles.submitButtonText}>Save</Text>
                    </TouchableHighlight>
                    {/* </View> */}
                </View>   
            </View>
        </View>
    );
};

// When we are creating a task and press one of the status buttons, this will be the default status of the task.  We want to be able to have the pressed status button be a different color.  The initiated status is going to be selected by default.  This is going to be the default status for a new task that is being created.  