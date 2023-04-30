import { Pressable, StyleSheet, Text } from "react-native"

const CalculatorKey=({isNumber, onPress,text})=>{
return (
    <Pressable onPress={onPress}>
    <Text style={isNumber? styles.isNumber:styles.isOperator}>{text}</Text>
    </Pressable>
)
}
const styles=StyleSheet.create({
    isNumber:{
        color:'#070A52',
        fontSize:20,
        fontWeight:'bold'
    },
    isOperator:{
        color:'grey',
        fontSize:20
    }
})
export default CalculatorKey;