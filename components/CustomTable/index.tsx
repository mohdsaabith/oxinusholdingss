import React from "react";

import { Pagination, Table } from "antd";
import { PaginationProps } from "antd/lib/pagination";
import { useRouter } from "next/router";

import Colors from "../constants/colors";

// Define the type for a single data row
interface RowData {
  // Define your data structure here
}

// Define the props for the CustomTable component
interface CustomTableProps {
  columns: any;
  dataSource: RowData[];
  onChange: any;
  pagination?: boolean;
  loading?: boolean;
  page?: any;
  setPage?: any;
  limit?: any;
  total?: any;
}

export default function CustomTable({
  columns,
  dataSource,
  onChange,
  pagination = false,
  loading,
  page,
  setPage,
  limit,
  total,
}: CustomTableProps) {
  const router = useRouter();
  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return <a className="text-base">Previous</a>;
    }
    if (type === "next") {
      return <a className="text-base">Next</a>;
    }
    return originalElement;
  };

  const onPageChange = async (page: number) => {
    console.log("Page changed to", page);
    setPage(page);
    router.push(`?page=${page}`);
  };

  return (
    <div>
      <div className="">
        <Table<RowData>
          columns={columns}
          dataSource={dataSource}
          onChange={onChange}
          pagination={false}
          style={{
            marginBottom: 20,
            border: "2px solid #EAECF0",
            borderRadius: "8px",
          }}
          loading={loading}
          scroll={{ x: 400 }}
          // components={{
          //   header: {
          //     cell: (props: any) => (
          //       <th style={{ border: "1px solid #EAECF0" }}>
          //         {props.children}
          //       </th>
          //     ),
          //   },
          // }}
        />
      </div>
      {pagination ? (
        <div className="my-3">
          <div
            className=" justify-between items-center pagination-conatiner"
            style={{
              height: 65,
              paddingRight: 16,
              paddingLeft: 16,
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 8,
              borderColor: "#EAECF0",
              borderWidth: 1,
            }}
          >
            <div
              style={{ fontSize: 14, fontWeight: 500, color: Colors.gray }}
              className="text-sm font-medium text-gray"
            >
              Showing {(page - 1) * limit + 1} - {Math.min(page * limit, total)}{" "}
              of {total} Results
            </div>
            <div
              style={{
                width: 52,
                height: 6,
                backgroundColor: Colors.gray,
                borderRadius: 8,
                opacity: 0.5,
              }}
              className="pagination-scroll"
            ></div>
            <div className="flex items-center">
              <Pagination
                current={page ?? 1}
                total={total}
                pageSize={limit ?? 10}
                showPrevNextJumpers
                itemRender={itemRender}
                onChange={onPageChange}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
