import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Header } from "../../components/header";
import { Modal } from "../../components/modal";
import { ProductCard } from "../../components/productCard";
import { TotalCard } from "../../components/totalCard";
import { deleteItem, getItens, Itens, postItem } from "../../services/item";

import * as S from "./styles";
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

  const handleSubmit = async (data: DataForm) => {
    setOpenModal(!openModal);
    postItem(data);
  };
  const handleDelete = (id: number) => {
    deleteItem(id);
    setReload(!reload);
  };
  useEffect(() => {
    const response = getItens();
    setItens(response);
    var sumValue = 0;
    var sumItens = 0;
    var aux = 0;
    for (var i = 0; i < response.length; i++) {
      aux = response[i].amount * Number(response[i].value);
      sumValue += aux;
      sumItens += Number(response[i].amount);
      console.log(sumItens)
    };
    setCountItens(sumItens);
    setCountValue(sumValue);  
  }, [openModal, reload]);

  return (
    <S.Container>
      <Header back={true} />
      <S.HeadContainer>
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
        <S.ButtonAdd onClick={() => setOpenModal(true)}>Adicionar</S.ButtonAdd>
      </S.Content>
      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(!openModal)}
        onSubmit={(data) => handleSubmit(data)}
      />
    </S.Container>
  );
};
export default List;
