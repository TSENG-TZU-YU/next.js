'use client'
import React from 'react';

interface HeaderProps {
    className: string;
    toggleCollapsed: () => void;
    collapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ className, toggleCollapsed, collapsed }) => {
    return (
        <header className={className}>
            <button onClick={toggleCollapsed}>{collapsed ? 'Expand' : 'Collapse'}</button>
        </header>
    );
};

export default Header;
