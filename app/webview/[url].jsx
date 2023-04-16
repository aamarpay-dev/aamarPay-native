import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useSearchParams } from 'expo-router';

export default function App() {
    const params = useSearchParams();
    console.log(params);
    return (
        <WebView
            style={styles.container}
            source={{ uri: 'https://expo.dev' }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
});