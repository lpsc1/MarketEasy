import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Header } from "../components/header";
import * as S from "../styles/index/styles";
import { BsTools, BsLinkedin } from "react-icons/bs";
import { sendNotification } from "../services/ipconfig";

interface HomeProps {
  NEXT_PUBLIC_API_HGBRASIL: string;
}

export default function Home({ NEXT_PUBLIC_API_HGBRASIL }: HomeProps) {
  const router = useRouter();

  useEffect(() => {
    console.log("VARIAVEL", NEXT_PUBLIC_API_HGBRASIL)
    sendNotification(NEXT_PUBLIC_API_HGBRASIL);
  }, []);

  return (
    <S.Container>
      <Header back={false} />
      <S.Content>
        <S.Text
          style={{ marginBottom: "10vh", fontWeight: "bold", border: "none" }}
        >
          Selecionar estilo:{" "}
        </S.Text>
        <S.OptionsBox>
          <S.Box onClick={() => router.push("./list")}>
            <img src="/list.png" className="img" />
          </S.Box>
          <S.Box>
            <S.Text className="text">
              Em breve... <BsTools />
            </S.Text>
          </S.Box>
        </S.OptionsBox>
      </S.Content>
      <S.Footer>
        <S.Text>by</S.Text>
        <S.Text className="footer">Lucas Carvalho</S.Text>
        <S.LinkedinLink
          href="https://www.linkedin.com/in/lpsc1/"
          target={"_blank"}
        >
          <BsLinkedin className="icon" />
        </S.LinkedinLink>
      </S.Footer>
    </S.Container>
  );
}
export async function getServerSideProps() {
  return {
    props: {
      NEXT_PUBLIC_API_HGBRASIL: process.env.NEXT_PUBLIC_API_HGBRASIL,
    },
  };
}
