import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  LockOutlined,
  MailOutlined,
  HomeOutlined,
  LaptopOutlined,
} from '@ant-design/icons';
import { Button, Input, message } from 'antd';
import 'antd/dist/reset.css';
import styles from './Register.module.css';

const Register: React.FC = () => {

//usestate表单中 注册信息
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [companyweb, setCompanyweb] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  //声明全部输入框是否有值
  const isFormValid =
    email.trim() !== '' &&
    company.trim() !== '' &&
    companyweb.trim() !== '' &&
    password.trim() !== '' &&
    password === confirmPassword &&
    emailError === ''

  //登录验证
  const handleRegister = () => {
    if (!isFormValid) {
      message.error('すべて記入してください');
      return;
    }

    message.success('登録成功！');
    navigate('/home');
  };

  // 验证邮箱 格式正确 
  const validateEmail = (email: string, companyweb: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return 'メール形式が正しくありません。';
    }

    const emailDomain = email.split('@')[1]?.toLowerCase();

    // 提取网站主域名
    const domainFromWebsite = companyweb
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .split('/')[0]
      .toLowerCase();

    //验证公司网站和邮箱域名是否一致
    if (!emailDomain || emailDomain !== domainFromWebsite) {
      return `会社サイトのドメイン（${domainFromWebsite}）と一致するメールアドレスを入力してください。`;
    }

    return '';
  };
  
  //网页画面返回
  return (
    <div className={styles.background}>
      <div className={styles.formContainer}>
        <h2 style={{ color: '#333' }}>新規登録</h2>
        <div className={styles.section}>
          <p className={styles.label}>
              会社サイト
              <span className={styles.comment}>*必須</span>
              </p>
          <Input
            className={styles.input}
            value={companyweb}
            placeholder="会社サイトご記入してください"
            prefix={<LaptopOutlined />}
            onChange={(e) => setCompanyweb(e.target.value)}
            />
        </div>

        <div className={styles.section}>
          <p className={styles.label}>
              御社名:
              <span className={styles.comment}>*必須</span>
              </p>
          <Input
          className={styles.input}
            value={company}
            placeholder="○○○○株式会社"
            prefix={<HomeOutlined />}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        
        <div className={styles.section}>
          <p className={styles.label}>
              メールアドレス：
              <span className={styles.comment}>*必須</span>              
              {emailError && (
          <span className={styles.error}>{emailError}</span>

        )}</p> 
          <Input
            className={styles.input}
            value={email}
            placeholder="会社メールアドレスご記入してください"
            prefix={<MailOutlined />}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => {
            const errorMsg = validateEmail(e.target.value, companyweb);
            setEmailError(errorMsg);
          }}
          />
        </div>
        
        <div className={styles.section}>
          <p className={styles.label}>パスワード：
              <span className={styles.comment}>*必須</span>
          </p>
          <Input.Password
          className={styles.input}
            value={password}
            placeholder="パスワード"
            prefix={<LockOutlined />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.section}>
          <p className={styles.label}>
            パスワード再入力：{confirmPassword && password && confirmPassword !== password && (
            <span className={styles.error}>
              入力したパスワードが一致しません
            </span>)}
            </p>
          <Input.Password
          className={styles.input}
          value={confirmPassword}
          placeholder="パスワード再入力"
          prefix={<LockOutlined />}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          onChange={(e) => setConfirmPassword(e.target.value)}
          status={
            confirmPassword && password && confirmPassword !== password
            ? 'error'
            : undefined}
            />
        </div>

        <Button
          type="primary"
          block
          disabled={!isFormValid}
          onClick={handleRegister}
          className={styles.registerButton}>
          登録
        </Button>
      </div>
    </div>
  );
};

export default Register;