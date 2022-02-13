import React from 'react';
import { Row, Col, Divider, Typography } from 'antd';

const { Title, Text } = Typography;

function introduce() {
    return (
        <div className="pageDiv" style={{ width:750, margin: '0 auto'}}> 
            <Title style={{textAlign:'center', paddingTop:'70px'}}>ABOUT ME</Title>
            
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{backgroundColor:'#fff', borderRadius:15}}>
                <Col span={23} style={{height:300, padding: '20px 0'}}>
                    <span style={{fontSize:18, fontWeight:''}}>
                        6년 차 개발자로 Java, Spring, Javascript, MySQL, Git, Linux 등을 사용하여 개발자 강민석입니다.<p/>

                        개발을 좋아하는 개발자입니다. <br/>
                        조금더 전문적으로 공부하고 싶어서 학습한 프로젝트에서 구현하는 재미를 얻었고 나아가 서비스를 구현, 개선해보고 싶다는
                        생각이 들었습니다.<p/>

                        시각적으로 생각한것이 실체화가 되어 구현이 되어가는 과정을 즐기게 되었고 프론트엔드를 더 전문적으로 배우고 싶다는 생각이 들었습니다.
                        아직은 많이 부족하지만 현재의 자신을 받아들이고 더 좋은 개발자로 성장하기 위해 더 치열하게 학습하며 노력하고 있습니다. <br/>
                    </span>
                </Col>
            </Row>
            
            <Divider/>
        </div>
    )
}

export default introduce;
