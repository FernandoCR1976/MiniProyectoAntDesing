import {Typography} from 'antd';

const { Title, Paragraph, Text } = Typography;

const TypographyComponent = () => (
    <Typography>
        <Title level={1}>Titulo Principal</Title>
        <Paragraph>Aca se coloca el texto de parrafo</Paragraph>
        <Text strong> Texto resaltado</Text>
    </Typography>
);

export default TypographyComponent;