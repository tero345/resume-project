import React from 'react';
import { Row, Col, Divider, Typography } from 'antd';

const { Title, Text } = Typography;

function project() {
    return (
        <div className="pageDiv" style={{ width:750, margin: '0 auto'}}> 
            <Title style={{textAlign:'center', paddingTop:'70px'}}>PROJECTS</Title>
            
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{backgroundColor:'#fff', borderRadius:15}}>
                <Col span={12} style={{height:300, padding: '10px', textAlign:'center'}}>
                    <img style={{width:360,border:'1px solid #eee', borderRadius:10}} src="image/pf.png" />
                </Col>
                <Col span={12} style={{border:'1px solid #eee', height:300, padding: '10px'}}>
                    <Title level={4}>포트폴리오 웹사이트</Title>

                    <p>
                        프론트엔드를 공부한 후 제작한 포트폴리오 페이지 입니다.<br/>
                        React를 사용해서 처음으로 만들어서 아직 부족한 부분이 많습니다.
                        꾸준하게 공부하면서 부족한 부분을 개선할려고 합니다.
                    </p>
                    <Divider/>

                    <Text code>React.js</Text>,
                    <Text code>Vercel</Text>
                </Col>
            </Row>
            <Divider/>
    </div>
    )
}

export default project
