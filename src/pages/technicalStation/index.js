import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';
import './index.less';
import { listNavData } from "./data";

class TechnicalStation extends Component {
    render () {
        // console.log('技术栈===>', listNavData);
        return (
            <div className="technicalStation">
                <Row>
                    {
                        listNavData.map((item, key) => {
                            // console.log('=====>', item);
                            return  (
                                <Col key={item.id} span={6}>
                                    <Link to={'/'}>
                                        <Card className="listCard" key={key} bordered={true} hoverable={true}>
                                            <div className="photo">{item.img}</div>
                                            <h5 className="title">{item.title}</h5>
                                            <p className="detail">{item.content}</p>
                                        </Card>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }
}

export default connect(state => state.TechnicalStationData)(TechnicalStation);