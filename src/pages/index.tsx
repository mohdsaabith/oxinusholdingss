import React from "react";
import CustomTable from "../../components/CustomTable";
import { Button, Dropdown, Menu, Select, Tag } from "antd";
import { EllipsisOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { TableProps } from "antd/lib";
import { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  status: string;
  deviceType: string;
  deviceName: string;
  dateIssued: any;
  oneTimePasscode: any;
}

const LIMIT = 10;

export default function Home() {
  const [page, setPage] = React.useState(1);

  const menu = (id: number) => (
    <Menu>
      <Menu.Item key="0">
        <a href={`/projects/${id}`}>View</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href={`/projects/${id}/edit`}>Edit</a>
      </Menu.Item>
    </Menu>
  );

  const columns: ColumnsType<DataType> = [
    {
      title: "Sl.No",
      dataIndex: "slNo",
      // sorter: (a, b) => a.slNo.length - b.slNo.length,
      render: (text, record, index) => index + 1,
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
      render: (status) => {
        let color = "";
        let textColor = "";
        switch (status) {
          case "Revoked":
            color = "#DB3840";
            textColor = "#FFFFFF";
            break;
          case "Expired":
            color = "#8B8BA2";
            textColor = "#FFFFFF";
            break;
          case "Pending":
            color = "#F4CE49";
            textColor = "#FFFFFF";
            break;
          case "Completed":
            color = "#169A3C";
            textColor = "#FFFFFF";
            break;
          case "Active":
            color = "#84A6FF";
            textColor = "#FFFFFF";
            break;
          default:
            color = "blue";
        }
        const tagStyle = {
          backgroundColor: color,
          color: textColor,
          fontWeight: 500,
        };
        return (
          <Tag style={tagStyle} key={status}>
            &#8226; {status}
          </Tag>
        );
      },
    },
    {
      title: "Device Type",
      dataIndex: "deviceType",
      sorter: (a, b) => a.deviceType.length - b.deviceType.length,
    },
    {
      title: "Device Name",
      dataIndex: "deviceName",
      sorter: (a, b) => a.deviceName.length - b.deviceName.length,
    },
    {
      title: "Date Issued",
      dataIndex: "dateIssued",
      sorter: (a, b) => a.dateIssued.length - b.dateIssued.length,
    },

    {
      title: "One Time Passcode",
      dataIndex: "oneTimePasscode",
      sorter: (a, b) => a.oneTimePasscode.length - b.oneTimePasscode.length,
    },
    {
      title: "Actions",
      dataIndex: "key",
      render: (text, record: any) => {
        return (
          <Dropdown overlay={() => menu(record?.id)} trigger={["click"]}>
            <Button size="small" type="link">
              <EllipsisOutlined />
            </Button>
          </Dropdown>
        );
      },
    },
  ];

  const data: DataType[] = [
    {
      key: 1,
      status: "Revoked",
      deviceType: "Apple iOS",
      deviceName: "spotlight-int-dev-01",
      dateIssued: "08/28/2023 22:52",
      oneTimePasscode: "TGS^$%ttUW",
    },
    {
      key: 2,
      status: "Expired",
      deviceType: "Apple iOS",
      deviceName: "spotlight-int-dev-01",
      dateIssued: "08/28/2023 22:52",
      oneTimePasscode: "TGS^$%ttUW",
    },
    {
      key: 3,
      status: "Revoked",
      deviceType: "Apple iOS",
      deviceName: "spotlight-int-dev-01",
      dateIssued: "08/28/2023 22:52",
      oneTimePasscode: "TGS^$%ttUW",
    },
    {
      key: 4,
      status: "Expired",
      deviceType: "Apple iOS",
      deviceName: "spotlight-int-dev-01",
      dateIssued: "08/28/2023 22:52",
      oneTimePasscode: "TGS^$%ttUW",
    },
    {
      key: 5,
      status: "Pending",
      deviceType: "Apple iOS",
      deviceName: "spotlight-int-dev-01",
      dateIssued: "08/28/2023 22:52",
      oneTimePasscode: "TGS^$%ttUW",
    },
    {
      key: 6,
      status: "Active",
      deviceType: "Apple iOS",
      deviceName: "spotlight-int-dev-01",
      dateIssued: "08/28/2023 22:52",
      oneTimePasscode: "TGS^$%ttUW",
    },
    {
      key: 7,
      status: "Completed",
      deviceType: "Apple iOS",
      deviceName: "spotlight-int-dev-01",
      dateIssued: "08/28/2023 22:52",
      oneTimePasscode: "TGS^$%ttUW",
    },
    {
      key: 8,
      status: "Completed",
      deviceType: "Apple iOS",
      deviceName: "spotlight-int-dev-01",
      dateIssued: "08/28/2023 22:52",
      oneTimePasscode: "TGS^$%ttUW",
    },
    {
      key: 9,
      status: "Completed",
      deviceType: "Apple iOS",
      deviceName: "spotlight-int-dev-01",
      dateIssued: "08/28/2023 22:52",
      oneTimePasscode: "TGS^$%ttUW",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <CustomTable
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={true}
        page={page}
        setPage={setPage}
        limit={LIMIT}
        total={data.length}
      />
    </div>
  );
}
