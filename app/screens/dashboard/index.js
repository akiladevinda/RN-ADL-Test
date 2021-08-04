import React, { useState } from 'react';
import { connect } from "react-redux";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    BackHandler
  } from 'react-native';
import { colors } from "../../config";
import navigationService from "../../navigation/navigationService";
import { useFocusEffect } from '@react-navigation/native';
import { Images } from "../../config/images";

const Dashboard = (props) => { 
  const {} = props;

  const [theArray, setTheArray] = useState([ 
  {id:1, title: "View Movies", image:Images.DASH_MOVIES},
  {id:2, title: "View Cart", image:Images.DASH_CART},
  {id:3, title: "Log Out", image:Images.DASH_LOGOUT},
  ]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp()
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  
  const menuOnClickListner = (id) => {
    alert(id)
  
  }

  return (
    <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={theArray}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {menuOnClickListner(item.id)}}>
                <View style={styles.cardFooter}></View>
                <Image style={styles.cardImage} source={item.image}/>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
  );
};

export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
      },
      list: {
        paddingHorizontal: 5,
        backgroundColor:"#E6E6E6",
      },
      listContainer:{
        alignItems:'center'
      },
      /******** card **************/
      card:{
        shadowColor: '#00000021',
    
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    
        elevation: 12,
        marginVertical: 10,
        backgroundColor:"white",
        flexBasis: '42%',
        marginHorizontal: 10,
      },
      cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems:"center", 
        justifyContent:"center"
      },
      cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
      },
      cardFooter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
      },
      cardImage:{
        height: 70,
        width: 70,
        alignSelf:'center'
      },
      title:{
        fontSize:18,
        flex:1,
        alignSelf:'center',
        color:"#696969"
      },
});

const mapStateToProps = (state) => {
  return {

  };
};

function mapDispatchToProps(dispatch) {
  return {
  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
