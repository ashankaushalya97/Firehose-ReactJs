// import {Layout} from 'antd';
import { Input,Button,Row,Col,Table } from 'antd';
import './styles.css'
import "antd/dist/antd.css";
import FormStatus from '../components/FormStatus';
import {useDispatch,useSelector} from 'react-redux';
import {getCheckinData,saveCheckin,requestPdf} from '../action';
import { useEffect, useState } from 'react';
import { getCheckIn,getPdfUrl } from '../selectors';
import moment from 'moment';

const CheckIn = () => {
    const [selectedRow,setSelectedRow] = useState();
    const [customer,setCustomer] = useState('');
    const [orderNo,setOrderNo] = useState('');
    const [poNo,setPO] = useState('');
    const [confNo,setConfNo] = useState('');
    const [carrier,setCarrier] = useState();
    const [truck,setTruck] = useState();
    const [inbound,setInbound] = useState();
    const [outbound,setOutbound] = useState();
    let date = new Date();

    const dispatch = useDispatch();
    
    let checkInData = useSelector(getCheckIn);
    let pdfUrl = useSelector(getPdfUrl);
    
    let inboundData = [];
    let outboundData = [];

    useEffect(()=>{
        dispatch(getCheckinData());
    },[]);

    if(checkInData && checkInData?.appointments?.length>0){
        inboundData = checkInData?.appointments.filter(n => n.direction=='I');
        outboundData = checkInData?.appointments.filter(n => n.direction=='O');
    }

    const handleSelection = (record) => {
        record?.checkin? (selectedRow === record ? setSelectedRow(undefined) : setSelectedRow(record)): setSelectedRow(undefined);
    }
    const handleSearch = () => {
        if(customer || orderNo || poNo || confNo){
            setInbound(inboundData.filter(n => n.customer.toLowerCase().includes(customer.toLowerCase()) 
                && n.conf_no.includes(confNo) && n.orders.some(m => m.order_no.toLowerCase().includes(orderNo.toLowerCase()) && m.po_no.toLowerCase().includes(poNo.toLowerCase()))
            ));
            setOutbound(outboundData.filter(n => n.customer.toLowerCase().includes(customer.toLowerCase()) 
                && n.conf_no.includes(confNo) && n.orders.some(m => m.order_no.toLowerCase().includes(orderNo.toLowerCase()) && m.po_no.toLowerCase().includes(poNo.toLowerCase()))
            ));  
        }  
    }
    const handleClear = () => {
        clearFields();
    }
    const handleRefresh = () => {
        clearFields();
        dispatch(getCheckinData());
    }
    const handleSubmit = (record) => {
        let obj = { 
            'conf_no':record.conf_no, 
            'checkin': {
                'checkin_no': '' , 
                'checkin_time': moment(date).format('HH:mm'), 
                'checkin_date': moment(date).format('YYYY-MM-DD'), 
                'carrier': carrier, 
                'truck_no': truck, 
            }
           }
        dispatch(saveCheckin(obj));
        handleRefresh();
    }

    const clearFields = () => {
        setSelectedRow(undefined);
        setInbound(undefined);
        setOutbound(undefined);
        setCustomer('');
        setOrderNo('');
        setPO('');
        setConfNo('');
        setTruck('');
        setCarrier('');
    }
    const columns = [
        {
          title: 'Time',
          dataIndex: 'time',
        },
        {
          title: 'APPT CONF. NO',
          className: 'column-money',
          dataIndex: 'conf_no',
          align: 'right',
        },
        {
          title: 'CUSTOMER',
          dataIndex: 'customer',
        },
        {
          title: 'CARRIER',
          dataIndex: 'checkin',
          align: 'center',
        //   render: (text,record,index) => (!record.checkInNo? <Input defaultValue={text} bordered={false}/> : <span>{text}</span>)
          render: (data,record,index) => (record.checkin? <span style={{textAlign:'center',justifyContent:'center'}} >{data?.carrier}</span>:
                    <Input  value={carrier} bordered={false} disabled={record.checkin} onChange={(e)=>{setCarrier(e.target.value)}}/>)
        },
        {
          title: 'TRUCK',
          dataIndex: 'checkin',
        render: (data,record,index) => (record.checkin? <span>{data?.truck_no}</span> :
                    <Input value={truck} bordered={false} disabled={record.checkin} onChange={(e)=>{setTruck(e.target.value)}} />)
        },
        {
          title: 'CHECK-IN NO',
          dataIndex: 'checkin',
          render: (data,record,index) => data? data?.checkin_no:''
        },
        {
          title: 'PENDING',
          dataIndex: 'pending',
          render: (value,record,index) => (!record?.checkin?.checkin_no ? <Button disabled={!(carrier && truck)} onClick={(e)=>{e.stopPropagation();handleSubmit(record)}} type="primary" shape="round" style={{ background: "#F4D03F", borderColor: "#FCF3CF",color:"#000000"}}><span className="btn-text-checkin">CHECK IN</span></Button> : null)
        },
      ];

    const TableHeader = ({type}) => {
        return(
        <>
         <Row>
            <Col span={6} className="completed">
               <span className="table-status-text">COMPLETED: {type==='i'?inboundData.filter(m=> m?.checkin).length:outboundData.filter(m=> m?.checkin).length}</span>
            </Col>
            <Col span={12}>
                <h3 className="table-header">{type==='i'?'INBOUND':'OUTBOUND'}</h3>
            </Col>
            <Col span={6} className="pending">
                <span className="table-status-text">PENDING: {type==='i'?inboundData.filter(m=> !m?.checkin).length:outboundData.filter(m=> !m?.checkin).length}</span>
            </Col>
         </Row>
        </>
        )
    };

    return(
        <>
            <section>
                <div className="container">
                <Row gutter={16}>
                    <Col className="content" span={6} >
                        <Button className="btn-input" type="primary" shape="round" style={{ background: "#515A5A", borderColor: "#000000 " }} onClick={handleRefresh} ><span className="btn-text">REFRESH</span></Button>
                        <span className='custom-text'>DATE {moment(date).format('MM/DD/YYYY')}</span>
                    </Col>
                    <Col className="title-container" span={12}>
                        <h2 className="title">CHECK-IN-PAGE</h2>
                    </Col>
                    <Col className="search-container" span={4}>
                        <div className="search-form">
                            <Input value={customer} className="search-text" placeholder="CUSTOMER" size="small" onChange={(e)=>{setCustomer(e.target.value)}} />
                            <Input value={orderNo} className="search-text" placeholder="ORDER NO" size="small" onChange={(e)=>{setOrderNo(e.target.value)}} />
                            <Input value={poNo} className="search-text" placeholder="PO NO" size="small" onChange={(e)=>{setPO(e.target.value)}} />
                            <Input value={confNo} className="search-text" placeholder="APPT CONF. NO" size="small" onChange={(e)=>{setConfNo(e.target.value)}} />
                        </div>
                    </Col>
                    <Col span={2}  className="btn-search-container">
                        <Button className="btn-input btn-search" type="primary" shape="round" style={{ background: "#515A5A", borderColor: "#000000 " }} onClick={handleSearch} ><span className="btn-text">SEARCH</span></Button>
                        <Button className="btn-input btn-clear" type="primary" shape="round" style={{ background: "#515A5A", borderColor: "#000000 " }} onClick={handleClear} ><span className="btn-text">CLEAR</span></Button>
                    </Col>
                </Row>
                <Row gutter={16}>
                        <Col span={12} >
                            <div className="table-wrapper inbound-table">
                            <Table
                                columns={columns}
                                dataSource={inbound? inbound: inboundData}
                                bordered
                                pagination={false}
                                size="small"
                                title={() => (<TableHeader type="i"/>)}
                                onRow={(record) => ({
                                    onClick: () => handleSelection(record),
                                })}
                                rowClassName="table-row"
                                scroll={{ y: 240 ,x: 'max-content'}}
                            />
                            </div>
                        </Col>
                        <Col span={12} >
                            <div className="table-wrapper outbound-table">
                            <Table
                                columns={columns}
                                dataSource={outbound? outbound: outboundData}
                                bordered
                                pagination={false}
                                size="small"
                                title={() => (<TableHeader type="o"/>)}
                                onRow={(record) => ({
                                    onClick: () => handleSelection(record),
                                })}
                                rowClassName="table-row"
                                scroll={{ y: 240 ,x: 'max-content'}}
                            />
                            </div>
                        </Col>
                </Row>
                    <FormStatus data={selectedRow} onReprint={handleRefresh}/>
                </div>
            </section>
        </>
    );
}

export default CheckIn;