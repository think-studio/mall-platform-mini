import React, { useEffect, useState } from 'react'
import { View } from '@tarojs/components';
import { NavBar, SearchBar } from '@nutui/nutui-react-taro';
import Taro from '@tarojs/taro'
import { getSystemInfo } from '/@/api/common/device';

const globalSystemInfo = getSystemInfo()
export default function Navbar() {
    const [navBarStyle, setNavBarStyle] = useState({})
    const initNavLocation = () => {
        setNavBarStyle(() => setBarStyle(globalSystemInfo))
    }
    const setBarStyle = (systemInfo) => {
        const { navBarHeight, capsulePosition, statusBarHeight, navBarExtendHeight, windowWidth } = systemInfo
        console.log(navBarExtendHeight, 'navBarExtendHeight')
        const navBarstyle = {
            border: `1px solid green`,
            // backgroundColor:'pink',
            // position: 'fixed',
            // zIndex:'22',
            // top: '0',
            // left: '0',
            width: `${windowWidth}`,
            height: `${navBarHeight + navBarExtendHeight}px`,
            paddingTop: `${statusBarHeight}px`,
            paddingRight: `${windowWidth - capsulePosition.left}px`,
            paddingBottom: `${navBarExtendHeight}px`
        }
        return navBarstyle
    }
    const setBarContentStyle = (systemInfo) => {
        const { capsulePosition } = systemInfo
        const BarContentStyle = {
            border: `1px solid red`,
            paddingTop: `${capsulePosition.bottom - capsulePosition.top}px`,
        }
        return BarContentStyle
    }
    useEffect(() => {
        initNavLocation()
    }, [])
    return (
        <View>
            <NavBar style={navBarStyle} fixed
            >
                <SearchBar shape="round" style={{ border: `1px solid`, height: '100%', width: `100%` }} />
            </NavBar>

        </View>

    )
}
