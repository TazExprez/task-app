// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// This will allow use to use the useState React Hook.
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
// Since the App.js file is located in the route directory, we say this directory, then src, then pages, then Home.
import Home from "./src/pages/Home";
import Create from "./src/pages/Create";
import Edit from "./src/pages/Edit";

export default function App() {
  // Here we are setting up our own routing system.  React Native has its own way of doing things, but Joe thinks that this is still important to do, especially for simple applications, like this one.  We could even use a third party library for the routing, but this app is very simple.
  // Here we are setting up our current route, currently our state, for this application.
  // Our starting state is the "Home".  Later on, if we want to change our state, all we have to do is change the current "", which is going to be for the state of the location of where the application is.
  const [currentRoute, setRoute] = useState("Home");
  // The default state will be the "Create" so that we could edit the page right away.
  // const [currentRoute, setRoute] = useState("Create");
  // const [currentRoute, setRoute] = useState("Edit");
  // We are going to use React Hooks to keep track of the state of every different task.
  // Once we have this, we are able to have all of our tasks in the App.js file.  Later on, if we decide to connect to some type of database, we can run all of our connections to the database, like our POST and our GET requests right here in our App.js file.  All of the information from the database is going to be passed down to all of our components from here, from the App.js file.
  const [currentTasks, setTasks] = useState([
    {
      id: `${new Date().getTime()}_${Math.random() * Math.random()}`,
      title: "Clean Your Car",
      // Now we are adding a third property, description, which was going to be an empty "", at first, but Joe decided to use the "test", instead.
      description: "test",
      // Now we are adding a fourth property, status, that will show whether the task is initiated, completed, or deleted.
      status: "initiated",
    },
    {
      id: `${new Date().getTime()}_${Math.random() * Math.random()}`,
      title: "Pay Light Bill",
      description: "test",
      status: "completed",
    },
    {
      id: `${new Date().getTime()}_${Math.random() * Math.random()}`,
      title: "Go Live on YouTube",
      description: "test",
      status: "deleted",
    },
    {
      id: `${new Date().getTime()}_${Math.random() * Math.random()}`,
      title: "Go To Movies",
      description: "test",
      status: "deleted",
    },
    {
      id: `${new Date().getTime()}_${Math.random() * Math.random()}`,
      title: "Go Live On Twitch",
      description: "test",
      status: "completed",
    },
  ]);
  const [activeTask, setActiveTask] = useState("");
  // We are doing what we were doing before, but now our state is being run in our App.js file.  We can also use something like Redux to do this, but Joe wants us to learn how to do this from scratch and learn how to pass down props.  There are going to be applications that don't need an extra library.  With something like this application that we are building, we don't need something like Redux, or anything else, and what we are using is fine.  We can just use what comes with React and not use a third party library.
  // We have three states.  currentRoute is our routing system.  This is how we know what page we are displaying.  currentTasks has all of our tasks, which are going to show up on the home page, the main page, under Tasks.  When you create a new task, this task is going to go on the home page, under Tasks.  activeTasks is the way we are going to know which task is currently being edited.

  // const tasks = [
  //   {
  //       id: `${new Date().getTime()}_${Math.random() * Math.random()}`,
  //       title: "Clean Your Car",
  //   },
  //   {
  //       id: `${new Date().getTime()}_${Math.random() * Math.random()}`,
  //       title: "Pay Light Bill",
  //   },
  //   {
  //       id: `${new Date().getTime()}_${Math.random() * Math.random()}`,
  //       title: "Go Live on YouTube",
  //   },
  // ];

  // We are triggering this f() in the App.js file.
  const showPages = () => {
    // The first currentRoute is going to be the "Home".
    // Depending on what the currentRoute const is, the showPages() is going to display a different component for each case in the switch statement below.  This is a simple routing system.
    switch (currentRoute) {
      case "Home":
        // return <Text>Home</Text>;
        // When the state, or currentRoute, is set to the "Home", we are going to return the <Home />.
        // return <Home />;
        // Now we are passing the current state, which is the currentRoute, and the function that changes the state, the setRoute().  We will do this to change the state.
        // Since we are not passing anything inside of this component, we can set it as a self closing component.
        return (
          <Home 
            currentRoute={currentRoute} 
            setRoute={setRoute}
            currentTasks={currentTasks}
            setTasks={setTasks}
            activeTask={activeTask}
            setActiveTask={setActiveTask}
          />
        );
        break;
      case "Create":
        // return <Create />;
        return (
          <Create 
            currentRoute={currentRoute} 
            setRoute={setRoute} 
            currentTasks={currentTasks}
            setTasks={setTasks}
          />
        );
        break;
      case "Edit":
        return (
          <Edit 
            currentRoute={currentRoute} 
            setRoute={setRoute}
            currentTasks={currentTasks}
            setTasks={setTasks}
            // activeTask is going to give us the id of the current task that we are editing.
            activeTask={activeTask}
          />
        );
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* The idea with the showPages() is that whatever the currentRoute, or state, is, it is going to return that component.  Like if currentRoute is the "Home", it will return that component. */}
      {showPages()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

// We created a pages folder and a components folder in order to separate the components into different categories.  We could put the components that create buttons in the components folder.  We could put the components that render a page, like the Home page, into the pages folder.  We can structure this however we want, but Joe recommends doing it this way because it makes more sense to him, when looking at this later on.