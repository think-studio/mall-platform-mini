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
			{/*动态组件 */}
			<Preview></Preview>
		</Wrapper>
	);
}


export default Home;

const Wrapper = styled(View)`
	position: relative;
	height: 100vh;
	overflow: hidden;
`;
