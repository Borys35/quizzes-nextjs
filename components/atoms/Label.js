import React from 'react';

export default function Label({ children, htmlFor, ...props }) {
  return (
    <label className="label" htmlFor={htmlFor} {...props}>
      {children}
      <style jsx>{``}</style>
    </label>
  );
}
