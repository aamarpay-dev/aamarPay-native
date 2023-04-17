import { ActivityIndicator, Text, TextInput, View } from "react-native";
import styles from './form.style';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import axios from "axios";
import { useNavigation } from "expo-router";

const sandboxUrl = 'https://sandbox.aamarpay.com/index.php';
const Form = () => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({ cus_name: "", cus_email: "", cus_phone: "", amount: 0 });
    let uploadAbleData = new FormData();

    const handlePayment = async () => {
        const data = {
            
            store_id: "aamarpaytest",
            tran_id: Math.floor(Math.random()*10000),
            success_url: "example.com",
            fail_url: "example.com",
            cancel_url: "example.com",
            currency: "BDT",
            signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
            desc: "Description",
            cus_add1: "Dhaka",
            cus_add2: "Dhaka",
            cus_city: "Dhaka",
            cus_state: "Dhaka",
            cus_postcode: "0",
            cus_country: "Bangladesh",
            type: "json"
        }
        let newData = { ...data, ...formData };
        for (const x in newData) {
            uploadAbleData.append(x, newData[x]);
        }
        try {
            const response = await axios.post(sandboxUrl, uploadAbleData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const data = await response.data;
            console.log(data)
            navigation.navigate('webview/payment', { url: data.payment_url });
        } catch (error) {
            console.log(error);
        } finally {

        }
    }
    return (
        <>
            <Text style={styles.formTitle}>
                Fill the form
            </Text>
            <TextInput style={styles.inputField} onChange={(e) => setFormData({ ...formData, cus_name: e.nativeEvent.text })} placeholder="name" />
            <TextInput style={styles.inputField} onChange={(e) => setFormData({ ...formData, cus_email: e.nativeEvent.text })} placeholder="email" />
            <TextInput style={styles.inputField} onChange={(e) => setFormData({ ...formData, cus_phone: e.nativeEvent.text })} placeholder="phone" keyboardType="numeric" />
            <TextInput style={styles.inputField} onChange={(e) => setFormData({ ...formData, amount: e.nativeEvent.text })} placeholder="amount" keyboardType="numeric" />
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.payBtn} onPress={handlePayment}>
                    <Text style={styles.payBtnText}>Pay</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Form;