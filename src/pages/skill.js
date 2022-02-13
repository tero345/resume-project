import React from 'react';
import { Row, Col, Divider, Typography, Button } from 'antd';

const { Title } = Typography;
const style = { padding: '8px 0'};

function skill() {
    return (
        <div className="pageDiv" style={{ width:750, margin: '0 auto'}}>
            <Title style={{textAlign:'center', paddingTop:'70px'}}>SKILLS</Title>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{backgroundColor:'#fff', borderRadius:10}}>
                <Col className="gutter-row">
                    <div style={style}>
                        <Title level={2}>Front-end</Title>
                        <Divider/>
                        <img style={{width:160}} src="image/icon1.jpeg" />
                        <img style={{width:180}} src="image/react.png" />
                        <img style={{width:180}} src="image/redux.png" />
                        <img style={{width:180, marginLeft:15}} src="image/jquery.png" />
                    </div>
                </Col>
            </Row>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{backgroundColor:'#fff', marginTop:10, borderRadius:10}}>
                <Col className="gutter-row" span={24}>
                    <div style={style}>
                        <Title level={2}>Back-end</Title>
                        <Divider style={{}}/>
                        <img style={{width:160}} src="image/java.png" />
                        <img style={{width:180}} src="image/spring.svg" />
                        <img style={{width:160}} src="image/nodejs.png" />
                    </div>
                </Col>
            </Row>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{backgroundColor:'#fff', marginTop:10, borderRadius:10}}>
                <Col className="gutter-row" span={24}>
                    <div style={style}>
                        <Title level={2}>Etc</Title>
                        <Divider style={{}}/>
                        <img style={{width:120}} src="image/git.png" />
                        <img style={{width:160}} src="image/vercel.jpg" />
                    </div>
                </Col>
            </Row>
            <Divider/>
        </div>
    )
}

export default skill;
