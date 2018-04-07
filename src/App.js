import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import 'antd/dist/antd.css'
// import loadable from 'utils/loadable'
import Loadable from 'react-loadable'
import Loading from 'components/Loading'
// import './App.css'

const { Header, Content, Footer, Sider } = Layout

const Users = Loadable({
  loader: () => import('components/Users'),
  loading: Loading,
})
const Roles = Loadable({
  loader: () => import('components/Roles'),
  loading: Loading,
})

const menus = ['users', 'roles']

class App extends Component {
  state = {
    selectedKeys: [global.location.pathname.slice(1)],
  }

  activeMenu = item => {
    this.setState({
      selectedKeys: [item.key],
    })
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            selectable
            selectedKeys={this.state.selectedKeys}
            onSelect={this.activeMenu}
          >
            {menus.map(menu => (
              <Menu.Item key={menu}>
                <NavLink to={`/${menu}`}>
                  <Icon type="flag" />
                  <span>{menu.toUpperCase()}</span>
                </NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Route path="/" exact component={Users} />
            <Route path="/users" component={Users} />
            <Route path="/roles" component={Roles} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Footer content</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default App
