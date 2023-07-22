import { View, Image } from '@tarojs/components';
import { styled } from 'linaria/lib/react';
import { layoutPadding,imgSize } from '/@/styles/layout'

interface Img {
    url: string
}
function FlexOne(props: Img) {
    return (
        <Layout style={layoutPadding}>
            <View className='flex-one-img'>
                <Image  src={props?.url} style={imgSize}></Image>
            </View>
        </Layout>
    )
}
export default FlexOne

const Layout = styled(View)`
     /* border:1px solid green; */
    .flex-one-img{
        width:100%;
        height:280rpx;
        /* border:1px solid blue; */
    }
`

