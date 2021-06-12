import React from "react";
import { StyleSheet, Text, View } from "react-native";

// export default function StatusCards () {
export default props => {
    const styles = StyleSheet.create({
        statusCards: {
            // The reason we are using the flexDirection property set to the "row" is because we are going to use three cards.  One is going to say completed, another one is going to say initiated, and a third one is going to say deleted.  We want them to all be in one row.
            flexDirection: "row",
            marginBottom: 20,
        },
        column: {
            flex: 1,
            padding: 5,
            height: 150,
            // We don't need this anymore.
            // backgroundColor: "white",
        },
        cardCompleted: {
            // We are using the flex property set to 1 so that this component takes up as much space as possible, while taking the padding into account.  If this was not set, the backgroundColor:red would only cover the text.  If this is set, the backgroundColor:red occupies the entire space, minus the padding.
            flex: 1,
            // backgroundColor: "red",
            backgroundColor: "#7418ff",
            borderRadius: 10,
            padding: 10,
            shadowColor: "#7418ff",
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.2,
            // I think that Joe meant to use the shadowRadius property, instead of the textShadowRadius property.
            // shadowRadius: 6.68,
            textShadowRadius: 6.68,
        },
        cardInProgress: {
            flex: 1,
            backgroundColor: "#6730bf",
            borderRadius: 10,
            padding: 10,
            shadowColor: "#6730bf",
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.2,
            textShadowRadius: 6.68,
        },
        cardDeleted: {
            flex: 1,
            backgroundColor: "#452080",
            borderRadius: 10,
            padding: 10,
            shadowColor: "#452080",
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.2,
            textShadowRadius: 6.68,
        },
        title: {
            color: "white",
            // This will align the title right in the middle.
            alignSelf: "center",
            fontWeight: "700",
        },
        // The reason we are using the <View /> with the numberContainer style, instead of the child <Text /> with the number style is so that we can take as much space as we have available within the card.  This <View /> will only take as much space as the child <Text /> that is inside of it needs, unless we use flex:1.  If we use flex:1, then this will allow the <View /> with the numberContainer style to take as much space as possible within the parent <View /> with the cardCompleted style.
        numberContainer: {
            flex: 1,
            // We are removing this because we no longer need it.
            // backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
        },
        number: {
            color: "white",
            fontSize: 40,
            fontWeight: "100",
        },
    });

    //  This is my way to count the completed tasks.  It might be wrong.
    // const completedTasks = () => {
    //     let allCompletedTasks = props.currentTasks.filter(task => {
    //         return task.status === "completed";
    //     });

    //     return allCompletedTasks.length;
    // };
    // Here we are going to get the number of completed tasks.  We are going to check for the tasks that match the status of completed.  props.currentTasks is an [] of {}s.  Each {} is equal to 1 task.  Each {} has the id, the title, the description, and the status properties.  We are going to return an [] with all of the tasks that have the status property value of completed.
    const totalCompleted = () => {
        let number = props.currentTasks.filter(item => item.status === "completed");

        number = number.length;

        return number;
    };

    // Here we are counting the number of initiated tasks.
    const totalInitiated = () => {
        let number = props.currentTasks.filter(item => item.status === "initiated");

        number = number.length;

        return number;
    };

    // Here we are adding the number of deleted tasks.
    const totalDeleted = () => {
        let number = props.currentTasks.filter(item => item.status === "deleted");

        number = number.length;

        return number;
    };

    // This f() handles all 3 status types.
    // const totalNumber = (statusType) => {
    //     let number = props.currentTasks.filter(item => item.status === statusType);

    //     return number.length;
    // };

    return (
        // The <View /> with the statusCards style is the main container.
        <View style={styles.statusCards}>
            {/* The next three sibling <View />s with the column style are just three columns.  Inside of each column, there is going to be one card. */}
            <View style={styles.column}>
                {/* This <View /> is a card.  Each card will have a style property of cardCompleted, cardInProgress, or cardDeleted.  We are going to give a name to each card.  Inside of each card, there are going to be two <Text />s inside of two <View />s.  One of these two <Text />s is going to be the title.  The other <Text /> is going to be the number.  The reason we are putting these two <Text />s inside of two <View />s is so that we have better control of where we place this content. */}
                <View style={styles.cardCompleted}>
                    <View>
                        <Text style={styles.title}>Completed</Text>
                    </View>
                    <View style={styles.numberContainer}>
                        {/* <Text style={styles.number}>100</Text> */}
                        <Text style={styles.number}>{totalCompleted()}</Text>
                        {/* <Text style={styles.number}>{totalNumber("completed")}</Text> */}
                    </View>
                </View>
            </View>
            <View style={styles.column}>
                <View style={styles.cardInProgress}>
                    <View>
                        <Text style={styles.title}>Initiated</Text>
                    </View>
                    <View style={styles.numberContainer}>
                        {/* <Text style={styles.number}>100</Text> */}
                        <Text style={styles.number}>{totalInitiated()}</Text>
                        {/* <Text style={styles.number}>{totalNumber("initiated")}</Text> */}
                    </View>
                </View>
            </View>
            <View style={styles.column}>
                <View style={styles.cardDeleted}>
                    <View>
                        <Text style={styles.title}>Deleted</Text>
                    </View>
                    <View style={styles.numberContainer}>
                        {/* <Text style={styles.number}>100</Text> */}
                        <Text style={styles.number}>{totalDeleted()}</Text>
                        {/* <Text style={styles.number}>{totalNumber("deleted")}</Text> */}
                    </View>
                </View>
            </View>
        </View>
    );
};