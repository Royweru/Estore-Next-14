import * as React from 'react';
import { Create, SimpleForm, TextInput, required } from 'react-admin';


export const CategoryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]}  label="Category name"/>
        </SimpleForm>
    </Create>
);