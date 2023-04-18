import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const SignInBasic = ({navigation}) => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [validEmail, setValidEmail] = useState("");
    const [isOpenPass, setOpenPass] = useState(true);
    const [isHandlerSign, setHandlerSign] = useState(false);


    const handlerValidMail = (value)=>{
        if(value){ //if value is not null
            let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          if(!regEmail.test(value)){
            setValidEmail("Invalid Email Address");
          }else {
            setValidEmail("");
        }
    } else {
        setValidEmail("This field is required");
    }
}

const handleSignIn = () => {
    if (email === "212310010@student.ibik.ac.id" && password === "12345678") {

      setHandlerSign(true);
    } else {
      alert("Sign-in failed. Please check your email and password.");
    }
  };
  if (isHandlerSign) {
    return (
      navigation.navigate('Home')
    );
  }

    const handlerOpenPassword = () =>{
        switch (!isOpenPass) {
            case true:
                setOpenPass(true);
                break;
        
            default:
                setOpenPass(false);
                break;
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.frm_row}>
                <Text style={styles.text_label}>Email </Text>
                <TextInput
                    placeholder="npm@student.ibik.ac.id"
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCapitalize='none'
                    style={styles.text_input}
                    defaultValue={email}
                    onChangeText={(Text)=> setEmail(Text)}/>
                    <Text style={{color:"red"}}>{validEmail}</Text>
            </View>
            <View style={styles.frm_row}>
                <Text style={styles.text_label}>Password</Text>
                <View style={{...styles.text_input,
                flexDirection: "row",
            justifyContent:"space-between",}}>
                <TextInput
                    secureTextEntry={isOpenPass}
                    placeholder='Enter your Password'
                    autoCorrect={false}
                    style={{...styles.text_input, borderWidth:0, padding:0, width:"90%"}}
                    defaultValue={password}
                    onChange={(Text)=>setPassword(Text)}/>
                    <Pressable onPress={()=>handlerOpenPassword()}>
                        <FontAwesome5 name={(isOpenPass) ? "eye":"eye-slash"} size={25} color="purple"/>
                    </Pressable>
                </View>
            </View>
            <TouchableOpacity style={styles.btn_signin} onPress={()=> handleSignIn()}>
                <Text style={styles.btn_signin_text}>
                    Sign In
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        padding:20, backgroundColor:"white"
    },
    frm_row:{ marginBottom: 15},
    text_label:{
        fontWeight:"bold",
        marginBottom:10,
        fontSize:16,
    },
    text_input:{
        borderWidth: 1,
        borderColor:"grey",
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        color: "purple",
    },
    btn_signin:{
        backgroundColor: "purple",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 15
    },
    btn_signin_text:{color: "white", textAlign:"center", fontSize:16}
})

export default SignInBasic;
