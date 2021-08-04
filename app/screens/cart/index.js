import React, { useState } from 'react';
import { connect } from "react-redux";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList
  } from 'react-native';
import { colors } from "../../config";
import navigationService from "../../navigation/navigationService";
import { useFocusEffect } from '@react-navigation/native';
import { Images } from "../../config/images";
import * as cartActions from '../../redux/actions/cartActions';

const Cart = (props) => { 
  const {userCart,removeFromCart} = props;

  const removeFromCartHandler = (id) => {
    console.log("🚀 ~ file: index.js ~ line 21 ~ removeFromCart ~ id", id)
    removeFromCart(id)
  }
  return (
    <View style={styles.container}>
    <View style={styles.body}>
        <FlatList 
            style={styles.container} 
            enableEmptySections={true}
            data={userCart}
            keyExtractor= {(item) => {
            return item.id;
            }}
            renderItem={({item}) => {
            return (
                <TouchableOpacity>
                <View style={styles.box}>
                    <Image style={styles.image} source={Images.DASH_MOVIES}/>
                    <Text style={styles.username}>{item.name}</Text>
                    <View style={styles.iconContent}>
                    <TouchableOpacity onPress={()=> removeFromCartHandler(item.id)}>
                    <Image style={styles.icon} source={Images.CART_DELETE}/>
                    </TouchableOpacity>
                    </View>
                </View>
                </TouchableOpacity>
            )
        }}/>
     </View>
      </View>
  );
};

export const styles = StyleSheet.create({
    image:{
        width: 60,
        height: 60,
      },
      body: {
        padding:30,
      },
      box: {
        marginTop:5,
        marginBottom:5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
          height:1,
          width:-2
        },
        elevation:2
      },
      username:{
        color: "black",
        fontSize:18,
        alignSelf:'center',
        marginLeft:10
      },
      iconContent:{
        width: 60,
        height: 60,
        // backgroundColor: '#40E0D0',
        marginLeft: 'auto',
        alignItems: 'center',
        justifyContent:'center'
      },
      icon:{
        width: 30,
        height: 30,
      }
});

const mapStateToProps = (state) => {
  return {
    userCart: state.cartReducer.userCart,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (payload) => dispatch(cartActions.removeFromCart(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
