import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
//import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";



export default function Details() {

    const params = useLocalSearchParams();
    console.log(params);

    useEffect(() => {}, []);

    async function fetchPokemonByName(name: string) {
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            );
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <ScrollView
        contentContainerStyle = {{ 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: 20,
            gap: 20,
        }}
        ></ScrollView>
    );
}


const styles = StyleSheet.create({})