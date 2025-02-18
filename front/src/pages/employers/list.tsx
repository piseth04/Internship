import { SearchOutlined, PhoneOutlined, PlusOutlined } from "@ant-design/icons";
import {
  DeleteButton,
  EditButton,
  FilterDropdown,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord, useNavigation } from "@refinedev/core";
import {
  Form,
  Input,
  Card,
  Space,
  Table,
  Popover,
  Button,
  Col,
  Row,
  Drawer,
} from "antd";
import { useState } from "react";
import { EmployerCreate } from "./create"; // Import the EmployerCreate component

export const EmployerList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const { tableProps, setFilters } = useTable({
    resource: "employers",
    filters: {
      initial: [],
      permanent: [
        {
          field: "name",
          operator: "contains",
          value: searchTerm,
        },
      ],
    },
  });

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setFilters([
      {
        field: "name",
        operator: "contains",
        value: value,
      },
    ]);
  };

  const PhoneNumberCell = ({ phoneNumber }: { phoneNumber: string }) => (
    <div className="flex justify-center">
      <Popover
        content={<span className="px-3 py-1 text-sm">{phoneNumber}</span>}
        trigger="hover"
        placement="right"
      >
        <PhoneOutlined className="text-blue-500 cursor-pointer hover:text-blue-600 text-lg" />
      </Popover>
    </div>
  );

  const { create } = useNavigation();

  return (
    <>
      <Card style={{ marginBottom: 10, padding: 8 }}>
        <Row justify="space-between" align="middle">
          <h2 style={{ fontSize: "16px", margin: 0 }}>Employees</h2>
          <Col>
            <Space>
              <Form layout="inline" style={{ margin: 0 }}>
                <Form.Item style={{ marginBottom: 0 }}>
                  <Input
                    prefix={<SearchOutlined />}
                    placeholder="Search by name..."
                    allowClear
                    onChange={(e) => handleSearch(e.target.value)}
                    style={{ width: 170, height: 33, fontSize: "14px" }}
                  />
                </Form.Item>
              </Form>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setIsDrawerVisible(true)}
              >
              New Employee
              </Button>
            </Space>
          </Col>
        </Row>
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

      <Table
        {...tableProps}
        className="bg-white"
        scroll={{ x: 800 }}
      >
        <Table.Column
          key="name"
          title="Full Name"
          dataIndex="name"
          width={200}
          sorter={(a, b) => a.name.localeCompare(b.name)}
          render={(text) => <span className="text-gray-700">{text}</span>}
        />
        <Table.Column
          key="number"
          title="Phone"
          dataIndex="number"
          width={80}
          align="center"
          filterIcon={<SearchOutlined />}
          render={(number) => <PhoneNumberCell phoneNumber={number} />}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Input
                placeholder="Search Phone"
                allowClear
                className="rounded-md"
                onChange={(e) =>
                  setFilters([
                    { field: "number", operator: "contains", value: e.target.value },
                  ])
                }
              />
            </FilterDropdown>
          )}
        />
        <Table.Column
          key="gender"
          title="Gender"
          dataIndex="gender"
          align="center"
          width={100}
          render={(text) => <span className="text-gray-600">{text}</span>}
        />
        <Table.Column
          key="position"
          title="Position"
          dataIndex="position"
          align="center"
          width={150}
          render={(text) => <span className="text-gray-600 font-medium">{text}</span>}
          sorter={(a, b) => a.position.localeCompare(b.position)}
        />
        <Table.Column
          key="actions"
          title="Actions"
          dataIndex="actions"
          width={120}
          align="center"
          render={(_, record: BaseRecord) => (
            <Space size="middle">
              <ShowButton
                recordItemId={record.id}
                hideText
              />
              <EditButton
                recordItemId={record.id}
                hideText
              />
              <DeleteButton
                recordItemId={record.id}
                hideText
              />
            </Space>
          )}
        />
      </Table>

      {/* Drawer that displays the EmployerCreate form */}
      <Drawer
        // title="Create Employer"
        width={500}
        onClose={() => setIsDrawerVisible(false)}
        visible={isDrawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <EmployerCreate />
      </Drawer>
    </>
  );
};
