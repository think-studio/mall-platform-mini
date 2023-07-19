import { View } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';
import Router from '/@/routes/router';
import { styled } from 'linaria/lib/react';
import { useEffect, useRef } from 'react';
import Preview from "./preview"


function Home() {
	let viewRef=useRef(null)
	useEffect(()=>{
	},[])
	return (
		<Wrapper>
			<Preview></Preview>
		</Wrapper>
	);
}


export default Home;

const Wrapper = styled(View)`
	position: relative;
	overflow: hidden;
	display:flex;
	flex-direction:column;
	border:4rpx solid pink;
`;
