import React, { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone,UserOutlined ,LockOutlined} from '@ant-design/icons';
import { Button, Input, Space,Flex,message,Segmented} from 'antd';
import 'antd/dist/reset.css';
import './Login.css';
import { QRCodeSVG } from 'qrcode.react';

const Login: React.FC = () => {
  const [loginType, setLoginType] = useState<string>('账号密码登录');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showQR, setShowQR] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (values: { username: string; password: string }) => {
    const { username, password } = values;
    const matchedUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (matchedUser && allowedUsernames.includes(username)) {
      message.success('ログイン成功！');
    } else {
      message.error('ユーザー名またはパスワードが間違っています');
    }

    // 这里可以添加验证逻辑，比如检查用户名和密码.
    navigate('/home'); // 登录成功后跳转到主页
  };
    const Register = () => {
    navigate('/register'); 
  };


  const users = [
    { username: 'lsq', password: '123456' },
    { username: '222222', password: '111111' },
  ];

  const allowedUsernames = ['lsq'];
  const isFormValid = username.trim() !== '' && password.trim() !== '';

  return (
    <div
      style={{

        height: '100vh',
        backgroundImage: 'url(https://gmusersa.blob.core.windows.net/gmatch-image/back-2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        paddingRight: '10%',
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={{
          position: 'relative',
          height: '50%',
          width: '30%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(255, 252, 252, 0.1)',
          borderRadius: '10px',
          boxShadow: '0 4px 30px rgba(70, 68, 68, 0.1)',
          border: '1px solid rgba(238, 233, 233, 0.3)',
          padding: '24px',
          gap: '16px',
        }}
      >

        {/* 切换按钮：图片重叠点击切换 */}
        <div
          onClick={() =>
            setLoginType(
              loginType === '账号密码登录' ? '二维码登录' : '账号密码登录'
            )
          }
          title="切换登录方式"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '48px',
            height: '48px',
            cursor: 'pointer',
            overflow: 'hidden',
            clipPath: 'polygon(100% 0, 100% 100%, 0 0)', // 三角形右上角
            zIndex: 2,
          }}
        >
          {/* 图1：账号图标 */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
            alt="账号"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: loginType === '账号密码登录' ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
          />

          {/* 图2：二维码图标 */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/1006/1006548.png"
            alt="二维码"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: loginType === '二维码登录' ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
          />
        </div>

        {/* 登录表单 or 二维码 */}
        {loginType === '账号密码登录' ? (
          <>
            <div style={{ width: '100%' }}>
              <p>アカウント名：</p>
              <Input
                value={username}
                placeholder="アカウント名"
                prefix={<UserOutlined />}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div style={{ width: '100%' }}>
              <p>パスワード：</p>
              <Input.Password
                value={password}
                placeholder="パスワード"
                prefix={<LockOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              type="primary"
              block
              disabled={!isFormValid}
              onClick={() => handleLogin({username,password})}
              style={{
                background:
                  'linear-gradient(135deg, #5EFCE8 15%, #736EFE 100%)',
              }}
            >
              ログイン
            </Button>
            <Button
            onClick={() => Register()}
            > 登録</Button>
          </>
        ) : (
          <div
            style={{
              width: '30vw',
              maxWidth: '300px',
              aspectRatio: '1',
              background: '#fff',
              padding: '1em',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <QRCodeSVG
              value={`https://example.com/login?ts=${Date.now()}`}
              width="100%"
              height="100%"
              bgColor="transparent"
              fgColor="#000000"
              level="H"
              includeMargin={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};
  export default Login;
