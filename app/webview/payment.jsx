import { WebView } from 'react-native-webview';
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { COLORS, icons, images } from '../../constants';
import ScreenHeaderBtn from '../../components/header/ScreenHeaderBtn';

export default function App() {
    const params = useSearchParams();
    const router = useRouter();
    // console.log(params)
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
                            handlePress={()=>router.back()}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={images.aamarpay}
                            dimension="100%"
                        />
                    )
                }} />
        <WebView
            style={styles.container}
            source={{ uri: params.url}}
            // javaScriptEnabled={true}
            // onError={(v)=>v}
            renderLoading={() => (
                <View style={{flex:1}}>
                    <ActivityIndicator size="large" color="lightskyblue"/>
                </View>
            )}
        />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:200
    },
});