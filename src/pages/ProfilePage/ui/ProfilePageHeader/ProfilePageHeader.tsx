import React, { useCallback } from 'react';
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import cls from './ProfilePageHeader.module.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getProfileReadonly, profileActions } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

const ProfilePageHeader = () => {

    const { t } = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    },[dispatch])

    const onCanselEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(true))
    },[dispatch])

    const drawButton = () => {
        if (readonly) {
            return (
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </Button>
            )
        } else return (
            <Button
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onCanselEdit}
            >
                {t('Отменить')}
            </Button>
        )
    }

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [])}>
            <Text title={t('Профиль')}/>
            {drawButton()}
        </div>
    );
};

export default ProfilePageHeader;