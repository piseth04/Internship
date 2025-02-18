// import { Show, TextField } from "@refinedev/antd";
// import { useShow } from "@refinedev/core";
// import { Typography, Card, Row, Col, Divider } from "antd";

// const { Title } = Typography;

// export const UnrealShow = () => {
//   const { query } = useShow({});
//   const { data, isLoading } = query;
//   const record = data?.data;

//   return (
//     <Show isLoading={isLoading}>
//       <Card bordered style={{ padding: 16 }}>
//         <Title level={4} style={{ textAlign: "center", marginBottom: 16 }}>
//           Customer Details
//         </Title>
//         <Divider />
//         <Row gutter={[16, 16]}>
//           <Col span={12}>
//             <Title level={5}>Name</Title>
//             <TextField value={record?.name} />
//           </Col>
//           <Col span={12}>
//             <Title level={5}>Phone Number</Title>
//             <TextField value={record?.phone} />
//           </Col>
//           <Col span={12}>
//             <Title level={5}>Date of Birth</Title>
//             <TextField value={record?.birthdate} />
//           </Col>
//           <Col span={12}>
//             <Title level={5}>G-Mail</Title>
//             <TextField value={record?.gmail} />
//           </Col>
//           <Col span={12}>
//             <Title level={5}>Gender</Title>
//             <TextField value={record?.gender} />
//           </Col>
//           {/* <Col span={12}>
//             <Title level={5}>Item Pick Up</Title>
//             <TextField value={record?.pickup} />
//           </Col> */}
//           {/* <Col span={12}>
//             <Title level={5}>Product Weight (Kg)</Title>
//             <TextField value={record?.weight} />
//           </Col> */}
//           {/* <Col span={12}>
//             <Title level={5}>Crate At</Title>
//             <TextField value={record?.createAt} />
//           </Col> */}
//         </Row>
//       </Card>
//     </Show>
//   );
// };
