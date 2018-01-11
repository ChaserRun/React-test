import React from 'react';
import { Row, Col, Card, List } from 'antd';
import { Link } from 'react-router-dom';


const SideBar = ({ writerList={}, hotBlog={}}) => {

    // const hotBlogList = hotBlog.data.rows || [];
    const writeList = (item) => {
        return (
            <Row style={{width:'100%'}}>
                <Col key={'name'} span={18}>
                    <img className={'photo'} src={'http://blog.okgoes.com/static/images/users/'+ item.avatar} alt={'photo'}/>
                    <span>{item.userName}</span>
                </Col>
                <Col key={'button'} span={6}>+关注</Col>
            </Row>
        )
    }
    return (
        <div>
            <Card key={'list'} bordered={true} hoverable={true} style={{margin:'0 0 30px 0',borderRadius:4}}>
                <h3>推荐作者</h3>
                <List
                    split={false}
                    dataSource={writerList.data || []}
                    renderItem={item => {return (<List.Item key={item.userId}>{writeList(item)}</List.Item>)}}
                />
            </Card>
            <Card key={'hot'}  bordered={true} hoverable={true} style={{margin:'0 0 30px 0',borderRadius:4}}>
                <h3>热门博客</h3>
                <List
                    split={false}
                    dataSource={hotBlog.data || []}
                    renderItem={item => { return (<List.Item key={item.id}><Link to={'#'}>{item.title}</Link></List.Item>)}}
                />
            </Card>
            <Card key={'ad'} bordered={true} hoverable={true} style={{margin:'0 0 30px 0',borderRadius:4}}>
                广告位
            </Card>
        </div>
    )
}
export default SideBar;