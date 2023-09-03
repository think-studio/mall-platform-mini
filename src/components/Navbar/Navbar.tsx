import  { useEffect, useState } from 'react'
import { View } from '@tarojs/components';
import { NavBar, SearchBar } from '@nutui/nutui-react-taro';
import { styled } from 'linaria/lib/react';
import { getSystemInfo } from '/@/api/common/device';
const globalSystemInfo = getSystemInfo()
function Navbar() {
    const [navBarStyle, setNavBarStyle] = useState({})
    const initNavLocation = () => {
        setNavBarStyle(() => setBarStyle(globalSystemInfo))
    }
    const setBarStyle = (systemInfo) => {
        const { navBarHeight, capsulePosition, statusBarHeight, navBarExtendHeight, windowWidth } = systemInfo
        const navBarstyle = {
            border: `1px solid red`,
            height: `${navBarHeight + navBarExtendHeight}px`,
            paddingTop: `${statusBarHeight}px`,
            paddingRight: `${windowWidth - capsulePosition.left}px`,
            paddingBottom: `${navBarExtendHeight}px`
        }
        return navBarstyle
    }
    useEffect(() => {
        initNavLocation()
    }, [])
    return (
        <Wrapper>
           <NavBar style={navBarStyle}  fixed
            >
            <SearchBar shape="round" className='search-height'/>
          
            </NavBar>

        </Wrapper>

    )
}
export default Navbar
const Wrapper = styled(View)`
width: 100%;
    .search-height{
        border: 1px solid blue;
        height:100%;
        width: 100vw;
        --nutui-searchbar-padding:0;
    }
`;
