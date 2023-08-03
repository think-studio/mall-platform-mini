import { View } from '@tarojs/components';
import { useState, useRef, useEffect } from 'react';
import { Category as CategoryList } from '@nutui/nutui-biz';
import { styled } from 'linaria/lib/react';
import { categoryList } from './constants';


function Category() {
	const [category, setCategory] = useState();
	const getData = () => {
		console.log(categoryList,'categoryList')
		setCategory(categoryList.categoryInfo.category);
			
	};
	const onClassifyClick = (index: number) => {
		console.log('一级分类', index);
	};

	const onPanelThirdClick = (sku: any) => {
		console.log('三级分类跳转', sku);
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<Wrapper>
			<CategoryList category={category} onClick={onClassifyClick}	onPanelThirdClick={onPanelThirdClick}></CategoryList>
		</Wrapper>
	);
}

export default Category;

const Wrapper = styled(View)`
	position: relative;
	border: 1px solid green;
	height: 100vh;
	overflow: hidden;
`;
