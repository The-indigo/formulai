import { StyleSheet, View ,Text,  Dimensions,
    ScrollView,
    Pressable,
    useWindowDimensions} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from "react-native-gesture-handler"
import { useState } from "react";


const Element=({n,onPress})=>{

const {width,height}= useWindowDimensions()
const isPortrait = height > width;
    const box= isPortrait?width*0.11 : width*0.055
    return (
   <TouchableOpacity onPress={onPress} 

//    style={({pressed})=>pressed&&}
        >
        <View  style={[
            {
                height:box,
                width:box
            },
        
            styles.elementView,
            styles[n.category]
            ]}>

            <LinearGradient
 colors={[styles[n.category]['backgroundColor'][1],styles[n.category]['backgroundColor'][2]]}
 start={styles[n.category]['backgroundColor'][1]==='90deg'? { x: 0, y: 0 }:{ x: 0.1, y: 0.5 }}
 end={styles[n.category]['backgroundColor'][1]==='90deg'? { x: 1, y: 0 }:{ x: 0.9, y: 0.5 }}
 style={{ flex: 1 ,  
}}
             >            
        <Text style={styles.number}>{n.number}</Text>
        <Text style={styles.symbol}>{n.symbol}</Text>
        <Text style={styles.name}>{n.name}</Text>
        </LinearGradient>

    </View>
    </TouchableOpacity>


    )
}
const styles=StyleSheet.create({
    
    elementView:{
        margin:0,
        padding:0
    },
    number:{
        fontSize:8,
        marginTop:2,
        marginLeft:2
    },
    name:{
        fontSize:8,
                textAlign:'center'

    },
    symbol:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:18
    },
    nobleGas: {
        // backgroundColor: '#f3d2e8',
        backgroundColor: ['60deg', '#f3d2e8', '#e40c9c']
      },
      
      /* Alkali Metal  */
      alkaliMetal: {
        // backgroundColor: '#f88379',
        backgroundColor: ['60deg', '#e9b2ad', '#f11b07']
      },
      
      /* Alkaline Earth Metal  */
      alkalineEarthMetal: {
        // backgroundColor: '#ffc3a0',
        backgroundColor: ['60deg', '#ffc3a0', '#eb5d0b']
      },
      
      /* Transition Metal  */
      transitionMetal: {
        // backgroundColor: '#e9ff08',
        backgroundColor: ['60deg', '#e9ff08', '#e2b00a']
      },
      
      /* Polyatomic Non Metal  */
      polyatomicNonMetal: {
        // backgroundColor: '#a3d2d5',
        backgroundColor: ['60deg', '#a3d2d5', '#148088']
      },
      
      /* Diatomic Non Metal  */
      diatomicNonMetal: {
        // backgroundColor: '#a3d5bf',
        backgroundColor: ['60deg', '#a3d5bf', '#39a576']
      },
      
      /* Post Transition Metal  */
    postTransitionMetal:{
        // backgroundColor: '#8eb1e7',
        backgroundColor: ['60deg', '#8eb1e7', '#0960e4']
      },
      
      /* Metalloid  */
      metalloid :{
        // backgroundColor: '#5ed89c',
        backgroundColor: ['90deg', '#5ed89c', '#15864e']
      },
      
      /* Lanthanide  */
      lanthanide: {
        // backgroundColor: '#c9f',
        backgroundColor: ['90deg', '#c9f', 'rgb(108, 13, 202)'],
        /* Put a space to seperate the split table  */
        marginTop: 2.5
      },
      
      /* Actinide  */
      actinide: {
        // backgroundColor: '#ad87bd',
        backgroundColor: ['90deg', '#ad87bd', '#ad1deb']
      },
      
      /* The Unknown Element  */
      unknown:{
        backgroundColor: '#cff',
        backgroundColor: ['90deg', '#cff', 'rgb(13, 173, 173)']
      }
      
      /* Disable the top space for the first lathenide which sits inside the table  */
    //   .element-57 {
    //     margin: 0;
    //   }

})
export default Element