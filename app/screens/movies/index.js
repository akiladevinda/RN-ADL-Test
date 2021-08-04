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
import * as cartActions from '../../redux/actions/cartActions';
import * as movieActions from '../../redux/actions/movieActions';
import {Picker} from '@react-native-picker/picker';

const Movies = (props) => { 
  const {moviesArray,updateShoppingCart} = props;
  const [selectedCategory, setSelectedMovie] = useState();
  const [isFilter, setIsFilter] = useState(false);
  const [filterdResults, setFilteredResults] = useState([]);
  
  const addToCart = (item) => {
    console.log("🚀 ~ file: index.js ~ line 22 ~ addToCart ~ item", item)
    updateShoppingCart(item);
    alert('Movie added to your cart')
  }

  const filterMovieByCategoryHandler = (category) => {
    setSelectedMovie(category);
    if(category == 'All'){
      setIsFilter(false);
    }else{
      setIsFilter(true);
      const finalArray = moviesArray.filter(moviesArray => moviesArray.category === category);
      console.log("🚀 ~  ~ finalArray", finalArray)
      setFilteredResults(finalArray);
    }
  }
  return (
    <View style={styles.container}>
    <Picker
      selectedValue={selectedCategory}
      onValueChange={(itemValue, itemIndex) =>
        filterMovieByCategoryHandler(itemValue)
      }>
      <Picker.Item label="All" value="All" />
      <Picker.Item label="Action" value="Action" />
      <Picker.Item label="Shooting" value="Shooting" />
      <Picker.Item label="Crime" value="Crime" />
    </Picker>

    <FlatList style={styles.list}
      contentContainerStyle={styles.listContainer}
      data={isFilter ? filterdResults : moviesArray}
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
                <Text style={styles.name}>{item.category}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> addToCart(item)}>
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
    updateShoppingCart: (payload) => dispatch(cartActions.updateShoppingCart(payload)),
    filteeMovieByCategory: (payload) => dispatch(movieActions.filteeMovieByCategory(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
