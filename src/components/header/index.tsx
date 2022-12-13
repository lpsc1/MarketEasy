import { useRouter } from "next/router";
import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import * as S from "./styles";

interface HeaderProps {
  back: boolean;
}

export function Header({ back }: HeaderProps) {
  const router = useRouter();
  return (
    <S.Container>
      {back && (
        <button className="icon-box" onClick={() => router.push("/")}>
          <MdArrowBackIos className="icon" />
        </button>
      )}
      <S.Logo>
        <S.TextLogo1>Market</S.TextLogo1>
        <S.TextLogo2>Easy</S.TextLogo2>
      </S.Logo>
    </S.Container>
  );
}
