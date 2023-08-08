import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import InputField from '../../Components/InputField';
import Color from '../../Constant/Color';
import Lable from '../../Components/Lable';

export default function Loging() {
  return (
    <ScrollView
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: Color.WHITE,
      }}>
      <View
        style={{
          height: 100,
          width: '100%',
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginLeft: '10%',
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: Color.DEEPPINK,
          }}>
          Create an account
        </Text>
        <Text
          style={{
            color: Color.BLACK,
            fontWeight: '500',
          }}>
          Let's create your account
        </Text>
      </View>
      <Lable lable="Full name" />
      <InputField placeholder="Enter your full name" />
      <Lable lable="Email" />
      <InputField placeholder="Enter your email address" />
      <Lable lable="Password" />
      <View
        style={{
          height: 50,
          width: '80%',
          backgroundColor: Color.GEAY,
          borderRadius: 5,
          marginBottom: 25,
          marginHorizontal: '10%',
          flexDirection: 'row',
        }}>
        <TextInput
          style={{
            color: Color.BLACK,
            fontSize: 15,
            paddingLeft: 20,
          }}
          placeholder="Enter your email password"
          //value={value}
          //onChangeText={onChangeText}
          //keyboardType={keyboardType}
          //secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
            bottom: 15,
          }}>
          <Image
            style={{
              height: 20,
              width: 20,
            }}
            source={require('../../Image/view.png')}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: Color.DEEPPINK,
          borderRadius: 5,
          marginBottom: 25,
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%',
          marginHorizontal: '10%',
        }}>
        <Text
          style={{
            color: Color.WHITE,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <View
        style={{
          height: 40,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
          }}>
          Or
        </Text>
      </View>

      <TouchableOpacity
        style={{
          height: 50,
          width: '80%',
          marginHorizontal: '10%',
          backgroundColor: Color.WHITE,
          borderRadius: 5,
          marginBottom: 25,
          borderWidth: 1,
          borderColor: Color.BLACK,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 5,
        }}>
        <Image
          style={{
            height: 20,
            width: 20,
          }}
          source={require('../../Image/google.png')}
        />
        <Text
          style={{
            color: Color.BLACK,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Sing Up with Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: '80%',
          marginHorizontal: '10%',
          backgroundColor: Color.BLUE,
          borderRadius: 5,
          marginBottom: 25,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 5,
        }}>
        <Image
          style={{
            height: 20,
            width: 20,
          }}
          source={require('../../Image/facebook.png')}
        />
        <Text
          style={{
            color: Color.WHITE,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Sing Up with Google
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
