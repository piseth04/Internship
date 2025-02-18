import { PhoneOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import {
  DeleteButton,
  EditButton,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Space, Table, Input, Popover, Tag, Button } from "antd";
import { useState } from "react";
import { FormatDate } from "../../components";// Function to format date
import { useNavigate } from "react-router";

export const CustomerList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { tableProps } = useTable({
    resource: "customers",
    metaData: {
      populate: ["orders"],
    },
  });

  // Filter data based on search term
  const filteredData = tableProps.dataSource?.filter((customer) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      // Search in English name
      customer.name.toLowerCase().includes(searchLower) ||
      // Search in Khmer name
      customer.nameKhm.toLowerCase().includes(searchLower) ||
      // Search in Code
      customer.code.toLowerCase().includes(searchLower) ||
      // Search in phone number
      customer.phone.toLowerCase().includes(searchLower) ||
       // Search in email
       customer.email.toLowerCase().includes(searchLower)
    );
  });

  const handleCreateClick = () => {
    navigate("/customers/create");
  };

  const PhoneNumberCell = ({ phoneNumber }: { phoneNumber: string }) => (
    <div>
      <Popover
        content={<span>{phoneNumber}</span>}
        trigger="hover"
        placement="top"
      >
        <PhoneOutlined />
      </Popover>
    </div>
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // This aligns the h2 to the left and the Space container to the right
          marginBottom: 9,
        }}
      >
        <h2>Customers</h2>
        <Space>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: 200 }}
          />
          <Button 
            type="primary" 
            icon={<PlusOutlined />}
            onClick={handleCreateClick} // Add this line
            style={{
              boxShadow: "none",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.49)")} 
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            New Customer
          </Button>
        </Space>
      </div>
      <style>
        {`
          .ant-table-tbody > tr:hover > td {
            // background-color:rgba(135, 227, 255, 0.17) !important;
            box-shadow: 0 4px 6px -1px rgba(151, 238, 240, 0.26), 0 4px 6px -1px rgba(151, 238, 240, 0.25);
            position: relative;
            z-index: 1;
            transition: all 0.2s ease;
          }
          .ant-table-tbody > tr > td {
            transition: all 0.2s ease;
          }
        `}
      </style>
      <Table {...tableProps} dataSource={filteredData}>
        {/* <Table.Column 
          key="id" 
          title="ID" 
          dataIndex="id" /> */}
        <Table.Column 
          key="name" 
          title="English Name" 
          dataIndex="name"
          sorter={(a, b) => a.name.localeCompare(b.name)} />
        <Table.Column 
          key="nameKhm" 
          title="Khmer Name" 
          dataIndex="nameKhm" />
         <Table.Column 
          key="code" 
          title="Code" 
          dataIndex="code"
          align="center" />
          <Table.Column 
          key="gender" 
          title="Gender" 
          dataIndex="gender"
          align="center"
          render={(gender) => {
            let color = ""; // Default color for "Other"
            if (gender === "Male") {
                color = "blue";
            } else if (gender === "Female") {
                color = "pink";
            }
            return <Tag color={color}>{gender}</Tag>;  }}
        />
        <Table.Column 
          key="phone" 
          title="Phone Number" 
          dataIndex="phone"   
          align="center" 
          render={(number) => <PhoneNumberCell phoneNumber={number} />} />
        {/* <Table.Column 
          key="email" 
          title="Email" 
          dataIndex="email" /> */}
        <Table.Column 
          key="behavior" 
          title="Behavior" 
          dataIndex="behavior"
          align="center" 
        />
        <Table.Column
          key="birth"
          title="Date of Birth"
          dataIndex="birth"
          align="center"
          render={(text) => FormatDate(text)}
        />
          {/* <Table.Column 
           key="note"
           title="Note"
           dataIndex="note"
          align="center" 
        /> */}
        {/* <Table.Column 
         key="order" 
         title="Order Code" 
         dataIndex={["orders"]}
         render={(value, record: BaseRecord) => {
           return record?.orders?.map((order: { code: any; }) => order.code).join(" ; ");
         }}
         align="center"
        /> */}
        <Table.Column
          key="actions"
          title="Actions"
          dataIndex="actions"
          align="center"
          render={(_, record: BaseRecord) => (
            <Space>
              <ShowButton recordItemId={record.id} hideText />
              <EditButton recordItemId={record.id} hideText />
              <DeleteButton recordItemId={record.id} hideText />
            </Space>
          )}
        />
      </Table>
    </>
  );
};
