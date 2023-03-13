import React from 'react';
interface DropIconProps {
  color?: string;
  fill?: string;
  heigth?: string;
  width?: string;
}
export default function DropIcon({
  color = '#fff',
  fill = '#fff',
  heigth = '22',
  width = '22',
}: DropIconProps) {
  return (
    <div>
      <i>
        <svg
          height={heigth}
          width={width}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 320 512'
          fill={fill}
          color={color}
        >
          <path d='M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z' />
        </svg>
      </i>
    </div>
  );
}
