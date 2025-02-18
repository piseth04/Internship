import { DeleteButton, EditButton, ShowButton, useTable } from "@refinedev/antd";
import { Table, Button, Space, Form, Modal } from "antd";
import { useState } from "react";
import { NumCreate } from "./create";
import { BaseRecord } from "@refinedev/core";
import { PlusOutlined } from "@ant-design/icons";

export const NumList = () => {
  const [createModalVisible, setCreateModalVisible] = useState(false);

  const { tableProps } = useTable({
    resource: "nums",
    metaData: {
      populate: ["product", "employer"],
    },
  });

  const showModal = () => {
    setCreateModalVisible(true);
  };

  const handleCancel = () => {
    setCreateModalVisible(false);
  };

  return (
      <>
        {/* Create Button */}
        <Form layout="vertical">
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={showModal}
              style={{
                marginTop: 0,
                boxShadow: "none",
                transition: "box-shadow 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.49)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              Create Num
            </Button>
          </div>
        </Form>
        <Modal
          title="Create Num"
          open={createModalVisible}
          onCancel={handleCancel}
          footer={null}
          maskStyle={{ backdropFilter: 'blur(1px)' }}
        >
          <NumCreate
            visible={createModalVisible}
            onClose={handleCancel}
          />
        </Modal>

        <Table {...tableProps} rowKey="id"
          onRow={(record, rowIndex) => ({
            onMouseEnter: (e) => {
              e.currentTarget.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.boxShadow = "none";
            }
          })}
        >
          <Table.Column key="name" title="Name" dataIndex="name" />
          <Table.Column
            key="product"
            title="Product Category"
            dataIndex={["product", "name"]}
            render={(value, record: BaseRecord) => {
              return record?.product?.name || "No Product";
            }}
          />
          <Table.Column
            key="note"
            title="Note"
            dataIndex="note"
          />
          <Table.Column
            key="actions"
            title={<div style={{ textAlign: "center" }}>Actions</div>}
            dataIndex="actions"
            render={(_, record: BaseRecord) => (
              <div style={{ textAlign: "center" }}>
                <Space>
                  <EditButton recordItemId={record.id} hideText />
                  <DeleteButton recordItemId={record.id} hideText />
                </Space>
              </div>
            )}
          />
        </Table>
      </>
  );
};