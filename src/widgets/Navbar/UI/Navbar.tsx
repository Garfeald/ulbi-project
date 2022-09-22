import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/UI/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>О сайте</AppLink>
            </div>
        </div>
    );
};