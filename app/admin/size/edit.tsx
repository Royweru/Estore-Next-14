import * as React from 'react';
import {  SimpleForm, TextInput,  required, Edit } from 'react-admin';


export const SizeEdit= () => (
    <Edit>
         <SimpleForm>
            <TextInput source="name" validate={[required()]}  label="Size name"/>
            <TextInput source="value" validate={[required()]}  label="Value"/>
        </SimpleForm>
    </Edit>
);