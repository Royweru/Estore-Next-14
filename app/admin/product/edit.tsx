import * as React from 'react';
import {  SimpleForm, TextInput, required, Edit } from 'react-admin';


export const ProductEdit= () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={[required()]}  label="Category name"/>
        </SimpleForm>
    </Edit>
);