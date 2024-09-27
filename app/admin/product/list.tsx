import { List, Datagrid, TextField, ReferenceField, NumberField, BooleanField} from 'react-admin';

export const ProductList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source='description' />
            <ReferenceField source='sizeId' reference='sizes' />
            <ReferenceField source='categoryId' reference='categories' />
            <NumberField source='price' />
            <BooleanField source='isFeatured' />
        </Datagrid>
    </List>
);