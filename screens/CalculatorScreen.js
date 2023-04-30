import { Pressable, StyleSheet, Text,View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import CalculatorKey from "../components/CalculatorKey"
import { useState } from "react";

const CalculatorScreen=()=>{
    const [currentValue,setcurrentValue]=useState('0')
    const [previousValue,setpreviousValue]=useState()
    const [symbol,setSymbol]=useState()
    const [result,setResult]=useState(0)
    

const handleNumberPress=(value)=>{

}


const handleCalculate=()=>{
 
}
    return (
        
        <View style={styles.container}>
            <View style={styles.calculatorTextView}>
                <Text style={styles.calculatorText}>{currentValue}{symbol}{previousValue}</Text>
                <Text style={styles.calculatorText}>{result}</Text>
            </View>
            <View style={styles.allKeysView}>
                <View style={styles.keyRow}>
                   <CalculatorKey  text={'sin'}/>
                   <CalculatorKey  text={'cos'}/>
                   <CalculatorKey  text={'tan'}/>
                   <CalculatorKey  text={'x^n'}/>
                   <CalculatorKey  text={'1/x'}/>
                </View>

                <View style={styles.keyRow}>
                   <CalculatorKey  text={'sin-1'}/>
                   <CalculatorKey  text={'cos-1'}/>
                   <CalculatorKey  text={'tan-1'}/>
                   <CalculatorKey  text={'ln'}/>
                   <CalculatorKey  text={'log'}/>
                   <CalculatorKey  text={'x!'}/>
                </View>


                <View style={styles.keyRow}>
                   <CalculatorKey  text={'C'}/>
                   <CalculatorKey  text={'('}/>
                   <CalculatorKey  text={')'}/>
                   <CalculatorKey  text={'^'}/>
                   <CalculatorKey  text={'%'}/>
                </View>

                <View style={styles.keyRow}>
                   <CalculatorKey onPress={()=>handleNumberPress(7)} isNumber text={'7'}/>
                   <CalculatorKey onPress={()=>handleNumberPress(8)} isNumber text={'8'}/>
                   <CalculatorKey onPress={()=>handleNumberPress(9)} isNumber text={'9'}/>
                   <CalculatorKey   text={'/'}/>
                   <CalculatorKey   text={'e'}/>
                </View>

                <View style={styles.keyRow}>
                   <CalculatorKey onPress={()=>handleNumberPress(4)} isNumber text={'4'}/>
                   <CalculatorKey onPress={()=>handleNumberPress(5)} isNumber text={'5'}/>
                   <CalculatorKey onPress={()=>handleNumberPress(6)} isNumber text={'6'}/>
                   <CalculatorKey  text={'*'}/>
                   <CalculatorKey  text={'pie'}/>
                </View>

                <View style={styles.keyRow}>
                <CalculatorKey onPress={()=>handleNumberPress(0)} isNumber text={'0'}/>
                   <CalculatorKey onPress={()=>handleNumberPress(1)} isNumber text={'1'}/>
                   <CalculatorKey onPress={()=>handleNumberPress(2)} isNumber text={'2'}/>
                   <CalculatorKey onPress={()=>handleNumberPress(3)} isNumber text={'3'}/>
                   <CalculatorKey  text={'-'}/>
                   <CalculatorKey onPress={()=>handleNumberPress('+')}  text={'+'}/>
                </View>
                <Pressable onPress={handleCalculate}>

<View style={styles.equalSignView}>
    <View style={styles.equalSignTextView}>
    <Text style={styles.equalSign}>=</Text>
    </View>


</View>
                </Pressable>

            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    calculatorTextView:{
        paddingRight:15,
        flex:1,
        justifyContent:"center",
        alignItems:'flex-end'      
    },
    calculatorText:{
        color:'white',
        marginTop:25
    },
    allKeysView:{
        backgroundColor:'white',
        justifyContent:'space-between',
        borderRadius:20,
        marginTop:50,
        padding:25,
        flex:4

    },
keyRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    // marginTop:25,

},
equalSignView:{
    padding:10,
    flexDirection:'row',
    justifyContent:'center',
   
},
equalSignTextView:{
    padding:10, 
    borderRadius:40,
    backgroundColor:'#070A52'
},
equalSign:{
color:'white',
fontSize:25
}
})
export default CalculatorScreen