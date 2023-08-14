import React from 'react'
import { View } from '@tarojs/components';
import { NavBar ,SearchBar} from '@nutui/nutui-react-taro';
import Taro from '@tarojs/taro'
export default function Navbar() {
    return (
        <View style={{marginTop:'50rpx',border:'1px solid red'}}>
            <NavBar
            >
            <SearchBar shape="round"  />
            </NavBar>
        </View>
    )
}
