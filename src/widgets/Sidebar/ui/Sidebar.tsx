import React, {FC, useState} from 'react';
import cls from './Sidebar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
    className?: string
}

const Sidebar: FC<SidebarProps> = ({className}) => {

    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: !collapsed}, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

export default Sidebar;