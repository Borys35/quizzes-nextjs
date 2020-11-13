import React from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import ErrorMessage from '../atoms/ErrorMessage';

export default function Field({
  label,
  inputType,
  id,
  radioName,
  radioChecked,
  onRadioChange,
  onDelete,
  value,
  onChange,
  touched,
  errors,
  inputProps,
}) {
  return (
    <div className="field">
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        type={inputType}
        id={id}
        radioName={radioName}
        radioChecked={radioChecked}
        onRadioChange={onRadioChange}
        onDelete={onDelete}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
      {touched && errors && <ErrorMessage>{errors}</ErrorMessage>}
      <style jsx>{`
        .field {
          display: flex;
          flex-direction: column;
          text-align: center;
          :global(.label) {
            padding-bottom: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
