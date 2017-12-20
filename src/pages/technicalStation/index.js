import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

class TechnicalStation extends Component {
    render () {
        console.log('技术栈===>', this.props);
        return (
            <Row>
                <Col>TechnicalStation</Col>
            </Row>
        )
    }
}

export default connect(state => state.TechnicalStationData)(TechnicalStation);