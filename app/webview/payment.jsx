import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { useSearchParams } from 'expo-router';

export default function App() {
    const params = useSearchParams();
    return (
        <WebView
            style={styles.container}
            source={{ uri: params.url}}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:200
    },
});