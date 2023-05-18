import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

const Home = () => {
    return (
        <ScrollView>
            <View>
                <View>
                    <Text style={styles.title}> Main Section </Text>
                    <Text style={styles.paragraph}> First, you will need to start Metro, the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."—Metro Docs

                        To start Metro, run npx react-native start inside your React Native project folder:

                    </Text>
                    <Image source={{ uri: 'https://media.springernature.com/full/springer-cms/rest/v1/img/23611344/v1/height/320' }}
                        style={{ width: 400, height: 400 }} />

                </View>
                <View>
                    <Text style={styles.title}> Secondary Section </Text>
                    <Text style={styles.paragraph}>Now that you have successfully run the app, let's modify it.
                        Open App.tsx in your text editor of choice and edit some lines. Press the R key twice or select Reload from the Developer Menu (Ctrl + M) to see your changes!    </Text>
                </View>
            </View>
        </ScrollView>
    )
}; 
export default Home;

const styles = StyleSheet.create({
    title: {
        color: "blue",
        fontSize: 20,
        fontWeight: "bold"
    },
    paragraph: {
        fontSize: 15,
        opacity: 1,
        color: "black",
        padding: 20
    }
})