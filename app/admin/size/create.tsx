import * as React from 'react';
import { Create, SimpleForm, TextInput,  required } from 'react-admin';


export const SizeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]}  label="Size name"/>
            <TextInput source="value" validate={[required()]}  label=" Value"/>
        </SimpleForm>
    </Create>
);