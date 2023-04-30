import { useNavigation,useRoute } from "@react-navigation/native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLayoutEffect } from "react"
import { StyleSheet, Text, View } from "react-native"

const FormularDetailScreen=()=>{
    const navigation=useNavigation()
    const route=useRoute()

    const { formular }=route.params

useLayoutEffect(()=>{
navigation.setOptions({
    title:formular
})
},[])
    
return (
    <View style={styles.container}>
        <View style={styles.iconText}> 
        <View style={styles.icons}>
                <Ionicons name="arrow-forward" size={15} color="white" />
                </View>
                <Text>Formulas</Text>
        </View>
        <View style={styles.equation}>
            <Text>ax+b</Text>
        </View>
          
    </View>
    
)
}
const styles= StyleSheet.create({
    container:{
        padding:20
    },
    iconText:{
        flexDirection:'row',
        alignItems:'center',
        gap:15
        
    },
icons:{
    backgroundColor:'#070A52',
    borderRadius:20,
    padding:4
},
equation:{
    backgroundColor:'white',
    padding:20,
    flexDirection:'row',
    marginTop:20,
    justifyContent:'center'
}
})
export default FormularDetailScreen