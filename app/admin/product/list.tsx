import { List, Datagrid, TextField} from 'react-admin';

export const ProductList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source='description' />
        </Datagrid>
    </List>
);