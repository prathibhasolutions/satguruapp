import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function ContactScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact Us</Text>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://wa.me/919908821112')}>
                <Text style={styles.buttonText}>WhatsApp: +91 99088 21112</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.instagram.com/satguruservices/profilecard/?igsh=MXFuZHIwYWZ0ZDh1dg==')}>
                <Text style={styles.buttonText}>Instagram</Text>
            </TouchableOpacity>
            <Text style={styles.info}>Website: www.satguruservices.com</Text>
            <Text style={styles.info}>Email: info@satguruservices.com</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 24,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#333',
    },
    button: {
        backgroundColor: '#25d366',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    info: {
        fontSize: 16,
        color: '#555',
        marginTop: 8,
        textAlign: 'center',
    },
});
