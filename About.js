import { Button, StyleSheet, Text, View } from 'react-native';

const About = ({navigation}) => {
    return (
        <View>
            <Text>About Screen</Text>
            <Button title='Go Back'
            onPress={()=>navigation.goBack()}/>
            <Button title='Go To Detail'
            onPress={()=>navigation.navigate('Detail')}/>
        </View>
    );
}

export default About;