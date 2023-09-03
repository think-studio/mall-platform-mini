import { View } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';
import Router from '/@/routes/router';
import { styled } from 'linaria/lib/react';
import { useEffect, useRef } from 'react';
import Preview from "./preview"
import Navbar from '/@/components/Navbar/Navbar';

function Home() {
	let viewRef=useRef(null)
	useEffect(()=>{
	},[])
	return (
		<Wrapper>
			{/* <Navbar></Navbar> */}
			<View className='sttey'>
				<Preview ></Preview>
			</View>
		</Wrapper>
	);
}


export default Home;

const Wrapper = styled(View)`
	position: relative;
	display:flex;
	flex-direction:column;
	/* border:4rpx solid pink; */
	.sttey{
		background-color: pink;
		height: 100vh;
		margin-top: calc(100vh - 60px);
	}
`;
