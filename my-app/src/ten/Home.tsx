import React, { useState} from 'react';
import { useNavigate,useLocation,Outlet } from 'react-router-dom';
import {
    HomeOutlined,
    UserOutlined,
    FileTextOutlined,
    FileMarkdownOutlined,
    HeartOutlined,
    FolderOpenOutlined,
    TeamOutlined,
    EllipsisOutlined,
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CommentOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu,Layout,Dropdown, Tooltip,Avatar, Divider } from 'antd';
import './Home.css';

type MenuItem = Required<MenuProps>['items'][number];




const { Header, Sider, Content, Footer } = Layout;

const items: MenuItem[] = [
    { key: '1', icon: <HomeOutlined />, label: 'ホーム' },
    { key: 'senta', icon: <DesktopOutlined />, label: '情報共有センター' },
    { key: '3', icon: <UserOutlined/>, label: '技術者情報一覧' },
    { key: '4', icon: <FileTextOutlined />, label: '案件情報一覧' },
    { key: '5', icon: <FileMarkdownOutlined/>, label: 'マッチング履歴' },
    { key: '6', icon: <HeartOutlined />, label: 'お気に入り' },
    { key: '7', icon: <FolderOpenOutlined />, label: '社内共有フォルダ' },
    { key: '8', icon: <TeamOutlined />, label: '社内アカウント管理' },
    

];
const itemss: MenuItem[] = [
{ key: '9', icon: <EllipsisOutlined />, label: 'GMATCHについて' },
];


const Home: React.FC=() =>{
  const navigate = useNavigate();
  const QQQ = () => {
    navigate('/QQQ'); 
  };
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
};
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    textAlign: 'center',
    color: '#fff',
    height: '100%',
    paddingInline: 48,
    lineHeight: '64px',
    background:'white',
};
  const contentStyle: React.CSSProperties = {
    height:'100%',
    textAlign: 'center',
    fontSize:'50px',
};

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};
  const layoutStyle: React.CSSProperties = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    backgroundColor:"#323"
};


  // 定义允许的图标 key 类型
type IconKey = 'feedback' | 'contact' | 'message';

// 定义 state 的类型
type SelectedIconsState = {
  [key in IconKey]: boolean;
};
  const [selectedIcons, setSelectedIcons] = useState({
    feedback: false,
    contact: false,
    message: false,
  });
  const toggleIcon = (key: IconKey) => {
    setSelectedIcons(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleMenuClick = ({ key }: { key: string }) => {
    switch (key) {
      case 'profile':
        break;
      case 'password':
        break;
      case 'logout':
        break;
      default:
        break;
    }
};
  const userMenuItems = [
    {
      key: 'profile',
      label: '個人情報',
    },
    {
      key: 'password',
      label: 'パスワード',
    },
    {
      type: 'divider' as const, 
    },
    {
      key: 'logout',
      label: 'ログアウト',
    },
];
const location = useLocation();

  return (
  <Layout style={layoutStyle} >
    
    <Header style={headerStyle}
    className="custom-header">
      <div>
        <Button 
        type="primary"
        onClick={toggleCollapsed}
        style={{
            marginLeft:1,
            marginTop:16,
            marginBottom: 16,
            width: 40,
            height: 40,
            fontSize: 24,
            background: 'linear-gradient(120deg,#84fab0 ,#8fd3f4 100%)',	
            border: 'none',
            }}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>  

        <div className="header-right">
          <Tooltip title="フィードバック">
            <HeartOutlined
            style={{
              fontSize: 24,
              color: selectedIcons.feedback ? 'blue' : '#555555',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onClick={() => toggleIcon('feedback')}
            />
            </Tooltip>
          <Tooltip title="連絡先">
            <TeamOutlined
            style={{
              fontSize: 24,
              color: selectedIcons.contact ? 'blue' : '#555555',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onClick={() => toggleIcon('contact')}
            />
            </Tooltip>
          <Tooltip title="メッセージ">
            <CommentOutlined
            style={{
              fontSize: 24,
              color: selectedIcons.message ? 'blue' : '#555555',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onClick={() => toggleIcon('message')}
            />
            </Tooltip>
        <Dropdown
                menu={{items: userMenuItems, onClick: handleMenuClick }}
                placement="bottomRight"
                arrow>
                  <Avatar
                    size="large"
                    icon={<UserOutlined />}
                    style={{ cursor: 'pointer' }}
                    src="  " 
                  />
        </Dropdown>
        </div>
      </Header>
      <Layout  style={{
        height: '100vh',
        display: 'flex',
      }}>
        <Sider 
          collapsible
          collapsed={collapsed}
          trigger={null} 
          width={250}  
          collapsedWidth={80} 
          style={{
            background: '#001529',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{ flex: 1, overflow: 'auto' }}>
                <Menu
                selectedKeys={[location.pathname]}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={collapsed}
                    items={items}
                    onClick={({ key }) => {
                      navigate(key); // 这里 key 是菜单项的 key，也是路由路径
                      }}
                    />
            </div>
            <div style={{ borderTop: '1px solid #ddd' }}>
                  <Menu
                    mode="inline"
                    theme="light"
                    inlineCollapsed={collapsed}
                    items={itemss}
                  />
                  </div>    
        </Sider>        
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>

    </Layout>

  );
};
  export default Home;