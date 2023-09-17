import  { useEffect } from 'react'
import { View } from '@tarojs/components';
import { NavBar, SearchBar } from '@nutui/nutui-react-taro';
import { styled } from 'linaria/lib/react';
import { getSystemInfo } from '/@/api/common/device';
const globalSystemInfo = getSystemInfo()
function Navbar() {
    const { navBarHeight, capsulePosition, statusBarHeight, navBarExtendHeight, windowWidth } = globalSystemInfo
    const navBarstyle = {
        border: `1px solid red`,
        height: `${navBarHeight + navBarExtendHeight}px`,
        paddingTop: `${statusBarHeight}px`,
        paddingRight: `${windowWidth - capsulePosition.left}px`,
        paddingBottom: `${navBarExtendHeight}px`
    }
    const barStyle={
        display:'block',
        height:`${navBarHeight + navBarExtendHeight}px`

    }
    useEffect(() => {
    }, [])
    return (
        <Wrapper>
           <NavBar style={navBarstyle}  fixed
            >
            <SearchBar shape="round" className='search-height'/>
            </NavBar>
            <View style={barStyle}></View>

        </Wrapper>

    )
}
export default Navbar
const Wrapper = styled(View)`
width: 100%;
    .search-height{
        height:100%;
        width: 100vw;
        --nutui-searchbar-padding:0;
    }
`;
