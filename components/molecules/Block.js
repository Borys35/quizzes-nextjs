import React from 'react';
import { useMediaQuery } from 'react-responsive';
import classnames from 'classnames';

import theme from '../../styles/theme';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Image from '../atoms/Image';

export default function Block({
  heading,
  paragraph,
  btns = [],
  imgSrc,
  dark = false,
  reverse = false,
  className,
}) {
  const isWideTabletMin = useMediaQuery({
    minWidth: theme.breakpoints.wideTablet,
  });

  return (
    <section className={classnames('block', className)}>
      <div>
        <Heading>{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
        {btns.length > 0 && (
          <div className="btns">
            {btns.map(({ text, ...props }, i) => (
              <Button key={i} {...props}>
                {text}
              </Button>
            ))}
          </div>
        )}
      </div>
      <div className="img-container">
        <Image src={imgSrc} />
      </div>
      <style jsx>{`
        .block {
          display: flex;
          align-items: center;
          :global(.paragraph) {
            margin-top: 0.5em;
          }
          :global(.button) {
            margin-right: 1rem;
            &:last-child {
              margin-right: 0;
            }
          }
          :global(.img) {
            width: 100%;
          }
        }
        .img-container {
          width: 90%;
        }
        .btns {
          margin-top: 5rem;
        }
      `}</style>
      <style jsx>{`
        .block {
          background-color: ${dark
            ? theme.colors.backgroundDark
            : theme.colors.backgroundLight};
          flex-direction: ${!reverse ? 'row' : 'row-reverse'};
          text-align: ${reverse ? 'right' : 'left'};
        }
        .img-container {
          margin-left: ${!reverse ? '10%' : 0};
          margin-right: ${reverse ? '10%' : 0};
          display: ${isWideTabletMin ? 'block' : 'none'};
        }
      `}</style>
    </section>
  );
}
