import React, { Component } from 'react'
import { Tree } from 'antd'
import logo from './logo.svg'
import './App.css'
import 'antd/dist/antd.css'

const TreeNode = Tree.TreeNode

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Tree
          checkable
          defaultCheckedKeys={['0-0-0', '0-0-1-0']}
          defaultExpandAll
          onSelect={this.onSelect}
          onCheck={this.onCheck}
        >
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="parent 1-0" key="0-0-0" disabled>
              <TreeNode title="leaf" key="0-0-0-1" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode
                title={<span style={{ color: '#1890ff' }}>sss</span>}
                key="0-0-1-0"
              />
              <TreeNode
                title={<span style={{ color: '#1890ff' }}>sss</span>}
                key="0-0-1-1"
              />
              <TreeNode
                title={<span style={{ color: '#1890ff' }}>sss</span>}
                key="0-0-1-2"
              />
            </TreeNode>
          </TreeNode>
        </Tree>
      </div>
    )
  }

  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
  }
  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info)
  }
}

export default App
