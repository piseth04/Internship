// import { Edit, useForm } from "@refinedev/antd";
// import { Card, Col, Form, Input, Row, Select, Typography } from "antd";

// const { Title } = Typography;

// export const UnrealEdit = () => {
//   const { formProps, saveButtonProps, query, formLoading } = useForm();
//   const customerData = query?.data?.data;

//   return (
//     <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
//       <Card bordered style={{ padding: 16 }}>
//         <Title level={4} style={{ textAlign: "center", marginBottom: 16 }}>
//           Edit Customer Details
//         </Title>
//         <Form {...formProps} layout="vertical">
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item
//                 label="Customer Name"
//                 name="name"
//                 rules={[{ required: true, message: "Please enter the customer name" }]}
//               >
//                 <Input placeholder="Enter full name" />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item
//                 label="Date of Birth"
//                 name="birthdate"
//                 rules={[{ required: true, message: "Please enter the date of birth" }]}
//               >
//                 <Input placeholder="YYYY-MM-DD" />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item
//                 label="Phone"
//                 name="phone"
//                 rules={[{ required: true, message: "Please enter a phone number" }]}
//               >
//                 <Input placeholder="Enter phone number" />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item
//                 label="G-Mail"
//                 name="gmail"
//                 rules={[{ required: true, message: "Please enter an email" }]}
//               >
//                 <Input placeholder="Enter email address" />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item label="Gender" name="gender">
//                 <Select placeholder="Select gender">
//                   <Select.Option value="Male">Male</Select.Option>
//                   <Select.Option value="Female">Female</Select.Option>
//                   <Select.Option value="Others">Others</Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//             {/* <Col span={12}>
//               <Form.Item label="Item Pick Up" name="pickup">
//                 <Select placeholder="Select pickup status">
//                   <Select.Option value="Already" style={{ color: "green" }}>
//                     Already
//                   </Select.Option>
//                   <Select.Option value="Not yet" style={{ color: "red" }}>
//                     Not Yet
//                   </Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col> */}
//           </Row>
//           {/* <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item
//                 label="Product Weight (Kg)"
//                 name="weight"
//                 rules={[{ required: true, message: "Please enter the product weight" }]}
//               >
//                 <Input type="number" placeholder="Enter weight in kg" suffix="Kg" />
//               </Form.Item>
//             </Col>
//           </Row> */}
//         </Form>
//       </Card>
//     </Edit>
//   );
// };
