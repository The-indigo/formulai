import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { elements } from "../data";
import { LinearGradient } from "expo-linear-gradient";
import Element from "../components/Element";
import { useState } from "react";

// 1
const elem90To103 = elements.slice(90, 104);
// 2
const elem58To71 = elements.slice(58, 72);

const elem87To89 = elements.slice(87, 90);
const elem104To118 = elements.slice(104, 119);
// 3
const elem87To118 = elem87To89.concat(elem104To118);

const elem55To57 = elements.slice(55, 58);
const elem72To86 = elements.slice(72, 87);
// 4
const elem55To86 = [...elem55To57, ...elem72To86];

// 5
const elem37To54 = elements.slice(37, 55);

//6
const elem19To36 = elements.slice(19, 37);

// 7
const elem11To12 = elements.slice(11, 13);
// 8
const elem13To18 = elements.slice(13, 19);
// 9
const elem3To4 = elements.slice(3, 5);
// 10
const elem5To10 = elements.slice(5, 11);
// 11
const elem1 = elements.slice(1, 2);

const elem2 = elements.slice(2, 3);



const PeriodicTableScreen = () => {
    const {width,height}= useWindowDimensions()
    const isPortrait = height > width;

  const [pickedElement, setPickedElement] = useState({});

  const pickHandler = (id) => {
    const item = elements.find((n) => n.number === id);
    setPickedElement(item);
  };
  const handleClose=()=>{
    setPickedElement({})
  }
  return (
    <View style={[styles.root,
    {
        marginHorizontal: isPortrait?15:33,
    }
    
    ]}>
      <ScrollView
        horizontal={true}
        style={{
          marginTop: 60,
        }}
      >
        <ScrollView>
          <View>
            <View
              style={[
                styles.row,
                {
                  justifyContent: "space-between",
                },
              ]}
            >
              {elem1.map((n) => {
                return (
                  <Element
                    key={n.number}
                    n={n}
                    onPress={() => pickHandler(n.number)}
                  />
                );
              })}
              {elem2.map((n) => {
                return (
                  <Element
                    key={n.number}
                    n={n}
                    onPress={() => pickHandler(n.number)}
                  />
                );
              })}
            </View>
          </View>

          <View>
            <View style={styles.row}>
              <View style={{}}>
                <View style={styles.row}>
                  {elem3To4.map((n) => {
                    return (
                      <Element
                        key={n.number}
                        n={n}
                        onPress={() => pickHandler(n.number)}
                      />
                    );
                  })}
                </View>

                <View style={styles.row}>
                  {elem11To12.map((n) => {
                    return <Element
                        key={n.number}
                        n={n}
                        onPress={() => pickHandler(n.number)}
                      />;
                  })}
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                //   borderWidth: 2,
                  flex: 1,
                }}
              >
                {Object.keys(pickedElement).length !== 0 && (
                  <View
                    style={[
                      {
                        width: "20%",
                        maxWidth: "20%",
                        marginRight: 5,
                      },
                      styles[pickedElement.category],
                    ]}
                  >
                    <LinearGradient
                      colors={[
                        styles[pickedElement.category]["backgroundColor"][1],
                        styles[pickedElement.category]["backgroundColor"][2],
                      ]}
                      start={
                        styles[pickedElement.category]["backgroundColor"][1] ===
                        "90deg"
                          ? { x: 0, y: 0 }
                          : { x: 0.1, y: 0.5 }
                      }
                      end={
                        styles[pickedElement.category]["backgroundColor"][1] ===
                        "90deg"
                          ? { x: 1, y: 0 }
                          : { x: 0.9, y: 0.5 }
                      }
                      style={{ flex: 1 }}
                    >
                      <Text style={styles.number}>{pickedElement.number}</Text>
                      <Text style={styles.symbol}>{pickedElement.symbol}</Text>
                      <Text style={styles.name}>{pickedElement.name}</Text>
                    </LinearGradient>
                  </View>
                )}

                <ScrollView>
                {Object.keys(pickedElement).length !== 0 && (

                    <View style={[styles.row,
                    {
                        justifyContent:'space-between',
                        marginRight:5
                    }
                    ]}>
                    <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    {pickedElement.name}
                  </Text>

                  <Pressable onPress={handleClose}>
                    <Text>Close</Text>
                  </Pressable>
                    </View>
                     )}
               
                  {Object.keys(pickedElement).length !== 0 && (
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    Appearance:{pickedElement.appearance}{" "}  
                  </Text>
                  )}

{Object.keys(pickedElement).length !== 0 && (
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text style={styles.goldText}>
                      Atomic Mass: {pickedElement.atomic_mass} |{" "}
                    </Text>
                    <Text style={styles.goldText}>
                      Density:{pickedElement.density}
                    </Text>
                    <Text style={styles.goldText}>
                      Molar Heat: {pickedElement.molar_heat} |
                    </Text>
                    <Text style={styles.goldText}>
                      Melt: {pickedElement.melt}
                    </Text>
                    <Text style={styles.goldText}>
                      {/* | Boil: {pickedElement.boil}  */}
                    </Text>
                  </View>
 )}
                  <Text>{/* {pickedElement.summary} */}</Text>
                </ScrollView>
              </View>

              <View>
                <View style={styles.row}>
                  {elem5To10.map((n) => {
                    return <Element
                        key={n.number}
                        n={n}
                        onPress={() => pickHandler(n.number)}
                      />;
                  })}
                </View>

                <View style={styles.row}>
                  {elem13To18.map((n) => {
                    return <Element
                        key={n.number}
                        n={n}
                        onPress={() => pickHandler(n.number)}
                      />;
                  })}
                </View>
              </View>
            </View>
          </View>

          <View>
            {elem19To36.map((n) => {
              return <Element
                        key={n.number}
                        n={n}
                        onPress={() => pickHandler(n.number)}
                      />;
            })}
          </View>

          <View style={styles.row}>
            {elem37To54.map((n) => {
              return <Element
                        key={n.number}
                        n={n}
                        onPress={() => pickHandler(n.number)}
                      />;
            })}
          </View>

         
          <View style={[styles.row,{
            margin:0
          }]}>
            {elem55To86.map((n) => {
              return <Element
                        key={n.number}
                        n={n}
                        onPress={() => pickHandler(n.number)}
                      />;
            })}
          </View>

          <View style={[styles.row,{
            margin:0
          }]}>
            {elem87To118.map((n) => {
              return <Element
                        key={n.number}
                        n={n}
                        onPress={() => pickHandler(n.number)}
                      />;
            })}
          </View>

          <View style={styles.view1}>
            <View style={styles.row}>
              {elem58To71.map((n) => {
                return <Element
                        key={n.number}
                        n={n}
                        onPress={() => pickHandler(n.number)}
                      />;
              })}
            </View>

            <View style={styles.row}>
              {elem90To103.map((n) => {
                return <Element
                        key={n.number}
                        n={n}
                        onPress={() => pickHandler(n.number)}
                      />;
              })}
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
   
    justifyContent: "flex-end",
  },

  row: {
    flexDirection: "row",
  },
  number:{
    fontSize:8,
    marginTop:2,
    marginLeft:2
},
  name: {
    fontSize: 15,
    textAlign: "center",
  },
  symbol: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 30,
  },

  view1: {
    marginTop: 25,
    alignSelf: "center",
  },
  goldText: {
    color: "#998100",
    fontSize: 14,
  },
  nobleGas: {
    // backgroundColor: '#f3d2e8',
    backgroundColor: ["60deg", "#f3d2e8", "#e40c9c"],
  },

  /* Alkali Metal  */
  alkaliMetal: {
    // backgroundColor: '#f88379',
    backgroundColor: ["60deg", "#e9b2ad", "#f11b07"],
  },

  /* Alkaline Earth Metal  */
  alkalineEarthMetal: {
    // backgroundColor: '#ffc3a0',
    backgroundColor: ["60deg", "#ffc3a0", "#eb5d0b"],
  },

  /* Transition Metal  */
  transitionMetal: {
    // backgroundColor: '#e9ff08',
    backgroundColor: ["60deg", "#e9ff08", "#e2b00a"],
  },

  /* Polyatomic Non Metal  */
  polyatomicNonMetal: {
    // backgroundColor: '#a3d2d5',
    backgroundColor: ["60deg", "#a3d2d5", "#148088"],
  },

  /* Diatomic Non Metal  */
  diatomicNonMetal: {
    // backgroundColor: '#a3d5bf',
    backgroundColor: ["60deg", "#a3d5bf", "#39a576"],
  },

  /* Post Transition Metal  */
  postTransitionMetal: {
    // backgroundColor: '#8eb1e7',
    backgroundColor: ["60deg", "#8eb1e7", "#0960e4"],
  },

  /* Metalloid  */
  metalloid: {
    // backgroundColor: '#5ed89c',
    backgroundColor: ["90deg", "#5ed89c", "#15864e"],
  },

  /* Lanthanide  */
  lanthanide: {
    // backgroundColor: '#c9f',
    backgroundColor: ["90deg", "#c9f", "rgb(108, 13, 202)"],
    /* Put a space to seperate the split table  */
    marginTop: 2.5,
  },

  /* Actinide  */
  actinide: {
    // backgroundColor: '#ad87bd',
    backgroundColor: ["90deg", "#ad87bd", "#ad1deb"],
  },

  /* The Unknown Element  */
  unknown: {
    backgroundColor: "#cff",
    backgroundColor: ["90deg", "#cff", "rgb(13, 173, 173)"],
  },
});
export default PeriodicTableScreen;
