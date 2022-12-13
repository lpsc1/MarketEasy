import React from "react";

import * as S from "./styles";

interface TotalCardProps {
  type: "money" | "items";
  value: number;
}

export function TotalCard({ value, type }: TotalCardProps) {
  //const valueItem = value.toFixed(2);
  const valueFormatted = value.toFixed(2).replace('.', ',');
  const Box = () => {
    if (type === "money") {
      return (
        <>
          <S.Title>Total</S.Title>
          <S.Value>R$ {valueFormatted.replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}</S.Value>
        </>
      );
    } else {
      return (
        <>
          <S.Title>Itens</S.Title>
          <S.Value>{value}</S.Value>
        </>
      );
    }
  };
  return (
    <S.Container>
      <Box />
    </S.Container>
  );
}
