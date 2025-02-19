import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>탐색</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Pressable onPress={() => { router.push('/(tabs)/(explore)/two')}}>
                <Text>바로가기</Text>
            </Pressable>
            <EditScreenInfo path="app/(tabs)/(explore)/index.tsx" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
