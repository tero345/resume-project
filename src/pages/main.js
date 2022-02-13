import React from 'react';
import { Row, Col, Divider, Typography} from 'antd';
import { MailOutlined, GithubOutlined, FormOutlined } from '@ant-design/icons';

const { Title } = Typography;

function main() {
    return (
        <div className="pageDiv" style={{ width:750, margin: '0 auto'}}> 
            <Title style={{textAlign:'center', paddingTop:'50px'}}></Title>
            
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={20} style={{height:300, padding: '20px 0'}}>
                    <span style={{fontSize:50, fontWeight:'bold'}}>
                            안녕하세요! <br/>
                            저는 개발자 강민석입니다.
                    </span>
                    <p/>
                    <h3> <MailOutlined /> Email :<a href="mailto:kmaniaen@gmail.com"> kmaniaen@gmail.com </a></h3>
                    <h3> <GithubOutlined /> GitHub : <a href="https://github.com/tero345" target="blank"> https://github.com/tero345 </a></h3>
                    <h3> <FormOutlined /> Blog :  </h3>
                </Col>
            </Row>
            <Divider/>
        </div>
    )
}

export default main
