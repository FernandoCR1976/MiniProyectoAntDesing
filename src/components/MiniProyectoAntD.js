import React, { useState } from 'react';
import { Form, Input, Button, Select, Table, Tag } from 'antd';

const { Option } = Select;

const MiniProyectoAntD = () => {
  const [tasks, setTasks] = useState([]);
  const [form] = Form.useForm();

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
        <Button onClick={() => toggleComplete(record.id)}>
          {record.completed ? 'Marcar como pendiente' : 'Completar'}
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h1>Gestor de Tareas</h1>
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

      <h2>Lista de Tareas</h2>
      <Table columns={columns} dataSource={tasks} />
    </div>
  );
};

export default MiniProyectoAntD;