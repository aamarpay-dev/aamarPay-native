import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { COLORS, icons, images } from '../../constants';
import ScreenHeaderBtn from '../../components/header/ScreenHeaderBtn';

export default function App() {
    const params = useSearchParams();
    const router = useRouter();
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
                            iconUrl={icons.chevronLeft}
                            dimension="60%"
                            handlePress={() => router.back()}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={images.aamarpay}
                            dimension="100%"
                        />
                    )
                }} />
            <View>
                <Text>Pyment Successfull</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200
    },
});