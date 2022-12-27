import { NextPage } from "next";
import React, { useEffect, useState } from "react";
//import { Header } from "../../components/header";
import { Modal } from "../components/modal";
import { ProductCard } from "../components/productCard";
import { TotalCard } from "../components/totalCard";
import { deleteItem, getItens, Itens, postItem } from "../services/item";

import * as S from "../styles/lista/styles";
import { Header } from "../components/header";

type DataForm = {
  name: string;
  amount: number;
  value: string;
};

const List: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [itens, setItens] = useState<Itens>([] as Itens);
  const [reload, setReload] = useState(false);
  const [countValue, setCountValue] = useState(0);
  const [countItens, setCountItens] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleSubmit = async (data: DataForm) => {
    setOpenModal(!openModal);
    postItem(data);
  };
  const handleDelete = (id: number) => {
    deleteItem(id);
    setReload(!reload);
  };

  function sumItens(Itens: Itens){
    if(!Itens){
        setCountItens(0)
        setCountValue(0)
        return 
    }
    let sumValue = 0;
    let sumItens = 0;
    let aux = 0;
    for (let i = 0; i < Itens.length; i++) {
      aux = Itens[i].amount * Number(Itens[i].value);
      sumValue += aux;
      sumItens += Number(Itens[i].amount);
    };
    setCountItens(sumItens);
    setCountValue(sumValue);
  };

  useEffect(() => {
    const width = window.screen.width;
    setWindowWidth(width)
    const response = getItens();
    sumItens(response)
    setItens(response);
  }, [openModal, reload]);

  return (
    <S.Container windowWidth={windowWidth}>
      <Header back={true} />
      <S.HeadContainer windowWidth={windowWidth}>
        <TotalCard value={countItens} type="items" />
        <TotalCard value={countValue} type="money" />
      </S.HeadContainer>
      <S.Box>
        <S.Text style={{ width: "14%" }}>Qnt</S.Text>
        <S.Line />
        <S.Text style={{ width: "50%" }}>Item</S.Text>
        <S.Line />
        <S.Text style={{ width: "14%" }}>Valor</S.Text>
      </S.Box>
      <S.Content>
        {itens.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id as number}
            amount={Number(item.amount)}
            name={item.name}
            value={Number(item.value)}
            onClick={() => handleDelete(item.id as number)}
            onEdit={() => setReload(!reload)}
          />
        ))}
        <S.ButtonAdd onClick={() => setOpenModal(true)} windowWidth={windowWidth}>Adicionar</S.ButtonAdd>
      </S.Content>
      <Modal
        windowWidth={windowWidth}
        isOpen={openModal}
        onRequestClose={() => setOpenModal(!openModal)}
        onSubmit={(data) => handleSubmit(data)}
      />
    </S.Container>
  );
};
export default List;
