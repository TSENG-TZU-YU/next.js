'use client';
import React from 'react';
import { Menu, Layout } from 'antd';
import type { MenuProps } from 'antd';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
interface SidebarProps {
    collapsed: boolean;
}
type MenuItem = Required<MenuProps>['items'][number];
const Sidebar = ({ collapsed }: SidebarProps) => {
    const [current, setCurrent] = useState('mail');
    const router = useRouter();
    const onClick: MenuProps['onClick'] = (e) => {
        router.push(e.key);
        setCurrent(e.key);
    };
    const items: MenuItem[] = [
        {
            key: 'sub1',
            label: 'Navigation One',
            //   icon: <MailOutlined />,
            children: [
                {
                    key: 'g1',
                    label: 'Item 1',
                    type: 'group',
                    children: [
                        { key: '/book', label: 'Option 1' },
                        { key: '/', label: 'Option 2' },
                    ],
                },
                {
                    key: 'g2',
                    label: 'Item 2',
                    type: 'group',
                    children: [
                        { key: '3', label: 'Option 3' },
                        { key: '4', label: 'Option 4' },
                    ],
                },
            ],
        },
        {
            key: 'sub2',
            label: 'Navigation Two',
            //   icon: <AppstoreOutlined />,
            children: [
                { key: '5', label: 'Option 5' },
                { key: '6', label: 'Option 6' },
                {
                    key: 'sub3',
                    label: 'Submenu',
                    children: [
                        { key: '7', label: 'Option 7' },
                        { key: '8', label: 'Option 8' },
                    ],
                },
            ],
        },
        {
            type: 'divider',
        },
        {
            key: 'sub4',
            label: 'Navigation Three',
            //   icon: <SettingOutlined />,
            children: [
                { key: '9', label: 'Option 9' },
                { key: '10', label: 'Option 10' },
                { key: '11', label: 'Option 11' },
                { key: '12', label: 'Option 12' },
            ],
        },
        {
            key: 'grp',
            label: 'Group',
            type: 'group',
            children: [
                { key: '13', label: 'Option 13' },
                {
                    key: '14',
                    label: 'Option 14',
                    children: [
                        { key: '13', label: 'Option 13' },
                        { key: '14', label: 'Option 14' },
                    ],
                },
            ],
        },
    ];

    return (
        <Menu
            onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    );
};

export default Sidebar;
