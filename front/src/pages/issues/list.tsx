import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { useTable } from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Button, Input, Space, Table, Tag } from "antd";
import { useState } from "react";
import { FormatDate } from "../../components";// Function to format date
import { useNavigate } from "react-router";

export const IssueList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { tableProps } = useTable({
    resource: "issues",
    metaData: {
      populate: ["customer"],
    },
  });

  // Filter data based on search term
  const filteredData = tableProps.dataSource?.filter((issue) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      // Search in English name
      issue.customer.name.toLowerCase().includes(searchLower)||
      // Search in status
      issue.status.toLowerCase().includes(searchLower) ||
      // Search in date
      issue.date.toLowerCase().includes(searchLower)
    );
  });
  const handleCreateClick = () => {
    navigate("/issues/create");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // This aligns the h2 to the left and the Space container to the right
          marginBottom: 9,
        }}
      >
        <h2>Issues Tracking</h2>
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
            onClick={handleCreateClick}
            style={{
              boxShadow: "none",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.49)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            New Issue
          </Button>
        </Space>
      </div>
      <Table {...tableProps} dataSource={filteredData}>
        <Table.Column 
          key="date" 
          title="Date" 
          dataIndex="date" 
          align="center"
          render={(text) => FormatDate(text)}
        />
        <Table.Column 
          key="status" 
          title="Status" 
          dataIndex="status" 
          align="center"
          sorter={(a, b) => a.status.localeCompare(b.status)}
          render={(status) => {
            let color = "blue"; // Default color for "Other"
            if (status === "Progressing") {
                color = "yellow";
            } else if (status === "Completed") {
                color = "green";
            } else if (status === "Cancel") {
                color = "red";
            }
            return <Tag color={color}>{status}</Tag>;  }} 
        />
        <Table.Column
          key="customer"
          title="Customer"
          dataIndex={["customer", "name"]}
          render={(value, record: BaseRecord) => {
            return record?.customer?.name || "No customer assigned";
          }}
          align="center"
        />
        <Table.Column 
          key="issueType" 
          title="Issue Type" 
          dataIndex="issueType" 
          align="center"
        />
      </Table>
    </>
  );
};
