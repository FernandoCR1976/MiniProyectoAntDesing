import React, { useState } from 'react';
import { Form, Input, Button, Select, Table, Tag, Space, Typography } from 'antd';

const { Option } = Select;
const { Title } = Typography;

const MiniProyectoAntD = () => {
  const [tasks, setTasks] = useState([]);
  const [form] = Form.useForm();
  const [filterPriority, setFilterPriority] = useState('Todas');

  const onFinish = (values) => {
    const newTask = {
      id: Date.now(),
      ...values,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    form.resetFields();
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleFilterChange = (value) => {
    setFilterPriority(value);
  };

  const filteredTasks = filterPriority === 'Todas'
    ? tasks
    : tasks.filter((task) => task.prioridad === filterPriority);

  const columns = [
    {
      title: 'Descripción',
      dataIndex: 'descripcion',
      key: 'descripcion',
    },
    {
      title: 'Prioridad',
      dataIndex: 'prioridad',
      key: 'prioridad',
      render: (prioridad) => {
        let color = 'gray';
        if (prioridad === 'Alta') {
          color = 'red';
        } else if (prioridad === 'Media') {
          color = 'orange';
        }
        return <Tag color={color}>{prioridad}</Tag>;
      },
    },
    {
      title: 'Acciones',
      key: 'acciones',
      render: (_, record) => (
        <Space>
          <Button onClick={() => toggleComplete(record.id)}>
            {record.completed ? 'Marcar como pendiente' : 'Completar'}
          </Button>
          <Button type="danger" onClick={() => deleteTask(record.id)}>
            Eliminar
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Title level={2}>Gestor de Tareas</Title>

      <Form form={form} onFinish={onFinish}>
        <Form.Item label="Descripción" name="descripcion" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Prioridad" name="prioridad" rules={[{ required: true }]}>
          <Select>
            <Option value="Alta">Alta</Option>
            <Option value="Media">Media</Option>
            <Option value="Baja">Baja</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Añadir tarea
          </Button>
        </Form.Item>
      </Form>

      <Space>
        <span>Filtrar por prioridad:</span>
        <Select defaultValue="Todas" onChange={handleFilterChange}>
          <Option value="Todas">Todas</Option>
          <Option value="Alta">Alta</Option>
          <Option value="Media">Media</Option>
          <Option value="Baja">Baja</Option>
        </Select>
      </Space>

      <Table columns={columns} dataSource={filteredTasks} />
    </div>
  );
};

export default MiniProyectoAntD;