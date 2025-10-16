import React from "react";

/**
 * Tạo mới 1 cái props khác nhau về nội dung nhưng giống nhau về hình dạng các thành phần liên quan.
 * Ví dụ ở đây là màu nên, ngoài ra có thể khác nhau về chiều dài, chiều cao v.v...
 * Thêm vào interface sau đó ở ShowButtom.tsx muốn thêm gì thì add nó vào.
 */
export interface props {
  color?: string;
  children?: React.ReactNode; // → cho phép truyền text, element, hoặc mảng element.
}

export function ColorBox(props: props) {
  const { color } = props;
  // const colorD = props.color;

  return (
    <button
      className="box"
      style={{
        backgroundColor: color,
        width: 100,
        height: 100,
        margin: 8,
        borderRadius: 8,
      }}
    ></button>
  );
}

export default ColorBox;
