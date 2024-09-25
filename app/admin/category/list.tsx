import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

export const CategoryList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <ReferenceField  source='billboardId' reference='billboards'/>
        </Datagrid>
    </List>
);