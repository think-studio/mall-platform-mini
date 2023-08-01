import { View } from '@tarojs/components';
import { useState,useRef } from "react";

import { Tabs,Swiper} from '@nutui/nutui-react-taro';
import { styled } from 'linaria/lib/react';
import {categoryList} from './constants'

function Category() {
	const [tab2value, setTab2value] = useState('0')
	const [tab1value, setTab1value] = useState('0');
	const [tabIndex, setTabIndex] = useState(0)
	const swiperRef = useRef(null)
	const handleTabChange=(page:number) => {
		swiperRef.current?.to(page)
		setTabIndex(page)
	  }
	return (
		<Wrapper>
			<Tabs value={tab1value} onChange={handleTabChange} align='left' direction='vertical'>
				{categoryList.map(item=>(
					<Tabs.TabPane title={item.name}> Tab 1 </Tabs.TabPane>
				))}
      		</Tabs>
			  <Swiper initPage={0} loop={false} ref={swiperRef} onChange={(page) => { setTabIndex(page)}}>
				<Swiper.Item>
				<div style={{ backgroundColor: '#fff', padding: '10px' }}>
					Tab 1
				</div>
				</Swiper.Item>
				<Swiper.Item>
				<div style={{ backgroundColor: '#fff', padding: '10px' }}>
					Tab 2
				</div>
				</Swiper.Item>
				<Swiper.Item>
				<div style={{ backgroundColor: '#fff', padding: '10px' }}>
					Tab 3
				</div>
				</Swiper.Item>
			</Swiper>
		</Wrapper>
	);
}

export default Category;

const Wrapper = styled(View)`
	position: relative;
	border:1px solid green;
	height: 100vh;
	overflow: hidden;
`;
