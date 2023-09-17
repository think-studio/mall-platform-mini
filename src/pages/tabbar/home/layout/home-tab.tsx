import { View, Image } from '@tarojs/components';
import { styled } from 'linaria/lib/react';

import React, { useState } from "react";
import { Tabs } from '@nutui/nutui-react-taro';
import Navbar from '/@/components/Navbar/Navbar';

const HomeTab = () => {
    const [tab1value, setTab1value] = useState('0');
    const switchTab=(value)=>{
        setTab1value(value) 
    }
    return (
        <div>
            <Tabs 
                value={tab1value}
                onChange={value=>switchTab(value)} 
                tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }} activeType='smile'
               
            >
                <Tabs.TabPane title="Tab 1"> 
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 12234444</p>
                </Tabs.TabPane>
                <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
                <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
            </Tabs>
        </div>
    )
}
export default HomeTab