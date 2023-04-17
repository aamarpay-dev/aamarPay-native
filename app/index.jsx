import { Stack } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import { COLORS, SIZES, icons, images } from "../constants";
import ScreenHeaderBtn from "../components/header/ScreenHeaderBtn";
import { ScrollView } from "react-native-gesture-handler";
import Form from "../components/Form/Form";

const Home = () => {
    
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: COLORS.lightWhite }}
        >
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite
                    },
                    headerShadowVisible: false,
                    title: "aamarPay",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.menu}
                            dimension="60%"
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={images.aamarpay}
                            dimension="100%"
                        />
                    )
                }} />
            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}>
                        <Form/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;