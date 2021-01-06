import React, {useState} from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import {Subheading} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import {Button, Card} from 'react-native-paper'
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'galio-framework';
import { AuthContext } from '../navigation/AuthProvider.js';
import { useContext } from 'react';


const SignUpViewController = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const [handle, setHandle] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const {register} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../images/background_img.jpg')} style={styles.image}>
                <Text h3 style={styles.text}>Glad you're joining us!</Text>
                
                <Card style={styles.card}>
                    <Card.Content>
                        <Text h3 style={{fontWeight: "bold", color: "#F76F6D", textAlign: "center", marginBottom: "5%", marginTop: "5%"}}>Sign Up</Text>
                        <TextInput
                            mode="outlined"
                            name="user"
                            icon="user"
                            placeholder="Email"
                            selectionColor="#000"
                            underlineColor="#F76F6D"
                            onChangeText={(userEmail) => setEmail(userEmail)}
                            style={styles.input}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            theme={{ colors: {primary: '#F76F6D', underlineColor:'#F7A146',}}}
                        />
                        <TextInput 
                            mode="outlined"
                            placeholder="Password"
                            selectionColor="#000"
                            underlineColor="#F76F6D"
                            onChangeText={(userPass) => setPass(userPass)}
                            autoCapitalize="none"
                            secureTextEntry={true}
                            style={styles.input}
                            value={pass}
                            theme={{ colors: {primary: '#F76F6D', underlineColor:'#F7A146',}}}
                        />
                        <TextInput 
                            mode="outlined"
                            placeholder="Enter your first name"
                            selectionColor="#000"
                            underlineColor="#F76F6D"
                            onChangeText={(userFirst) => setFirst(userFirst)}
                            style={styles.input}
                            value={first}
                            theme={{ colors: {primary: '#F76F6D', underlineColor:'#F7A146',}}}
                        />
                        <TextInput 
                            mode="outlined"
                            placeholder="Enter your last name"
                            selectionColor="#000"
                            underlineColor="#F76F6D"
                            onChangeText={(userLast) => setLast(userLast)}
                            style={styles.input}
                            value={last}
                            theme={{ colors: {primary: '#F76F6D', underlineColor:'#F7A146',}}}
                        />
                        <TextInput 
                            mode="outlined"
                            placeholder="Enter a handle"
                            selectionColor="#000"
                            underlineColor="#F76F6D"
                            autoCapitalize="none"
                            onChangeText={(userHandle) => setHandle(userHandle)}
                            style={styles.input}
                            value={handle}
                            theme={{ colors: {primary: '#F76F6D', underlineColor:'#F7A146',}}}
                        />
                    </Card.Content>
                </Card>
                <Button icon="hiking" 
                    mode="contained"
                    onPress={() => register(email, pass, first, last, handle)}
                    style={styles.button}>
                        Register
                </Button>
                
                <TouchableOpacity style={styles.forgotPass} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.navButton}>Have an account? Sign In.</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};


export default SignUpViewController;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        
        backgroundColor: "#16335e"
    },
    card: {
        height: "55%",
        width: "80%",
        borderRadius: 25,
        shadowRadius: 40,
        alignContent: "center",
        marginBottom: "5%",
        marginTop: "13%",
        backgroundColor: "#D7D5ED"
    }, 
    image: {
        flex: 1,
        resizeMode: "cover",
        alignItems: "center",
        width: "100%"
    },
    input: {
        padding: 10,
        width: '100%',
        height: 45,
        borderRadius: 25,
    },
    text: {
        marginTop: "25%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 37,
        color: "white",
    },
    subheading: {
        color: '#f7a146',
        
    },
    button: {
        marginTop: 20,
        height: 37,
        width:"50%",
        backgroundColor: "#F76F6D",
        borderRadius: 15
    },
    forgotPass: {
        marginVertical: 25,
        marginBottom: 100
    },
    navButton: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "white"
    },
});