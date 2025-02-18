// import React from 'react';
// import { Create, useForm } from "@refinedev/antd";
// import { Card, Form, Input, Select, DatePicker, Row, Col, Typography, AutoComplete } from "antd";

// const { Title } = Typography;

// export const UnrealCreate = () => {
//   const { formProps, saveButtonProps } = useForm();

//   // AutoComplete logic for email
//   const [options, setOptions] = React.useState<{ label: string; value: string }[]>([]);
//   const handleSearch = (value: string) => {
//     setOptions(() => {
//       if (!value || value.includes('@')) {
//         return [];
//       }
//       return ['gmail.com'].map((domain) => ({
//         label: `${value}@${domain}`,
//         value: `${value}@${domain}`,
//       }));
//     });
//   };

//   return (
//     <Create saveButtonProps={saveButtonProps}>
//         <Form {...formProps} layout="vertical">
       
//               <Form.Item
//                 label="Customer Name"
//                 name="name"
//                 rules={[{ required: true, message: "Please enter the customer name" }]}
//               >
//                 <Input placeholder="Enter full name" />
//               </Form.Item>
           
//               <Form.Item
//                 label="Phone"
//                 name="phone"
//                 rules={[{ required: true, message: "Please enter a phone number" }]}
//               >
//                 <Input placeholder="Enter phone number" />
//               </Form.Item>
           
//               <Form.Item label="Gender" name="gender">
//                 <Select placeholder="Select gender">
//                   <Select.Option value="Male">Male</Select.Option>
//                   <Select.Option value="Female">Female</Select.Option>
//                   <Select.Option value="Others">Others</Select.Option>
//                 </Select>
//               </Form.Item>
            
//               <Form.Item
//                 label="G-mail"
//                 name="gmail"
//                 rules={[{ required: true, message: "Please enter an email" }]}
//               >
                // <AutoComplete
                //   style={{ width: "100%" }}
                //   onSearch={handleSearch}
                //   placeholder="Enter email address"
                //   options={options}
                // />
//              </Form.Item>
            //   <Form.Item
            //     label="Date of Birth"
            //     name="birthdate"
            //     rules={[{ required: true, message: "Please select a date of birth" }]}
            //   >
            //     <DatePicker format="YYYY-MM-DD" placeholder="Select date" style={{ width: "100%" }} />
            //   </Form.Item>
            
//               {/* <Form.Item
//                 label="Product Weight (Kg)"
//                 name="weight"
//                 rules={[{ required: true, message: "Please enter the product weight" }]}
//               >
//                 <Input type="number" placeholder="Enter weight in kg" suffix="Kg" />
//               </Form.Item> */}
//         </Form>
//     </Create>
//   );
// };

// export default CustomerCreate;

