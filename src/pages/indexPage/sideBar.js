import React from 'react';
import { Row, Col, Card, List } from 'antd';


const SideBar = ({ writerList = {}}) => {

    const writeList = (item) => {
        return (
            <Row style={{width:'100%'}}>
                <Col key={'name'} span={18}>
                    <img className={'photo'} src={''} alt={'photo'}/>
                    <span>{item.name}</span>
                </Col>
                <Col key={'button'} span={6}>+关注</Col>
            </Row>
        )
    }
    return (
        <div>
            <Card key={'tag'} bordered={true} hoverable={true} style={{margin:'0 0 30px 0',borderRadius:4}}>
                <span className={'tag'}>Php</span>
                <span className={'tag'}>Javascript</span>
                <span className={'tag'}>Java</span>
                <span className={'tag'}>NodeJs</span>
                <span className={'tag'}>Web前端</span>
            </Card>
            <Card key={'list'} bordered={true} hoverable={true} style={{margin:'0 0 30px 0',borderRadius:4}}>
                <h5>推荐作者</h5>
                <List
                    split={false}
                    dataSource={writerList}
                    renderItem={item => (<List.Item key={item.userId}>{writeList(item)}</List.Item>)}
                />
            </Card>
            <Card key={'ad'} bordered={true} hoverable={true} style={{margin:'0 0 30px 0',borderRadius:4}}>
                广告位
            </Card>
        </div>
    )
}
export default SideBar;