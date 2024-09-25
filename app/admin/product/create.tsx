import * as React from 'react';
import { ArrayInput, BooleanInput, Create, NumberInput, ReferenceInput, SimpleForm, SimpleFormIterator, TextInput, required } from 'react-admin';


export const ProductCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]}  label="Product Name"/>
            <TextInput source="description" validate={[required()]}  label="Product Description"/>
           <ReferenceInput source='categoryId' reference='categories' />
           <ReferenceInput source='sizeId' reference='sizes' />
           <TextInput source='color' label="Color name" />
           <BooleanInput source='isFeatured' label="Featured" />
           <ArrayInput source='images'>
              <SimpleFormIterator>
                <TextInput source='url'  helperText={false}/>
              </SimpleFormIterator>
           </ArrayInput>   
           <NumberInput source='price' validate={[required()]}  label="Price of product" />
        </SimpleForm>
    </Create>
);