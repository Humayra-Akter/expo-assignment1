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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f2fcff",
          elevation: 4,
          shadowOffset: {
            width: 1,
            height: 10,
          },
          shadowColor: "#abcfd9",
          shadowOpacity: 0.4,
          shadowRadius: 4,
          marginTop: 50,
        }}
      >
        <View style={{ margin: 32 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "grey",
              marginBottom: 10,
              marginTop: 10,
              letterSpacing: 1.5,
            }}
          >
            Repos
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "600",
              marginBottom: 10,
              letterSpacing: 1.5,
              marginTop: 10,
              textAlign: "center",
            }}
          >
            8
          </Text>
        </View>
        <View style={{ margin: 32 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "grey",
              letterSpacing: 1.5,
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            Followers
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "600",
              marginBottom: 10,
              letterSpacing: 1.5,
              marginTop: 10,
              textAlign: "center",
            }}
          >
            3938
          </Text>
        </View>
        <View style={{ margin: 32 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              letterSpacing: 1.5,
              color: "grey",
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            Following
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "600",
              marginBottom: 10,
              letterSpacing: 1.5,
              marginTop: 10,
              textAlign: "center",
            }}
          >
            9
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 60 }}>
        <Image
          source={require("./assets/map.png")}
          style={{ height: 70, width: 70, borderRadius: 100 }}
        />
        <View
          style={{
            marginLeft: 30,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              letterSpacing: 2,
            }}
          >
            San Francisco
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 18 }}>
        <Image
          source={require("./assets/link.png")}
          style={{ height: 70, width: 70, borderRadius: 100 }}
        />
        <View
          style={{
            marginLeft: 30,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              letterSpacing: 2,
            }}
          >
            https://github.blog
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 18 }}>
        <Image
          source={require("./assets/twitter.png")}
          style={{ height: 70, width: 70, borderRadius: 100 }}
        />
        <View
          style={{
            marginLeft: 30,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              letterSpacing: 2,
              color: "grey",
            }}
          >
            not available
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 18 }}>
        <Image
          source={require("./assets/github.png")}
          style={{ height: 70, width: 70, borderRadius: 100 }}
        />
        <View
          style={{
            marginLeft: 30,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              letterSpacing: 2,
            }}
          >
            @github
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 50, paddingVertical: 100 },
});
