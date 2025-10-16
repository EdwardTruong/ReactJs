import React from "react";
import ColorBox from "../../components/lesson01-props/ColorBox";

export default function ShowButton() {
  return (
    <section>
      <ColorBox color="red">This is Red </ColorBox>
      <ColorBox color="blue">This is BLUE </ColorBox>
      <ColorBox color="yellow">This is YELLOW </ColorBox>
    </section>
  );
}
