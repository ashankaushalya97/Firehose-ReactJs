import { Input,Button,Row,Col,Table } from 'antd';

const FormStatus = () => (
    <>
    <Row gutter={16}>
        {/* column */}
        <Col span={6} className="footer-container" style={{minHeight:100}}>
            <div>
                <Row gutter={16} >
                    <Col span={12}>
                        <span className='custom-text' style={{display:'inline'}}>APPT CONF. NO: </span>
                    </Col>
                    <Col span={12} className="footer-col">
                        <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>456783</span>
                    </Col>
                </Row>
            </div>    
            <div>
                <Row gutter={16} >
                    <Col span={12}>
                        <span className='custom-text' style={{display:'inline'}}>INBOUND</span>
                    </Col>
                    <Col span={12}>
                        {/* <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>456783</span> */}
                    </Col>
                </Row>
            </div>    
            <div>
                <Row gutter={16} >
                    <Col span={12}>
                        <span className='custom-text' style={{display:'inline'}}>STATUS: </span>
                    </Col>
                    <Col span={12} className="footer-col">
                        <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>PENDING</span>
                    </Col>
                </Row>
            </div>    
            <div>
                <Row gutter={16} >
                    <Col span={12}>
                        <span className='custom-text' style={{display:'inline'}}>APPT TIME: </span>
                    </Col>
                    <Col span={12}className="footer-col">
                        <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>xxxxx</span>
                    </Col>
                </Row>
            </div>    
        </Col>
        {/* column */}
        <Col span={6} className="footer-container" style={{minHeight:100}}>
            <div>
                <Row gutter={16} >
                    <Col span={12}>
                        <span className='custom-text' style={{display:'inline'}}>CUSTOMER: </span>
                    </Col>
                    <Col span={12} className="footer-col">
                        <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>xxxxx</span>
                    </Col>
                </Row>
            </div>    
            <div>
                <Row gutter={16} >
                    <Col span={12}>
                        <span className='custom-text' style={{display:'inline'}}>BOOKING PARTY</span>
                    </Col>
                    <Col span={12} className="footer-col">
                        <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>xxxxx</span>
                    </Col>
                </Row>
            </div>    
            <div>
                <Row gutter={16} >
                    <Col span={12}>
                        <span className='custom-text' style={{display:'inline'}}>BOOKING CONTACT: </span>
                    </Col>
                    <Col span={12} className="footer-col">
                        <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>xxxxx</span>
                    </Col>
                </Row>
            </div>    
            <div>
                <Row gutter={16} >
                    <Col span={12}>
                        <span className='footer-data-text' style={{display:'inline'}}>Phone</span>
                    </Col>
                    <Col span={12} className="footer-col">
                        <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>xxxxx</span>
                    </Col>
                </Row>
            </div>    
        </Col>
        {/* column */}
        <Col span={6} className="footer-container" style={{minHeight:100}}>
            <div>
                <Row gutter={16} >
                    <Col span={12}>
                        <span className='custom-text' style={{display:'inline'}}>ORDERS: </span>
                    </Col>
                    <Col span={12}>
                        {/* <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>456783</span> */}
                    </Col>
                </Row>
            </div>    
            <div>
                <Row gutter={16} >
                    <Col span={8}>
                        <span className='footer-data-text' style={{display:'inline'}}>xxxxx</span>
                    </Col>
                    <Col span={8}>
                        <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>NOISE</span>
                    </Col>
                    <Col span={8}>
                        <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>PO:  xxxxx</span>
                    </Col>
                </Row>
            </div>    
            <div>
                <Row gutter={16} >
                    <Col span={8}>
                        <span className='footer-data-text' style={{display:'inline'}}>xxxxx</span>
                    </Col>
                    <Col span={8}>
                        <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>NOISE</span>
                    </Col>
                    <Col span={8}>
                        <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>PO:  xxxxx</span>
                    </Col>
                </Row>
            </div>    
            <div>
                <Row gutter={16} >
                    <Col span={8}>
                        <span className='footer-data-text' style={{display:'inline'}}>xxxxx</span>
                    </Col>
                    <Col span={8}>
                        <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>NOISE</span>
                    </Col>
                    <Col span={8}>
                        <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>PO:  xxxxx</span>
                    </Col>
                </Row>
            </div> 
        </Col>
        {/* column */}
        <Col span={6} className="footer-container" style={{alignContent:'center !important', minHeight:100}}>
            <div>
                <Row gutter={16} >
                    <Col span={12}>
                        <span className='custom-text' style={{display:'inline'}}>CHECK-IN TIME: </span>
                    </Col>
                    <Col span={12} className="footer-col">
                        <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>xxxxx</span>
                    </Col>
                </Row>
            </div>    
            <div>
                <Row gutter={16} >
                    <Col span={12}>
                        <span className='custom-text' style={{display:'inline'}}>CHECK-IN NO: </span>
                    </Col>
                    <Col span={12} className="footer-col">
                        <span className="footer-data-text" style={{display:'inline',textAlign:'right'}}>xxxxx</span>
                    </Col>
                </Row>
            </div>    
            <div>
                <Row gutter={16} >
                    <Col span={8}></Col>
                    <Col span={8}>
                    <Button type="primary" shape="round" style={{ background: "#F4D03F", borderColor: "#F4D03F",color:"#000000" }}>RE-PRINT</Button>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>    
        </Col>
    </Row>
    </>
);

export default FormStatus;