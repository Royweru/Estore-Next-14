import { List, Datagrid, TextField, } from 'react-admin';

export const SizeList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="value" />
        </Datagrid>
    </List>
);