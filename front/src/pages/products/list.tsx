import React, { useState, useEffect } from "react";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { DeleteButton, EditButton, ShowButton, useTable } from "@refinedev/antd";
import { BaseRecord, CrudFilters } from "@refinedev/core";
import { Form, Input, Space, Table, Drawer, Button, Card } from "antd";
import { ProductCreate } from "./create"; // Import the ProductCreate component

export const ProductList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false); // State to control drawer visibility

  const { tableProps, setFilters } = useTable({
    resource: "products",
  });

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    const filters: CrudFilters = searchTerm
      ? [
          {
            field: "phone",
            operator: "contains",
            value: searchTerm,
          },
        ]
      : [];
    setFilters(filters);
  }, [searchTerm, setFilters]);

  // Function to show the drawer
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  // Function to hide the drawer
  const onCloseDrawer = () => {
    
    setDrawerVisible(false);
  };

  return (
    <>
      {/* Search Input and Create Button */}
  <Form layout="vertical">
  <Card style={{ marginBottom: 10, padding: 8 }}>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <Form.Item style={{ marginBottom: 0 }}>
      <Input
        prefix={<SearchOutlined />}
        placeholder="Search by Code..."
        allowClear
        onChange={(e) => handleSearch(e.target.value)}
        style={{ width: 200, height: 32, fontSize: "14px" }}
      />
    </Form.Item>
    <Button
      type="primary"
      icon={<PlusOutlined />}
      onClick={showDrawer}
      style={{
        boxShadow: "none",
        transition: "box-shadow 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.49)")} 
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      Create Product
    </Button>
   
  </div>
</Card>

  <style>
        {`
          .ant-table-tbody > tr:hover > td {
            background-color:rgba(135, 227, 255, 0.26) !important;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            position: relative;
            z-index: 1;
            transition: all 0.2s ease;
          }
          .ant-table-tbody > tr > td {
            transition: all 0.2s ease;
          }
        `}
      </style>
</Form>


      {/* Table */}
      <Table {...tableProps}>
        
        <Table.Column
          key="name"
          title="Product"
          dataIndex="name"
          sorter={(a, b) => a.name.localeCompare(b.name)}
        />
        <Table.Column key="phone" title="Code" dataIndex="phone" />
        <Table.Column key="category" title="Category" dataIndex="category" />
        <Table.Column key="country" title="Countries" dataIndex="country" />
        <Table.Column
          key="actions"
          title={<div style={{ textAlign: "center" }}>Actions</div>}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <div style={{ textAlign: "center" }}>
              <Space>
                <ShowButton recordItemId={record.id} hideText />
                <EditButton recordItemId={record.id} hideText />
                <DeleteButton recordItemId={record.id} hideText />
              </Space>
            </div>
          )}
        />
      </Table>

      {/* Drawer for creating a product */}
      <Drawer
        title=""
        width={500}
        onClose={onCloseDrawer}
        open={drawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
        maskStyle={{ backdropFilter: 'blur(2px)' }}
      >
        <ProductCreate onClose={onCloseDrawer} />
      </Drawer>
    </>
  );
};