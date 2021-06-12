import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Header () {
    const styles = StyleSheet.create({
        header: {
            // We no longer need this, so we will remove it.
            // backgroundColor: "red",
            width: "100%",
            borderRadius: 10,
            padding: 10,
            // We are using the flexDirection: "row" because Joe also wants to put the name of the user in the <Header />.
            flexDirection: "row",
            // This does not seem to be doing anything right now.
            alignItems: "center",
        },
        headerProfileContainer: {
            // A trick Joe uses if he wants to turn an <Image /> into a circle is to set the following properties on the <View /> that is used as a container for the <Image />.  First he sets the borderRadius property to 50, which is pretty much a full circle.  Then he sets the alignItems and the justifyContent properties to the "center" so that the <Image /> could be dead set in the middle of the <View /> container.  Then he sets the overflow property to the "hidden", which will remove anything that is outside of the <View /> container, which is now a circle.  So a square <Image /> will now look like a circle because all of its corners will be hidden.  Now we have a perfect circle.
            // This does not seem to do anything, until the overflow: "hidden" property is set.
            borderRadius: 50,
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
            height: 60,
            width: 60,
        },
        headerProfile: {
            // One of the reasons Joe is using a <View /> as a container for the <Image /> is because if we try to use the borderRadius: 50 property with the <Image />, it is not going to work the same as on the <View /> container.  Joe seems to have issues with this, but I don't.
            // borderRadius: 50,
            // You can make the height and the width of the <Image /> larger than the height and the width of the <View /> that contains it.  This will cause the <Image /> to appear zoomed in.
            // height: 80,
            height: 60,
            // width: 80,
            width: 60,
        },
        welcomeMessage: {
            // This does not seem to be doing anything.
            // fontSize: 20,
            // This does not seem to be doing anything.
            // fontWeight: "700",
            paddingLeft: 20,
        },
        greetings: {
            color: "white",
            fontSize: 20,
            fontWeight: "700",
        },
        subMessage: {
            color: "#959CAC",
            fontSize: 14,
            fontWeight: "300",
        },
    });

    return (
        <View style={styles.header}>
            {/* <Text>Header</Text> */}
            {/* This is just to create a profile image. */}
            <View style={styles.headerProfileContainer}>
                {/* In reality we want to use this image.  We want to have it contained within the <View /> so that we can have more control of how we display this image. */}
                {/* At first, we can't see anything.  The reason is that we have to put in the size for the width and the height of the image. */}
                <Image 
                    style={styles.headerProfile}
                    source={{
                        uri: "https://randomuser.me/api/portraits/men/95.jpg"
                    }}
                />
            </View>
            {/* This is another <View /> being used as a container. */}
            <View style={styles.welcomeMessage}>
                <Text style={styles.greetings}>
                    Hi, James Doe!
                </Text>
                <Text style={styles.subMessage}>
                    Last time you completed 4 tasks.
                </Text>
            </View>
        </View>
    );
};