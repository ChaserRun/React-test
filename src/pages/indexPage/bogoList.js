import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Input, Pagination, Icon } from 'antd';
import moment from 'moment';
import './bogoList.less';

const Search = Input.Search;

class List extends Component {

    render () {
        //console.log('Data=====>', Data.bokeListData);
        const blogList = this.props.blogList || {};
        const { changePages, handleSearch } = this.props;
        return (
            <div>
                <Card bordered={true} hoverable={true} style={{margin:'0 0 30px 0',borderRadius:4}}>
                    <Row>
                        <Col span={3}>提问</Col>
                        <Col span={3}>写博客</Col>
                        <Col span={18} style={{textAlign: 'right'}}>
                            <Search
                                placeholder="请输入关键字"
                                style={{ width: 280 }}
                                onSearch={(value) => handleSearch(value)}
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
                                            <div style={{width: 540}}>
                                                <Link to={'/detail/' + item.id}><h3>{item.title}</h3></Link>
                                                <p className={'text'}>{item.text}</p>
                                                <p>
                                                    <span>{item.evaluate ? item.evaluate.praise : 0}</span>
                                                    <span>{item.readCount ? item.readCount.readNum : 0}</span>
                                                    <span>{item.review || 0}</span>
                                                </p>
                                                <p>{moment(item.createtime*1000).format('YYYY-MM-DD')}</p>
                                            </div>
                                        </Col>
                                        <Col span={6}><img src={item.thumbnail ? 'http://blog.okgoes.com/' + item.thumbnail : null} alt=""/></Col>
                                    </Row>
                            </Card>
                        )
                    })
                }
                <Pagination
                    showSizeChanger={true}
                    showQuickJumper={true}
                    Current={blogList.current}
                    total={blogList.rows}
                    onChange={changePages}
                />
            </div>
        )
    }
}

export default List;