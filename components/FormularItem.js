import { Pressable, StyleSheet, View,Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
const FormularItem=({onPress,formular})=>{
    return (
        <View style={styles.formularView}>
            <Pressable onPress={onPress}>
                <View style={styles.formularContent}>
                    <View style={styles.iconTextView}>
                    <Ionicons name="list" size={15} color="grey" />
                    <Text style={{marginLeft:15}}>{formular}</Text>
                    </View>
             
                <View style={styles.arrowView}>
                <Ionicons name="arrow-forward" size={15} color="white" />
                </View>

                </View>
            </Pressable>
        </View>
    )
}
const styles=StyleSheet.create({
    formularView:{
        backgroundColor:'white',
        marginTop:7,
        padding:20,
        borderRadius:8,
    },
    iconTextView:{
        flexDirection:'row',
      
    },
    formularContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
    arrowView:{
        backgroundColor:'#F6BA6F',
        justifyContent:'center',
        alignItems:'center',
        height:30,
        width:40,
        borderRadius:10
    }
})
export default FormularItem