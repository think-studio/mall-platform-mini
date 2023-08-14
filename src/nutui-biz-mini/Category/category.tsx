import React, {
	FunctionComponent,
	useEffect,
	useRef,
	useState,
	CSSProperties,
	ReactNode,
	ComponentType
} from 'react';
import classNames from 'classnames';
import { IComponent } from '/@/utils/typings';
import { CategoryPane } from './categorypane';
import bem from '/@/utils/bem';
import { errorImg } from '/@/utils';
import {
	Category as BaseCategory,
	CategoryPaneItem,
	CategoryPaneHandler
} from './props';
import { ScrollView, View, ViewProps } from '@tarojs/components';
import './category.scss';
import Taro from '@tarojs/taro';

export interface CategoryProps extends IComponent {
	className?: string;
	style?: CSSProperties;
	showSkuImg: boolean;
	category: BaseCategory[];
	showSecondLevelQuickNav: boolean;
	isLeftAutoSlide: boolean;
	isLazy: boolean;
	loadingImg: string;
	errorImg: string;
	showPullUp?: boolean;
	pullUpText?: ReactNode;
	onChange: (index: BaseCategory) => void;
	onPanelNavClick: (index: number) => void;
	onPanelThirdClick: (sku: CategoryPaneItem) => void;
}

const defaultProps = {
	category: [],
	showSkuImg: true,
	showSecondLevelQuickNav: false,
	isLeftAutoSlide: true,
	isLazy: true,
	loadingImg: errorImg,
	errorImg,
	showPullUp: false,
	onChange: () => {},
	onPanelNavClick: () => {},
	onPanelThirdClick: () => {}
} as CategoryProps;

export const Category: FunctionComponent<
	Partial<CategoryProps> &
		Omit<React.HTMLAttributes<ComponentType<ViewProps>>, 'onChange'>
> = (props) => {
	const {
		category,
		showSkuImg,
		showSecondLevelQuickNav,
		isLeftAutoSlide,
		isLazy,
		loadingImg,
		errorImg,
		showPullUp,
		pullUpText,
		onChange,
		onPanelNavClick,
		onPanelThirdClick
	} = {
		...defaultProps,
		...props
	};

	const b = bem('category');

	const panelRef = useRef<CategoryPaneHandler>(null);
	const [checkIndex, setCheckIndex] = useState<number>(0);

	const changeTabs = (tab: number) => {
		if (tab !== checkIndex) {
			setCheckIndex(tab);

			const panel = panelRef?.current;
			panel && panel.reset();

			isLeftAutoSlide && scrollListTo(tab);

			onChange(category[tab]);
		}
	};

	const scrollListTo = (index: number) => {
		const query = Taro.createSelectorQuery();
		const listDom = query.select('#listRef');
		listDom.scrollOffset().exec();
		query
			.select('.nb-category__cate-list-item')
			.boundingClientRect()
			.exec((res) => {
				// 分类多了再说
			});
	};

	return (
		<View className={classNames([b()])}>
			{category && category?.length > 0 && (
				<View className={b('cate-list')}>
					{
						<ScrollView
							scrollY
							enhanced
							className={b('cate-list-left')}
							id='listRef'
						>
							{props.category?.map((item, index) => (
								<View
									key={index}
									data-index={index}
									className={classNames([
										b('cate-list-item'),
										checkIndex == index && b('cate-list-item-checked')
									])}
									onClick={() => changeTabs(index)}
								>
									{item.catName}
								</View>
							))}
						</ScrollView>
					}

					<CategoryPane
						ref={panelRef}
						categoryChild={
							props.category && props.category[checkIndex].children
						}
						showSkuImg={showSkuImg}
						showSecondLevelQuickNav={showSecondLevelQuickNav}
						isLazy={isLazy}
						loadingImg={loadingImg}
						errorImg={errorImg}
						showPullUp={showPullUp}
						pullUpText={pullUpText}
						onPanelNavClick={onPanelNavClick}
						onPanelThirdClick={onPanelThirdClick}
					></CategoryPane>
				</View>
			)}
		</View>
	);
};

Category.defaultProps = defaultProps;
Category.displayName = 'NutCategory';
