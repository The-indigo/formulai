import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import FormularItem from '../components/FormularItem';
import { useNavigation } from '@react-navigation/native';

let data=['First degree equation','Second degree equation','Slope of the line','Distance between two points','Pythagorean Theorem' ]

const FormularsScreen=()=>{
    const navigation=useNavigation()
    const handlePress=(value)=>{
        navigation.navigate('formulardetail',{
            formular:value
        })
        }
return (
    <View style={styles.container}>
       <ScrollView>
        {data.map(n=><FormularItem key={n} onPress={()=>handlePress(n)} formular={n}/>)}
       </ScrollView>
        
    </View>
)
}

const styles=StyleSheet.create({
    container:{
        flex:1,
       padding:10
    },
})
export default FormularsScreen