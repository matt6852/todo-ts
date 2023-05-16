import React, { ReactElement, useEffect } from "react";
import { Table, Row, Pagination, Tag, Image } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useDispatch, useSelector } from "react-redux";
import { fetchPoks } from "../store/slices/users/fetchUsers";
import { changeLimit, changePage } from "../store/slices/users/usersSlice";

const TableFooter: React.FC<PaginationProps> = ({ paginationProps, btn }) => {
 return (
  <Row justify='space-between'>
   <Pagination {...paginationProps} />
  </Row>
 );
};
interface TableProps {
 columns: ColumnsType<any>;
 data: any;
 colored?: boolean;
 handleRowClick?: (id: string) => void;
 currentPage: number;
 btn: ReactElement<any, any> | null;
 handleChangePage: (page: number) => void;
 pageSize: number;
 total: number;
}
interface PaginationPropsMain {
 current: number;
 total: number;
 defaultCurrent: number;
 pageSize: number;
 hideOnSinglePage: boolean;
 onChange: (page: number, pageSize: number) => void;
 showSizeChanger: boolean;
 locale: any;
 showQuickJumper: boolean;
}
interface PaginationProps {
 paginationProps: PaginationPropsMain;
 btn: ReactElement<any, any> | null;
}
const AntTable: React.FC<TableProps> = (
 //  {
 //  columns,
 //  data,
 //  handleRowClick,
 //  handleChangePage,
 //  currentPage,
 //  btn,
 //  pageSize,
 //  total,
 // }
) => {
 const dispath = useDispatch()
 useEffect(() => {
  dispath(fetchPoks())
 }, [])
 const { poks, limit, currentPage, loading } = useSelector((state) => state.users)
 const { rusults: data, count } = poks



 const columns = [
  {
   title: 'Name',
   dataIndex: 'name',
   key: 'name',
  },
  {
   title: 'Tags',
   key: 'info.types',
   dataIndex: 'info.types',
   render: (_: any, { info: { types } }: any) => {
    return <>
     {types.map((type: any) => {
      const typeName = type.type.name
      let color = typeName.length > 5 ? 'geekblue' : 'green';
      if (typeName === 'fire') {
       color = 'volcano';
      }
      return <Tag color={color} key={typeName}>{typeName}</Tag>
     })}
    </>

   },
  },
  {
   title: 'Avatar',
   key: 'info.sprites',
   dataIndex: 'info.sprites',
   render: (_: any, { info: { sprites } }: any) => {
    return <Image
     src={sprites.back_default}
    />
   },
  }

 ];
 const pagination = {
  current: currentPage,
  total: count,
  defaultCurrent: 1,
  pageSize: limit,
  hideOnSinglePage: true,
  onChange: (page: number, pageSize: number) => {
   // handleChangePage(page - 1);
   console.log(page, "page");
   console.log(pageSize, "pageSize");

   dispath(changePage(page))
   dispath(fetchPoks({ offset: page * pageSize, limit: pageSize }))

  },
  // showSizeChanger: false,
  showSizeChanger: true,
  onShowSizeChange: (current, pageSize) => {
   console.log(current, pageSize);
   dispath(fetchPoks({ offset: 0, limit: pageSize }))
   dispath(changeLimit(pageSize))
  },
  locale: {
   jump_to: "выбрать",
   page: "страницу",
  },
  showQuickJumper: 1 > 1000,
 };
 return (
  <Table
   loading={loading}
   onRow={(record, rowIndex) => {
    return {
     onClick: () => {
      // if (handleRowClick) {
      //  handleRowClick(record.id || rowIndex);
      // }
     },
    };
   }}
   rowKey={(record) => {
    return record.url || record.name;
   }}
   bordered
   columns={columns}
   dataSource={data}
   pagination={false}
   footer={() => <TableFooter paginationProps={pagination} />}
  />
 );
};

export default AntTable;
