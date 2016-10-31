import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	ScrollView,
	PixelRatio,
	StatusBar,
	TouchableOpacity
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import {Width,Height,Scale} from "./components/DeviceInfo";//获取设备信息

import Icon from 'react-native-vector-icons/FontAwesome';
import HomeList from "./Home/HomeList";//列表
import SellerBar from "./Seller/SellerBar";
import Tabs from "./components/Tabs";
import SelectAddress from "./components/SelectAddress";
import SearchBox from "./components/SearchBox";

class Seller extends Component{
	state = {
		title:"Seller"
	};
	render(){
		const { RootNavigator } = this.props;
		return(
			<View key={"Seller"} style={styles.root}>
				<StatusBar backgroundColor="rgb(251,56,8)" style={{color:"#000"}} barStyle="default" />
				<ScrollableTabView 
					style={styles.container}
					tabBarTextStyle={{color:"#000"}}
					tabBarBackgroundColor="#fff"
					tabBarUnderlineStyle={{backgroundColor:"rgb(251,56,8)"}}
					renderTabBar={() => <ScrollableTabBar />}
					initialPage={0}>
					<HomeList RootNavigator={RootNavigator} tabLabel="热门" />
					<SearchBox tabLabel="搜索" />
					<SelectAddress tabLabel="台湾风味" />
					<SellerBar tabLabel="泰国风味" />
				</ScrollableTabView>
				<Tabs onselect={1} RootNavigator={RootNavigator} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	root:{
		flex:1
	},
	container: {
		marginTop:10,
		marginBottom:50
	},
	tabBarTextStyle:{
		color:"#fff"
	}
});

export default Seller;