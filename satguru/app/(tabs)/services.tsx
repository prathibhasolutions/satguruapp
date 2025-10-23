import { ScrollView, View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const services = [
    { name: 'Electrical', url: 'https://www.satguruservices.com/electrical.html' },
    { name: 'Carpenter', url: 'https://www.satguruservices.com/carpenter.html' },
    { name: 'Plumber', url: 'https://www.satguruservices.com/plumber.html' },
    { name: 'Painting', url: 'https://www.satguruservices.com/painting.html' },
    { name: 'Geyser', url: 'https://www.satguruservices.com/geyser.html' },
    { name: 'Washing Machine', url: 'https://www.satguruservices.com/washing-machine.html' },
    { name: 'Refrigerator', url: 'https://www.satguruservices.com/Refrigerator.html' },
    { name: 'TV Repair', url: 'https://www.satguruservices.com/tv.html' },
    { name: 'Tiles Work', url: 'https://www.satguruservices.com/tiles.html' },
    { name: 'AC Services', url: 'https://www.satguruservices.com/ac.html' },
    { name: 'Interior Designing', url: 'https://www.satguruservices.com/interior.html' },
    { name: 'Home Construction', url: 'https://www.satguruservices.com/construction.html' },
];

export default function ServicesScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Our Services</Text>
            <View style={styles.cardsContainer}>
                {services.map((service) => (
                    <TouchableOpacity key={service.name} style={styles.card} onPress={() => Linking.openURL(service.url)}>
                        <View style={styles.cardIconWrap}>
                            <MaterialIcons name={getServiceIcon(service.name)} size={32} color="#007bff" />
                        </View>
                        <Text style={styles.cardText}>{service.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

function getServiceIcon(name: string) {
    switch (name) {
        case 'Electrical': return 'electrical-services';
        case 'Carpenter': return 'handyman';
        case 'Plumber': return 'plumbing';
        case 'Painting': return 'format-paint';
        case 'Geyser': return 'water';
        case 'Washing Machine': return 'local-laundry-service';
        case 'Refrigerator': return 'kitchen';
        case 'TV Repair': return 'tv';
        case 'Tiles Work': return 'grid-on';
        case 'AC Services': return 'ac-unit';
        case 'Interior Designing': return 'weekend';
        case 'Home Construction': return 'home-repair-service';
        default: return 'build';
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 64,
        paddingHorizontal: 16,
        backgroundColor: '#f9f9f9',
        minHeight: '100%',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#222',
        textAlign: 'center',
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 0,
    },
    card: {
        width: '48%',
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 16,
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardIconWrap: {
        marginBottom: 10,
    },
    cardText: {
        fontSize: 16,
        color: '#007bff',
        fontWeight: '600',
        textAlign: 'center',
    },
});
