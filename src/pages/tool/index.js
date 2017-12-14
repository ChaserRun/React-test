import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

class Tool extends Component {
    render () {
        console.log('props===>', this.props);
        return (
            <Row>
                <Col>tool</Col>
            </Row>
        )
    }
}

export default connect(state => state.ToolData)(Tool);