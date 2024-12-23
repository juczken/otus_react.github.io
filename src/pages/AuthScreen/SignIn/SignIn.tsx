import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import cn from 'clsx';
import styles from './SignIn.module.css';
import Button from '../../../shared/ui/Button/Button';

// type SignInDat ={
//     email: string;
//     password: string;
//   }
  
  export const LoginForm: React.FC = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();    
    // } = useForm<SignInDat>();
  const { t } = useTranslation();
  
    // const onSubmit: SubmitHandler<SignIn> = (data) => {
    //   console.log('data:', data);
    // };
    const onSubmit = (data: { email: string; password: string }) => {
      console.log('data:', data);
    };

    const passwordLength=8;
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className={cn(styles.form)}>
        <div>
          <label className={cn(styles.label)}>Email:</label>
          <input
            className={cn(styles.input, { [styles.error]: errors.email })}
            type="email"
            {...register('email', {
              required: t('SignIn.errors.passwordRequired'),
              pattern: {
                value: /^\S+@\S+$/i,
                message: t('SignIn.errors.invalidEmail'),
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
  
        <div>
          <label className={cn(styles.label)}>{t('SignIn.password')}:</label>
          <input
            className={cn(styles.input, { [styles.error]: errors.password })}
            type="password"
            {...register('password', {
              required: t('SignIn.errors.passwordRequired'),
              minLength: {
                value: passwordLength,
                message: t('SignIn.errors.passwordLength', { passwordLength }),//'Пароль должен содержать 8 знаков'
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
  
        <button type="submit">Войти</button>
        <Button className={styles.button} lable={t('SignIn.button')} type="submit" disabled={false} />
        </form>
    );
  };
  
  export default LoginForm;