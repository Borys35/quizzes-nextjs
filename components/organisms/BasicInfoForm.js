import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Field from '../molecules/Field';
import Button from '../atoms/Button';
import theme from '../../styles/theme';

export default function BasicInfoForm({ value, onSetValue, onSubmit }) {
  const { name, description, image, category } = value;

  const formik = useFormik({
    initialValues: {
      name,
      description,
      image,
      category,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3).max(255).required(),
      description: Yup.string().min(5).max(255).required(),
    }),
    onSubmit: (values) => {
      onSetValue(values);
      onSubmit();
    },
  });

  return (
    <form className="basic-info-form" onSubmit={formik.handleSubmit}>
      <Field
        id="name"
        label="Name"
        inputType="text"
        touched={formik.touched.name}
        errors={formik.errors.name}
        inputProps={formik.getFieldProps('name')}
      />
      <Field
        id="description"
        label="Description"
        inputType="textarea"
        touched={formik.touched.description}
        errors={formik.errors.description}
        inputProps={formik.getFieldProps('description')}
      />
      <Field
        id="image"
        label="Image"
        inputType="file"
        touched={formik.touched.image}
        errors={formik.errors.image}
        inputProps={{
          ...formik.getFieldProps('image'),
          accept: 'image/x-png,image/jpeg,image/gif',
        }}
      />
      <Field
        id="category"
        label="Category"
        inputType="text"
        touched={formik.touched.category}
        errors={formik.errors.category}
        inputProps={formik.getFieldProps('category')}
      />
      <Button size="md">Go next</Button>
      <style jsx>{`
        .basic-info-form {
          max-width: ${theme.breakpoints.phone};
        }
      `}</style>
    </form>
  );
}
