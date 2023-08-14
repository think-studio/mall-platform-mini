import { View } from '@tarojs/components';
import { useState, useRef, useEffect } from 'react';
import { Category as CategoryList } from '/@/nutui-biz-mini';
import { styled } from 'linaria/lib/react';
import { categoryList } from './constants';
import type {
	Category,
	CategoryPaneItem
} from '/@/nutui-biz-mini/Category/props';
import Navbar from '/@/components/Navbar/Navbar';

function Category() {
	const [category, setCategory] = useState();
	const getData = () => {
		setCategory(categoryList.categoryInfo.category);
	};
	const onClassifyClick = (index: Category) => {
		console.log('一级分类', index);
	};

	const onPanelThirdClick = (index: CategoryPaneItem) => {
		console.log('三级分类跳转', index);
	};
	const onPanelNavClick = (index: number) => {
		console.log('二级分类跳转', index);
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<Wrapper>
			<Navbar></Navbar>
			<CategoryList
				showSecondLevelQuickNav
				category={category}
				onChange={onClassifyClick}
				onPanelNavClick={onPanelNavClick}
				onPanelThirdClick={onPanelThirdClick}
			></CategoryList>
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
