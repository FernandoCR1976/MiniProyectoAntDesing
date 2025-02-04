import {Form, Input, Button} from 'antd';

const FormComponent = ()=>{

    const onFinish = (values) =>{
        console.log('Valores del formulario: ',values);
    };

    return (
        <Form onFinish={onFinish}>
            <Form.Item label="Nombre" name='nombre'>
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>Enviar</Button>
            </Form.Item>
        </Form>
    );
};

export default FormComponent;