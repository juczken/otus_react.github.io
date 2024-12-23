import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import cn from 'clsx';
import styles from './EditProfile.module.css';
import Button from '../../../shared/ui/Button/Button';

interface EditProfileProps {
  onSubmit: (data: { userName: string; about: string }) => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn(styles.form)}>
      <h2 className={cn(styles.title)}>{t('EditProfile.title')}</h2>
      <div>
        <label className={cn(styles.label)}>{t('EditProfile.userName')}</label>
        <input
          // className={cn(styles.input)}
          className={cn(styles.input, { [styles.error]: errors.userName })}
          {...register('userName', { required: t('EditProfile.errors.userNameRequired') })}
          placeholder={t('EditProfile.userNamePlaceholder')}
        />
        {typeof errors.userName?.message === 'string' && <p className={styles.error}>{errors.userName.message}</p>}
      </div>
      <div>
        <label className={cn(styles.label)}>{t('EditProfile.about')}</label>
        <textarea
          className={cn(styles.textarea)}
          {...register('about')}
          placeholder={t('EditProfile.aboutPlaceholder')}
        />
      </div>
      <Button className={styles.button} lable={t('EditProfile.button')} disabled={false} type="submit" />
    </form>
  );
};

export default EditProfile;
