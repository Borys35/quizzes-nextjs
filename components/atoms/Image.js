import React from 'react';
import Image from 'next/image';
import classnames from 'classnames';

export default function Img({ src, rotate = 0, onClick, className, ...props }) {
  return (
    <>
      <img
        className={classnames('img', className)}
        src={src}
        onClick={onClick}
        {...props}
      />
      <style jsx>
        {`
          .img {
            transform: rotate(${rotate});
          }
        `}
      </style>
    </>
  );
}
