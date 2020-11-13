import React from 'react';

import theme from '../../styles/theme';
import Image from '../atoms/Image';

export default function Input({
  type,
  id,
  radioName,
  radioChecked,
  onRadioChange,
  onDelete,
  ...props
}) {
  return (
    <div className="input-container">
      {radioName && (
        <input
          type="checkbox"
          name={radioName}
          checked={radioChecked}
          onChange={onRadioChange}
        />
      )}
      <input className="input" type={type} id={id} {...props} />
      {onDelete && <Image src="/delete.svg" onClick={onDelete} />}
      <style jsx>{`
        .input-container {
          display: flex;
        }
        .input {
          background-color: ${theme.colors.atomSecondary};
          padding: 0.5em 1em;
          border-radius: 4px;
          border: none;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
