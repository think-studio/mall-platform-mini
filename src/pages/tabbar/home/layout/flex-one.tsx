import { View, Image } from '@tarojs/components';
import { styled } from 'linaria/lib/react';
import React from 'react'
import { css } from '@linaria/core';
interface Img {
    url: string
}
function FlexOne(props: Img) {
    return (
        <View >
            <View className={layout}>
            <Image className={picture} src={props?.url}></Image>
            </View>
        </View>
    )
}
export default FlexOne
const layout = css`
    padding:4rpx;
    border:1px solid green;
`
const picture=css`
    width:100%
    height:280rpx;
`