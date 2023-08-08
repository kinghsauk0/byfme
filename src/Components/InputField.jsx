import {TextInput, View} from 'react-native';
import React from 'react';
import Color from '../Constant/Color';

export default function InputField({
  placeholder,
  onChangeText,
  keyboardType,
  secureTextEntry,
}) {
  return (
    <View
      style={{
        height: 50,
        width: '80%',
        backgroundColor: Color.GEAY,
        borderRadius: 5,
        marginBottom: 25,
        marginHorizontal: '10%',
      }}>
      <TextInput
        style={{
          color: Color.BLACK,
          fontSize: 15,
          paddingLeft: 20,
        }}
        placeholder={placeholder}
        //value={value}
        //onChangeText={onChangeText}
        //keyboardType={keyboardType}
        //secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
