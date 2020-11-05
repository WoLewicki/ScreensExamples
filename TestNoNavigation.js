import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
export default function App() {
  const [one, setOne] = React.useState(true);

  if (one) {
    return (
      <SafeAreaView>
        <ScrollView>
          <TextInput
            style={{fontSize: 20}}
            autoCompleteType={'username'}
            importantForAutofill={'yes'}
            placeholder={'Username'}
          />
          <TextInput
            style={{fontSize: 20}}
            autoCompleteType={'password'}
            importantForAutofill={'yes'}
            placeholder={'Password'}
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={() => setOne(!one)}
            style={{
              height: 60,
              backgroundColor: 'red',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
          <ScrollView>
            <TextInput
              style={{fontSize: 20}}
              autoCompleteType={'username'}
              importantForAutofill={'yes'}
              placeholder={'Username'}
            />
            <TextInput
              style={{fontSize: 20}}
              autoCompleteType={'password'}
              importantForAutofill={'yes'}
              placeholder={'Password'}
              secureTextEntry={true}
            />
            <TextInput
              style={{fontSize: 20}}
              autoCompleteType={'password'}
              importantForAutofill={'yes'}
              placeholder={'Password'}
              secureTextEntry={true}
            />
            <TextInput
              style={{fontSize: 20}}
              autoCompleteType={'password'}
              importantForAutofill={'yes'}
              placeholder={'Password'}
              secureTextEntry={true}
            />
            <TextInput
              style={{fontSize: 20}}
              autoCompleteType={'password'}
              importantForAutofill={'yes'}
              placeholder={'Password'}
              secureTextEntry={true}
            />
            <TextInput
              style={{fontSize: 20}}
              autoCompleteType={'password'}
              importantForAutofill={'yes'}
              placeholder={'Password'}
              secureTextEntry={true}
            />
            <TextInput
              style={{fontSize: 20}}
              autoCompleteType={'password'}
              importantForAutofill={'yes'}
              placeholder={'Password'}
              secureTextEntry={true}
            />
            <TextInput
              style={{fontSize: 20}}
              autoCompleteType={'password'}
              importantForAutofill={'yes'}
              placeholder={'Password'}
              secureTextEntry={true}
            />
            <TextInput
              style={{fontSize: 20}}
              autoCompleteType={'password'}
              importantForAutofill={'yes'}
              placeholder={'Password'}
              secureTextEntry={true}
            />
            <TextInput
              style={{fontSize: 20}}
              autoCompleteType={'password'}
              importantForAutofill={'yes'}
              placeholder={'Password'}
              secureTextEntry={true}
            />
            <TextInput
              style={{fontSize: 20}}
              autoCompleteType={'password'}
              importantForAutofill={'yes'}
              placeholder={'Password'}
              secureTextEntry={true}
            />
            <TextInput
              style={{fontSize: 20}}
              autoCompleteType={'password'}
              importantForAutofill={'yes'}
              placeholder={'Password'}
              secureTextEntry={true}
            />
            <TextInput
              style={{fontSize: 20}}
              autoCompleteType={'password'}
              importantForAutofill={'yes'}
              placeholder={'Password'}
              secureTextEntry={true}
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <View>
        <TouchableOpacity
          onPress={() => setOne(!one)}
          style={{
            height: 60,
            backgroundColor: 'red',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  verticalContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'pink',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  flexOne: {
    flex: 1,
  },
  buttonExtras: {
    backgroundColor: '#3A8EED',
    borderRadius: 20,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
