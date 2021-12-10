import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {ListItem} from './components/list-item/ListItem';
import moment from "moment";

export default function App() {

    //read about react native's hooks. This is used to initialize and change the state of the current component.
    // When you use the state in the render function, the screen will be rendered again at every change. To update the state,
    // you must use the setter
    const [weatherList, setWeatherList] = useState([]);
    const [count, setCount] = useState(1);

    let getWeather = () => {
        let rand = Math.floor(Math.random() * 3)%2;
        let weatherStatus = "CLOUDY";
        if (rand === 1) {
            weatherStatus = "SUNNY";
        }
        setWeatherList([{id: 1, city: "Cluj-Napoca", date: moment().add(count, 'days'), status: "CLOUDY"},
            {id: 2, city: "Zalau", date: moment().add(count, 'days'), status: weatherStatus},
            {id: 3, city: "Bucuresti", date: moment().add(count, 'days'), status: weatherStatus},
            {id: 4, city: "Constanta", date: moment().add(count, 'days'), status: weatherStatus},
            {id: 5, city: "Suceava", date: moment().add(count, 'days'), status: weatherStatus},
            {id: 6, city: "Timisoara", date: moment().add(count, 'days'), status: weatherStatus},
            {id: 7, city: "Brasov", date: moment().add(count, 'days'), status: weatherStatus}]);
        setCount(count+1);
    };

    //city, date and status are sent to ListItem as props. take a look in component/list-item/ListItem.js to see how to handle them
    let renderItem = ({item}) => {
        return <ListItem city={item.city} date={item.date} status={item.status}/>
    };

    //here is what is rendered
    //Read about flat lists here: https://reactnative.dev/docs/flatlist
return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <Text style={styles.title}>Welcome to React Native's weather forecast</Text>
                <FlatList data={weatherList}
                          renderItem={renderItem}
                          keyExtractor={item => item.id}>
                </FlatList>
            </View>
            <View style={styles.lower}>
                <TouchableOpacity style={styles.button} onPress={() => getWeather()}>
                    <Text>Show tomorrow's weather</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

//this is the styling.we will move this in another file later
//you should read about flex - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        padding: 20,
    },
    upper: {
        flex: 4,
        justifyContent: 'center',
    },
    lower: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    button: {
        padding: 10,
        margin: 10,
        backgroundColor: '#dfac23',
        borderRadius: 10,
    }
});
