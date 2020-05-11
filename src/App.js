import React, {useState} from 'react';
import './App.css';
import { Layout } from 'antd';
import { Card, Col, Row } from 'antd';
import { Input } from 'antd';
import {
  ShoppingCartOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

function App() {
  const [items, setItems] = useState([{id: '1'}, {id: '2'}, {id: '3' }, {id: '4' }, {id: '5' }])
  const [selected, setSelected] = useState([])

  const setSelectedHandler = (item) => {
    setItems(items.filter(el => el.id !== item.id))
    setSelected([...selected, item])
  }

  const removeFromCart = (item) => {
    setItems([...items, item])
    setSelected(selected.filter(el => el.id !== item.id))
  }

  return (
  <Layout style={{height: '100vh'}}>
      <Header style={{ background: '#e6fffb', borderBottom: '1px solid #d9d9d9' }}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <img src="https://image.flaticon.com/icons/svg/346/346218.svg" width="50" height="50" alt="Flower free icon" title="Flower free icon" />
          Flower shop
        </div>
          <Dropdown
            overlay={
          <Menu>
          {selected.map((item, key) =>
            <Menu.Item key={key}>
              <Card
              onClick={() => removeFromCart(item)}
              hoverable
              cover={<img alt="example"src="https://image.flaticon.com/icons/svg/252/252245.svg" width="100" height="100"  />}
              >
                <Meta title={`Flower ${item.id}`} description="Remove from сart" />
              </Card>
            </Menu.Item>
          )}
          </Menu>
          }
            trigger={['click']}>
            <a
              className="ant-dropdown-link"
              onClick={e => {
              e.preventDefault()
            }}>
            <ShoppingCartOutlined style={{ fontSize: '45px' }} />
            {selected.length}
          </a>
        </Dropdown>
        </div>
      </Header>
    <Layout>

    <Content>
      <div className="site-card-wrapper">
        <Row gutter={16} style={{padding: '20px'}}>
          {items.map((item, key) =>
          <Col key={key} span={8}>
              <Card
              onClick={() => setSelectedHandler(item)}
              hoverable
              cover={<img alt="example"src="https://image.flaticon.com/icons/svg/252/252245.svg" width="100" height="100"  />}
            >
              <Meta title={`Flower ${item.id}`} description="Add to сart" />
            </Card>,
          </Col>
          )}
        </Row>
      </div>
    </Content>

    <Sider style={{ background: '#f0f5ff', borderLeft: '1px solid #d9d9d9', padding: '20px' }} >
      <WechatOutlined   style={{ fontSize: '20px' }}/>
        Chat coming soon
      <Input placeholder="Write your question" />
    </Sider>

    </Layout>
    <Footer  style={{ background: '#f0f5ff', borderTop: '1px solid #d9d9d9' }}>@GRSU 2020</Footer>
  </Layout>
  );
}

export default App;