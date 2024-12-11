import React from 'react'
import { useFormik } from 'formik';
import { AnyObject, object } from 'yup';
import { FormProps } from './form.types';
import { Box, Button, FormControl, FormHelperText, Stack } from '@mui/material';

export const Form = <T extends Record<string, unknown>>(props: FormProps<T>) => {
  const { onSubmit, data, fields, submitLabel, loading, readOnly} = props;

  // TODO: use effect when need dynamic changes
  const fieldNames = Object.keys(fields);
  const yupObject = fieldNames.reduce((res, key) => {
    const field = fields[key];
    if(field.validation) {
      res[key] = field.validation;
    }
    return res;
  }, {} as AnyObject);

  const { values, errors, submitForm, setFieldValue } = useFormik<T>({
    onSubmit: onSubmit || console.log,
    initialValues: data || {} as T,
    enableReinitialize: true,
    validationSchema: object(yupObject),
    validateOnBlur: false,
    validateOnChange: false,
  });

  return (
    <Stack
      component="form"
      gap={2}
    >
      {
        fieldNames.map((key: string) => {
          const field = fields[key];
          if (field.show && !field.show(values)) {
            return <></>;
          }

          return (
            <FormControl
              key={`form-${key}`}
              variant='standard'
            >
              {/* <InputLabel>{field.label} sdsd</InputLabel> */}
              <field.input
                label={field.label}
                placeholder={field.props?.placeholder}
                defaultValue={values[key] as T[keyof T]}
                readOnly={readOnly}
                onChange={(val: T[keyof T])=>{
                  setFieldValue(key, val);
                }}
              />
              {
                errors && errors[key] && (
                  <FormHelperText error={!!errors}>{errors[key] as string}</FormHelperText>
                )
              }
            </FormControl>
          )
        })
      }
      {!readOnly && (
        <Button
          onClick={submitForm}
          variant='contained'
          size='large'
        >
          {submitLabel || 'Submit'}
        </Button>
      )}
    </Stack>
  )
}
