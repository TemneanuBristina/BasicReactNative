import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import moment from "moment";

//you can also define Components like this. you can read about class components vs functions in react/react native:
// https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/#:~:text=A%20functional%20component%20is%20just,method%20used%20in%20functional%20components
export class ListItem extends Component {

    constructor(props) {
        super(props);
    }

    //read about https://momentjs.com/
    //here you can see the props sent from App.js. when they are update in the parent component, this component is rendered again
    render () {
        //take a look where you run "react-native start"
        console.log(this.props.status);
        return (
            <View style={styles.container}>
                <Text>{this.props.city}</Text>
                <Text>{moment(this.props.date).format("MMM Do YY")}</Text>
                {this.props.status === "CLOUDY" &&
                <Image
                    style={styles.weatherImage}
                    source={require('./../../assets/images/cloudy.png')}
                />}
                {this.props.status === "SUNNY" &&
                <Image
                    style={styles.weatherImage}
                    source={require('./../../assets/images/sunny.png')}
                />}
            </View>
        )
    }
}