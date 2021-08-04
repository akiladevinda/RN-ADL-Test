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
    Button,
  } from 'react-native';
import { colors } from "../../config";
import navigationService from "../../navigation/navigationService";
import { useFocusEffect } from '@react-navigation/native';
import { Images } from "../../config/images";

const Cart = (props) => { 
  const {} = props;

  return (
    <View style={styles.container}>
      <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:30}}>
            <Image style={styles.productImg} source={Images.DASH_MOVIES}/>
            <Text style={styles.name}>Super Soft T-Shirt</Text>
            <Text style={styles.price}>$ 12.22</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
              natoque penatibus et magnis dis parturient montes, 
              nascetur ridiculus mus. Donec quam felis, ultricies nec
            </Text>
          </View>
          <View style={styles.starContainer}>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> this.clickEventListener()}>
              <Text style={styles.shareButtonText}>Add To Cart</Text>  
            </TouchableOpacity>
          </View> 
        </ScrollView>
      </View>
  );
};

export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        backgroundColor:'white'
      },
      productImg:{
        width:200,
        height:200,
      },
      name:{
        fontSize:28,
        color:"#696969",
        fontWeight:'bold'
      },
      price:{
        marginTop:10,
        fontSize:18,
        color:"green",
        fontWeight:'bold'
      },
      description:{
        textAlign:'center',
        marginTop:10,
        color:"#696969",
      },
      star:{
        width:40,
        height:40,
      },
      btnColor: {
        height:30,
        width:30,
        borderRadius:30,
        marginHorizontal:3
      },
      btnSize: {
        height:40,
        width:40,
        borderRadius:40,
        borderColor:'#778899',
        borderWidth:1,
        marginHorizontal:3,
        backgroundColor:'white',
    
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      starContainer:{
        justifyContent:'center', 
        marginHorizontal:30, 
        flexDirection:'row', 
        marginTop:20
      },
      contentColors:{ 
        justifyContent:'center', 
        marginHorizontal:30, 
        flexDirection:'row', 
        marginTop:20
      },
      contentSize:{ 
        justifyContent:'center', 
        marginHorizontal:30, 
        flexDirection:'row', 
        marginTop:20
      },
      separator:{
        height:2,
        backgroundColor:"#eeeeee",
        marginTop:20,
        marginHorizontal:30
      },
      shareButton: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        backgroundColor: "#00BFFF",
      },
      shareButtonText:{
        color: "#FFFFFF",
        fontSize:20,
      },
      addToCarContainer:{
        marginHorizontal:30
      }
});

const mapStateToProps = (state) => {
  return {

  };
};

function mapDispatchToProps(dispatch) {
  return {
  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
