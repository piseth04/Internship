// import { 
//     DeleteButton, 
//     EditButton, 
//     FilterDropdown, 
//     ShowButton, 
//     useTable 
// } from "@refinedev/antd"; 
// import { 
//     BaseRecord, 
//     useNavigation 
// } from "@refinedev/core"; 
// import { 
//     Space, 
//     Table, 
//     Form, 
//     Input, 
//     Card, 
//     Row, 
//     Col, 
//     Tag, 
//     Typography, 
//     Button, 
//     Drawer 
// } from "antd";
// import { useState } from "react";
// import { 
//     PlusOutlined, 
//     SearchOutlined 
// } from "@ant-design/icons";
// import { CustomerCreate } from "./create"; // Import the CustomerCreate 

// const { Title } = Typography;

// // Function to format date
// const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     const year = date.getFullYear();
//     const month = months[date.getMonth()];
//     const day = date.getDate().toString().padStart(2, "0");
//     return `${year}-${month}-${day}`;
// };

// export const UnrealList = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [isDrawerVisible, setIsDrawerVisible] = useState(false);
//     const { tableProps, setFilters } = useTable({
//         // resource: "Unreals",
//         filters: {
//             initial: [],
//             permanent: [{ field: "name", operator: "contains", value: searchTerm }],
//         },
//         pagination: { pageSize: 10 },
//     });

//     const handleSearch = (value: string) => {
//         setSearchTerm(value);
//         setFilters([{ field: "name", operator: "contains", value }]);
//     };

//     const { create } = useNavigation();

//     return (
//         <>
//             <style>
//                 {`
//                     .ant-table-tbody > tr:hover > td {
//                         background-color:rgba(135, 227, 255, 0.26) !important;
//                         box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//                         position: relative;
//                         z-index: 1;
//                         transition: all 0.2s ease;
//                     }
//                     .ant-table-tbody > tr > td {
//                         transition: all 0.2s ease;
//                     }
//                 `}
//             </style>

//             <Card style={{ marginBottom: 8, padding: 8 }}>
//                 <Row justify="space-between" align="middle">
//                     <Col>
//                         <Title level={5} style={{ margin: 0 }}>Customers List</Title>
//                     </Col>
//                     <Col>
//                         <Space>
//                             <Form layout="inline">
//                                 <Form.Item>
//                                     <Input
//                                         prefix={<SearchOutlined />}
//                                         placeholder="Search by name..."
//                                         allowClear
//                                         onChange={(e) => handleSearch(e.target.value)}
//                                         style={{ width: 170, height: 30, fontSize: "14px" }}
//                                     />
//                                 </Form.Item>
//                             </Form>
//                             <Button
//                                 type="primary"
//                                 icon={<PlusOutlined />}
//                                 onClick={() => setIsDrawerVisible(true)}
//                             >
//                                 New Customer
//                             </Button>
//                         </Space>
//                     </Col>
//                 </Row>
//             </Card>

//             <Table {...tableProps} bordered rowKey="id" size="middle">
//                 <Table.Column key="name" title="Customer Name" dataIndex="name" sorter={(a, b) => a.name.localeCompare(b.name)} />
//                 <Table.Column key="nameEng" title="English Name" dataIndex="nameEng" sorter={(a, b) => a.name.localeCompare(b.name)} />
//                 <Table.Column key="nameKhm" title="Khmer Name" dataIndex="nameKhm" sorter={(a, b) => a.name.localeCompare(b.name)} />
            
//                 <Table.Column 
//                     key="phone" 
//                     title="Phone Number" 
//                     dataIndex="phone" 
//                     filterIcon={<SearchOutlined />} 
//                     filterDropdown={(props) => (
//                         <FilterDropdown {...props}>
//                             <Input
//                                 placeholder="Search Phone"
//                                 allowClear
//                                 onChange={(e) => setFilters([{ field: "phone", operator: "contains", value: e.target.value }])}
//                             />
//                         </FilterDropdown>
//                     )} 
//                     align="center" 
//                 />
//                 {/* <Table.Column 
//                     key="birthDate" 
//                     title="Date of Birth" 
//                     dataIndex="birthDate" 
//                     render={(value: string) => formatDate(value)} 
//                     align="center" 
//                 /> */}
//                 {/* <Table.Column key="gmail" title="G-Mail" dataIndex="gmail"  align="center"  /> */}
//                 {/* <Table.Column 
//                     key="gender" 
//                     title="Gender" 
//                     dataIndex="gender" 
//                     render={(gender: string) => <Tag color={gender === "Male" ? "blue" : "pink"}>{gender}</Tag>} 
//                     align="center" 
//                 /> */}
//                 {/* <Table.Column key="weight" title="Product Weight (Kg)" dataIndex="weight" align="center" /> */}
//                 {/* <Table.Column 
//                     key="pickup" 
//                     title="Item Pick Up" 
//                     dataIndex="pickup" 
//                     render={(pickup: string) => <Tag color={pickup === "Already" ? "green" : "red"}>{pickup}</Tag>} 
//                     align="center" 
//                 /> */}
//                 <Table.Column 
//                     key="actions" 
//                     title="Action" 
//                     dataIndex="actions" 
//                     render={(_, record: BaseRecord) => (
//                         <Space>
//                             <ShowButton recordItemId={record.id} hideText />
//                             <EditButton recordItemId={record.id} hideText />
//                             <DeleteButton recordItemId={record.id} hideText />
//                         </Space>
//                     )} 
//                     align="center" 
//                 />
//             </Table>

//             {/* Drawer that displays the CustomerCreate form */}
//             <Drawer
//                 width={500}
//                 onClose={() => setIsDrawerVisible(false)}
//                 visible={isDrawerVisible}
//                 bodyStyle={{ paddingBottom: 80 }}
//             >
//                 <CustomerCreate />
//             </Drawer>
//         </>
//     );
// };