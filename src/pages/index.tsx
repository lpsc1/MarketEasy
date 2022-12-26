import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Header } from "../components/header";
import * as S from "../styles/index/styles";
import { BsTools, BsLinkedin } from "react-icons/bs";
import axios from "axios";
import { getIp } from "../services/ipconfig";
import emailjs from "emailjs-com";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const get = async () => {
      await getIp();
    };
    get();
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
