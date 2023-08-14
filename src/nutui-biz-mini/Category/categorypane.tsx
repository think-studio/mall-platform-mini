import React, {
	useRef,
	CSSProperties,
	useState,
	useImperativeHandle,
	ReactNode,
	ComponentType
} from 'react';

import classNames from 'classnames';
import bem from '/@/utils/bem';
import { IComponent } from '/@/utils/typings';
import { throttle } from '/@/utils/throttle';
import { Image } from '@nutui/nutui-react-taro';
import { IconFont as Icon } from '@nutui/icons-react-taro';
import { errorImg } from '/@/utils';
import {
	CategoryPane as BaseCategoryPane,
	CategoryPaneItem,
	CategoryPaneHandler
} from './props';
import { View, ViewProps, ScrollView } from '@tarojs/components';
import './category.scss';
import Taro from '@tarojs/taro';

export interface CategoryPaneProps extends IComponent {
	className?: string;
	style?: CSSProperties;
	showSkuImg: boolean;
	categoryChild: BaseCategoryPane[];
	showSecondLevelQuickNav: boolean;
	isLazy: boolean;
	loadingImg: string;
	errorImg: string;
	showPullUp?: boolean;
	pullUpText?: ReactNode | string;
	onPanelNavClick: (index: number) => void;
	onPanelThirdClick: (sku: CategoryPaneItem) => void;
}

const defaultProps = {
	categoryChild: [],
	showSkuImg: true,
	showSecondLevelQuickNav: false,
	isLazy: true,
	loadingImg: errorImg,
	errorImg,
	showPullUp: false,
	onPanelNavClick: () => {},
	onPanelThirdClick: () => {}
} as CategoryPaneProps;

export const CategoryPane = React.forwardRef<
	CategoryPaneHandler,
	Partial<CategoryPaneProps>
>((props, ref) => {
	const {
		categoryChild,
		showSkuImg,
		showSecondLevelQuickNav,
		isLazy,
		loadingImg,
		errorImg,
		showPullUp,
		pullUpText,
		onPanelNavClick,
		onPanelThirdClick
	} = {
		...defaultProps,
		...props
	};

	const b = bem('category-pane');

	const [scrollTop, setScrollTop] = useState(0);
	const [quickScrollLeft, setQuickScrollLeft] = useState(0);
	const [paneIndex, setPaneIndex] = useState(0);
	const [forbidden, setForbidden] = useState(false);

	const changePane = (tab: number) => {
		if (tab != paneIndex) {
			setPaneIndex(tab);
			setForbidden(true);
			quickNavScroll(tab);
			bodyScroll(tab);
		}

		onPanelNavClick && onPanelNavClick(tab);
	};

	const checkActiveIndex = throttle(() => {
		if (forbidden) return;
		Taro.createSelectorQuery()
			.selectAll('.nb-category-pane__child-anchor')
			.boundingClientRect()
			.exec((res) => {
				const elements = res[0];
				for (let i = 0; i < elements.length; i++) {
					const panel = elements[i];
					const panelIndex = i;
					if (panel.top + panel.height - 80 > 0) {
						setPaneIndex(panelIndex);
						quickNavScroll(panelIndex);
						return;
					}
				}
			});
	}, 50);

	const bodyScroll = (index: number) => {
		const query = Taro.createSelectorQuery();
		const body = query.select('#bodyRef');
		const elements = query.selectAll('.nb-category-pane__child-anchor');
		const idx = index || paneIndex;
		body.scrollOffset().exec();
		elements.boundingClientRect().exec((res) => {
			const currentScroll = res[0].scrollTop;
			const offsetTop = res[1][idx].top + currentScroll;
			setScrollTop(index == 0 ? 0 : Math.max(offsetTop - 80, 0));
		});
		setTimeout(() => {
			setForbidden(false);
		});
	};

	// 快捷导航滚动
	const quickNavScroll = (index: number) => {
		const quick = Taro.createSelectorQuery().select('#quickRef');
		quick.scrollOffset().exec((res) => {
			const currentScroll = res[0].scrollLeft;
			const idx = index > -1 ? index : paneIndex;
			if ((currentScroll == 0 && idx > 1) || currentScroll != 0) {
				const nextScrollLeft = (idx - 1) * 150;
				setQuickScrollLeft(nextScrollLeft);
			}
		});
	};

	const panelSkuClick = (sku: CategoryPaneItem) => {
		onPanelThirdClick && onPanelThirdClick(sku);
	};
	useImperativeHandle(ref, () => ({
		reset: () => {
			changePane(0);
		}
	}));

	return (
		<View className={classNames(b())}>
			{showSecondLevelQuickNav && (
				<View className={b('quick')}>
					<ScrollView
						className={b('quick-box')}
						id='quickRef'
						scrollX
						scrollWithAnimation
						enhanced
						scrollLeft={quickScrollLeft}
					>
						{categoryChild.map((child, index) => (
							<View
								key={index}
								onClick={() => changePane(index)}
								className={classNames([
									b('quick-child'),
									index == paneIndex && b('quick-child-active')
								])}
							>
								{child.catName}
							</View>
						))}
					</ScrollView>
				</View>
			)}

			<ScrollView
				className={b('cate-list-right')}
				style={{
					height: showSecondLevelQuickNav ? 'calc(100% - 128rpx)' : '100%'
				}}
				id='bodyRef'
				scrollY
				scrollWithAnimation
				enhanced
				onScroll={checkActiveIndex}
				scrollTop={scrollTop}
			>
				{categoryChild.map((child, index) => (
					<View key={index} className={b('child-anchor')} data-index={index}>
						<View className={b('child-title')}>{child.catName}</View>
						<View className={b('child-item-list')}>
							{child.children?.map((sku, idx) => (
								<View
									className={classNames([
										b('child-item'),
										!showSkuImg && b('child-item-no')
									])}
									key={idx}
									onClick={() => panelSkuClick(sku)}
								>
									{showSkuImg && (
										<Image
											className={b('child-img')}
											src={sku.backImg}
											lazyLoad={isLazy}
											loading={loadingImg}
											error={errorImg}
										/>
									)}
									<View
										className={classNames(
											b(showSkuImg ? 'sku-img' : 'sku-name')
										)}
									>
										{sku?.catName}
									</View>
								</View>
							))}
						</View>
					</View>
				))}
				{showPullUp && (
					<View className={b('cate-list-bottom')}>
						<Icon name='top' size='12px' color='#fa2c19' />{' '}
						<View>{pullUpText}</View>
					</View>
				)}
			</ScrollView>
		</View>
	);
});
