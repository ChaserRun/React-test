import React, { Component } from 'react';
import { Row, Col, Card, Input, Pagination } from 'antd';
import moment from 'moment';
// import * as Data from  './data';

const Search = Input.Search;

class List extends Component {
    render () {
        //console.log('Data=====>', Data.bokeListData);
        const blogList = this.props.blogList || {};
        return (
            <div>
                <Card bordered={true} hoverable={true} style={{margin:'0 0 30px 0',borderRadius:4}}>
                    <Row>
                        <Col span={3}>提问</Col>
                        <Col span={3}>回答</Col>
                        <Col span={3}>写博客</Col>
                        <Col span={15} style={{textAlign: 'right'}}>
                            <Search
                                placeholder="请输入关键字"
                                style={{ width: 280 }}
                            />
                        </Col>
                    </Row>
                </Card>
                {
                    (blogList.data || []).map((item, key) => {
                        return(
                            <Card key={key} bordered={true} hoverable={true} style={{margin:'0 0 30px 0',borderRadius:4}}>
                                <Row>
                                    <Col span={18}>
                                        <p>{item.title}</p>
                                        <p>{item.text}</p>
                                        <p>{moment(item.createtime*1000).format('YYYY-MM-DD')}</p>
                                    </Col>
                                    <Col span={6}>图片</Col>
                                </Row>
                            </Card>
                        )
                    })
                }
                <Pagination showSizeChanger showQuickJumper defaultCurrent={blogList.current} total={blogList.rows}></Pagination>
            </div>
        )
    }
}

export default List;