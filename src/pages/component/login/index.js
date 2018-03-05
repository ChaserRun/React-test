import React, { Component } from 'react';
import { Modal } from 'antd';

class LoginModal extends Component{

    state = {
        visible: false
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }
    render () {
        return (
            <Modal
                title={<div style={{textAlign: 'center'}}>登录</div>}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                okText="确定"
                cancelText="取消"
            >

            </Modal>
        )
    }

};

export default LoginModal;