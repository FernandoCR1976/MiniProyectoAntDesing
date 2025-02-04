import {Table} from 'antd';

const columns = [
{
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
},

{
    title: 'Edad',
    dataIndex: 'edad',
    key: 'edad',
},
];
 const data = [
    {key: '1', nombre: 'Luis', edad: 25},
    {key: '2', nombre: 'Fernando', edad: 48},
 ];

 const TableComponent = () => (
    <Table columns={columns} dataSource={data}/>
 );

 export default TableComponent;

