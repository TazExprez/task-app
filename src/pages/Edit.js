import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TextInput } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, StatusBar, TextInput } from "react-native";

export default props => {
    // We had to put this up here to avoid certain styling issues.
    const [formState, setFormState] = useState({
        id: "",
        title: "",
        description: "",
        status: "",
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
            height: 300,
        },
        submitButton: {
            backgroundColor: "#0a70ff",
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
        },
        submitButtonText: {
            color: "white",
            fontSize: 18,
        },
        statusContainer: {
            flexDirection: "row",
        },
        statusBtn1: {
            backgroundColor: formState.status === "completed" ? "yellow" : "white",
            padding: 10,
            marginBottom: 10,
            borderColor: "#d1d1d1",
            borderWidth: 1,
            borderRadius: 5,
            marginRight: 10,
        },
        statusBtn2: {
            backgroundColor: formState.status === "initiated" ? "yellow" : "white",
            padding: 10,
            marginBottom: 10,
            borderColor: "#d1d1d1",
            borderWidth: 1,
            borderRadius: 5,
            marginRight: 10,
        },
        statusBtn3: {
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

    // Now that we know that we have the right task in here, we want to make sure that we set each of the fields with the right value, the id, the title, the description, and the status.  To do this, we are going to create a useState React Hook.  We are also going to use the useEffect React Hook to do the equivalent of componentDidMount.  We are going to say run this once the component has been mounted.

    // // This React Hook is going to deal with all of the form fields.
    // const [formState, setFormState] = useState({
    //     // As we type, the changes are added here.
    //     id: "",
    //     title: "",
    //     description: "",
    //     status: "",
    // });

    // Once the component loads, componentDidMount, we are going to be using the code that we did in the getTask() and setting the state, formState, to be equal to the filtered result.
    useEffect(() => {
        const task = props.currentTasks.filter(item => {
            return item.id === props.activeTask;
        })[0];

        // We are setting the state, formState, to the task const.
        setFormState(task);
    }, []);

    // On this edit page, we are going to use a filter.  We are going to figure out which of the different tasks matches the id of the task that we want to edit.  Then we are going to show this task on the edit page.
    // const getTask = () => {
        // This will return back an [] with a single {}.
        // const task = props.currentTasks.filter(item => {
        //     return item.id === props.activeTask;
        // });

        // This will return back an {}.
        // const task = props.currentTasks.filter(item => {
        //     return item.id === props.activeTask;
        // Here we are passing in an [] index, the first one, which is going to make this into an {}.
        // })[0];

        // console.log(task);
        // console.error(task);
    // };

    // getTask();

    // So we have the handleChange().  This f() is going to be taking in two parameters, two arguments.  We have the name of the property, which can be either title or description.  Whenever we are changing the text, the text is going to be passed in as an argument.  Inside of this f(), we have a variable, the newState const.  This newState const is just merging what was there from the old state, formState, and then taking in the new changes that we are adding.  If the title is the only property that changes, then we are only going to merge the title.  Then we will set the newState const as the new state using the setFormState(), which is part of the useState React Hook above.
    const handleChange = (name, text) => {
        // Here we are creating a new variable called the newState const.  Here we are doing a merge with the Object.assign().  We are taking the old state, formState, which has a title property of "Clean Your Car" and a description property of "test".  Since the handleChange() is going to be run every single time there is a change in any of the <TextInput />s, we are going to pass in the name of the property, which in some cases will be "title", and in other cases will be "description".  We are also going to pass in the text, which will be set in the new {}.  So if the title input field changes, whatever text is inside of this input field will be set as the new value of the title property.  Then we are going to use the setFormState() to set the state to the newState const.
        const newState = Object.assign({}, formState, {
            [name]: text,
        });

        setFormState(newState);
    };

    const submit = () => {
        // We are dealing with []s, so we want to find the index of the task that is equal to the id that we have.  props.currentTasks[] has all the tasks, all of the data, that we are using.  We are using the findIndex() method to go through the props.currentTasks[], with the arrow(), we are saying find the index of the props.currentTasks[] element that matches the id property of the props.activeTask "".  Whenever we click on a task in the home screen, that task's id property get assigned to the props.activeTask "".  If we click on the first task, the index will be 0.
        let taskIndex = props.currentTasks.findIndex(x => x.id === props.activeTask);

        // Here newTasks is being set to a new [] with a copy of all of the tasks that are in the props.currentTasks[].  We are doing this in order to not mutate the data.
        let newTasks = [...props.currentTasks];

        // On this new [] with all of the tasks, the newTasks[], find the taskIndex, such as index 0.  Then change just 1 of the items there.  We are going to replace this item with whatever the current formState is.  Remember that the formState is whatever the task that we are changing is.  We have the id, title, description, and status properties inside of the formState.  The formState changes every single time that we type something in the text input fields.  We are pretty much getting a new task.
        // We are replacing what was there, on the same index, on the same location.  We are replacing that one with the new formState.
        newTasks.splice(taskIndex, 1, formState);

        // This will change the currentTasks[] that we are using in the <App /> as pretty much our global state for all of our tasks.  Here we are passing in an [], the newTasks[], with all of the tasks, including the new one that replaced one of the old tasks, the one that we edited. 
        props.setTasks(newTasks);

        // Here we are sending the user back to the home page.
        props.setRoute("Home");

        // console.error(newTasks);
    };

    return (
        <View style={styles.home}>
            <StatusBar backgroundColor="#221040" barStyle="light-content" />
            <View style={styles.top}>
                <View style={styles.container}>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity onPress={handleBackBtn}>
                            <Text style={styles.backBtn}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.container}>
                    <Text style={styles.sectionTitle}>Edit Task</Text>
                    <Text style={styles.label}>Title</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Title"
                        onChangeText={text => handleChange("title", text)}
                        value={formState.title}
                    />
                    <Text style={styles.label}>Description</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Enter Text"
                        multiline={true}
                        onChangeText={text => handleChange("description", text)}
                        value={formState.description}
                    />
                    {/* <View style={styles.submitButton}> */}
                    {/* <TouchableHighlight style={styles.submitButton} onPress={submit}>
                        <Text style={styles.submitButtonText}>Save</Text>
                    </TouchableHighlight> */}
                    {/* </View> */}
                    <Text style={styles.label}>Status</Text>
                    <View style={styles.statusContainer}>
                        <TouchableHighlight 
                            style={styles.statusBtn1} 
                            onPress={() => handleChange("status", "completed")}
                            underlayColor="white"
                        >
                            <Text style={styles.statusBtnText}>Completed</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            style={styles.statusBtn2} 
                            onPress={() => handleChange("status", "initiated")}
                            underlayColor="white"
                        >
                            <Text style={styles.statusBtnText}>Initiated</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            style={styles.statusBtn3} 
                            onPress={() => handleChange("status", "deleted")}
                            underlayColor="white"
                        >
                            <Text style={styles.statusBtnText}>Delete</Text>
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight 
                        style={styles.submitButton} 
                        onPress={submit}
                        underlayColor="#0a70ff"
                    >
                        <Text style={styles.submitButtonText}>Save</Text>
                    </TouchableHighlight>
                </View>   
            </View>
        </View>
    );
};