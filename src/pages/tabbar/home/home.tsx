import { View } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';
import Router from '/@/routes/router';
import { styled } from 'linaria/lib/react';
import { useEffect, useRef } from 'react';
import Preview from "./preview"
import Navbar from '/@/components/Navbar/Navbar';

function Home() {
	useEffect(()=>{
	},[])
	return (
		<Wrapper>
			<Navbar></Navbar>
			<Preview ></Preview>
		</Wrapper>
	);
}


export default Home;

const Wrapper = styled(View)`
	padding-top:60px;;
	position: relative;
	display:flex;
	flex-direction:column;
`;
