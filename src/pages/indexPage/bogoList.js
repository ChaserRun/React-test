import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import * as Data from  './data';

class List extends Component {
    render () {
        console.log('Data=====>', Data.bokeListData);
        return (
            <div>
                <Card bordered={true} hoverable={true} style={{margin:'0 0 30px 0',borderRadius:4}}>
                    <Row>
                        <Col span={3}>提问</Col>
                        <Col span={3}>回答</Col>
                        <Col span={3}>写博客</Col>
                        <Col span={9}></Col>
                    </Row>
                </Card>
                {
                    Data.bokeListData.map((item, key) => {
                        return(
                            <Card bordered={true} hoverable={true} style={{margin:'0 0 30px 0',borderRadius:4}}>
                                <Row key={key}>
                                    <Col span={18}>
                                        <p>{item.title}</p>
                                        <p>{item.content}</p>
                                        <p>{item.time}</p>
                                    </Col>
                                    <Col span={6}>图片</Col>
                                </Row>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default List;