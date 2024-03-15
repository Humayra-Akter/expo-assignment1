import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("./assets/octocat.png")}
          style={{ height: 200, width: 200, borderRadius: 100 }}
        />
        <View
          style={{
            marginLeft: 50,
            marginTop: 50,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              letterSpacing: 2,
            }}
          >
            The Octocat
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "blue",
              marginBottom: 10,
              letterSpacing: 1.5,
              marginTop: 10,
            }}
          >
            @octocat
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              letterSpacing: 1.5,
              color: "grey",
            }}
          >
            Joined 25 Jan 2011
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            letterSpacing: 1.5,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Text>
      </View>
      <View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "grey",
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            Repos
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              marginBottom: 10,
              letterSpacing: 1.5,
              marginTop: 10,
            }}
          >8</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 50, paddingVertical: 100 },
});
