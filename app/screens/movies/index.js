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
  } from 'react-native';
import { colors } from "../../config";
import navigationService from "../../navigation/navigationService";
import { useFocusEffect } from '@react-navigation/native';
import { Images } from "../../config/images";

const Movies = (props) => { 
  const {moviesArray} = props;
  return (
    <View style={styles.container}>
    <FlatList style={styles.list}
      contentContainerStyle={styles.listContainer}
      data={moviesArray}
      horizontal={false}
      numColumns={2}
      keyExtractor= {(item) => {
        return item.id;
      }}
      renderItem={({item}) => {
        return (
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardHeader}>
            </View>
            <Image style={styles.userImage} source={Images.DASH_MOVIES}/>
            <View style={styles.cardFooter}>
              <View style={{alignItems:"center", justifyContent:"center"}}>
                <Text style={styles.name}>{item.name}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.followButtonText}>Add to Cart</Text>  
                </TouchableOpacity>
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
        backgroundColor:'white'
      },
      list: {
        paddingHorizontal: 5,
        backgroundColor:'white'
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
    
        marginVertical: 5,
        backgroundColor:"white",
        flexBasis: '46%',
        marginHorizontal: 5,
      },
      cardFooter: {
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
      cardHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
      },
      userImage:{
        height: 120,
        width: 120,
        alignSelf:'center'
      },
      name:{
        fontSize:18,
        flex:1,
        alignSelf:'center',
        color:"#008080",
        fontWeight:'bold'
      },
      position:{
        fontSize:14,
        flex:1,
        alignSelf:'center',
        color:"#696969"
      },
      followButton: {
        marginTop:10,
        height:35,
        width:150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        backgroundColor: "#00BFFF",
      },
      followButtonText:{
        color: "#FFFFFF",
        fontSize:15,
      },
      icon:{
        height: 20,
        width: 20, 
      }
});

const mapStateToProps = (state) => {
  return {
    moviesArray: state.movieReducer.moviesArray,
  };
};

function mapDispatchToProps(dispatch) {
  return {
  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
