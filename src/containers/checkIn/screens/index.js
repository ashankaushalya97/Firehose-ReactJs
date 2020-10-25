// import {Layout} from 'antd';
import { Input,Button,Row,Col,Table } from 'antd';
import './styles.css'
import "antd/dist/antd.css";
import FormStatus from '../components/FormStatus';
import {useDispatch,useSelector} from 'react-redux';
import {getCheckinData} from '../action';
import { useEffect, useState } from 'react';
import { getCheckIn } from '../selectors';

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
    //   render: (text,record,index) => (!record.checkInNo? <Input defaultValue={text} bordered={false}/> : <span>{text}</span>)
      render: (data,record,index) => <Input defaultValue={data?data?.carrier:''} bordered={false} disabled={record.checkin}/>
    },
    {
      title: 'TRUCK',
      dataIndex: 'checkin',
      render: (data,record,index) => <Input defaultValue={data?data?.truck_no:''} bordered={false} disabled={record.checkin} />
    },
    {
      title: 'CHECK-IN NO',
      dataIndex: 'checkin',
      render: (data,record,index) => data? data?.checkin_no:''
    },
    {
      title: 'PENDING',
      dataIndex: 'pending',
      render: (value,record,index) => (!record?.checkin?.checkin_no ? <Button onClick={(e)=>{e.stopPropagation();console.log('click')}} type="primary" shape="round" style={{ background: "#F4D03F", borderColor: "#FCF3CF",color:"#000000" }}>CHECK IN</Button> : null)
    },
  ];


const CheckIn = () => {
    const [selectedRow,setSelectedRow] = useState();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getCheckinData());
    },[]);
    useEffect(()=>{
        console.log('row :::::::::::: ',selectedRow);
    },[selectedRow]);

    const checkInData = useSelector(getCheckIn);

    let inboundData = [];
    let outboundData = [];

    if(checkInData && checkInData?.appointments?.length>0){
        inboundData = checkInData?.appointments.filter(n => n.direction=='I');
        outboundData = checkInData?.appointments.filter(n => n.direction=='O');
    }

    const handleSelection = (record) => {
        record?.checkin? (selectedRow === record ? setSelectedRow(undefined) : setSelectedRow(record)): setSelectedRow(undefined);
    }

    const TableHeader = ({title}) => (
        <>
         <Row>
            <Col span={6} className="completed">
               <span className="table-status-text">COMPLETED: 4</span>
            </Col>
            <Col span={12}>
                <h3 className="table-header">{title}</h3>
            </Col>
            <Col span={6} className="pending">
                <span className="table-status-text">PENDING: 10</span>
            </Col>
         </Row>
        </>
    );

    return(
        <>
            <section>
                <div className="container">
                <Row gutter={16}>
                    <Col className="content" span={6} >
                        <Button className="btn-input" type="primary" shape="round" style={{ background: "#515A5A", borderColor: "#000000 " }}><span className="btn-text">REFRESH</span></Button>
                        <span className='custom-text'>DATE 10/02/2020</span>
                    </Col>
                    <Col className="title-container" span={12}>
                        <h2 className="title">CHECK-IN-PAGE</h2>
                    </Col>
                    <Col className="search-container" span={4}>
                        <div className="search-form">
                            <Input className="search-text" placeholder="CUSTOMER" size="small" />
                            <Input className="search-text" placeholder="ORDER NO" size="small" />
                            <Input className="search-text" placeholder="PO NO" size="small" />
                            <Input className="search-text" placeholder="APPT CONF. NO" size="small" />
                        </div>
                    </Col>
                    <Col span={2}  className="btn-search-container">
                        <Button className="btn-input btn-search" type="primary" shape="round" style={{ background: "#515A5A", borderColor: "#000000 " }}><span className="btn-text">SEARCH</span></Button>
                        <Button className="btn-input btn-clear" type="primary" shape="round" style={{ background: "#515A5A", borderColor: "#000000 " }}><span className="btn-text">CLEAR</span></Button>
                    </Col>
                </Row>
                <Row gutter={16}>
                        <Col span={12} >
                            <div className="table-wrapper inbound-table">
                            <Table
                                columns={columns}
                                dataSource={inboundData}
                                bordered
                                pagination={false}
                                size="small"
                                title={() => (<TableHeader title="INBOUND"/>)}
                                onRow={(record) => ({
                                    onClick: () => handleSelection(record),
                                })}
                                rowClassName="table-row"
                            />
                            </div>
                        </Col>
                        <Col span={12} >
                            <div className="table-wrapper outbound-table">
                            <Table
                                columns={columns}
                                dataSource={outboundData}
                                bordered
                                pagination={false}
                                size="small"
                                title={() => (<TableHeader title="OUTBOUND"/>)}
                                onRow={(record) => ({
                                    onClick: () => handleSelection(record),
                                })}
                                rowClassName="table-row"
                            />
                            </div>
                        </Col>
                </Row>
                    <FormStatus data={selectedRow}/>
                </div>
            </section>
        </>
    );
}

export default CheckIn;