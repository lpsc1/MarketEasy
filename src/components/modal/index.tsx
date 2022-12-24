import React, { useEffect } from "react";
import ReactModal from "react-modal";
import { useForm } from "react-hook-form";
import theme from "../../styles/theme";
import * as S from "./styles";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: (data: FormData) => void;
  windowWidth: number;
}

type FormData = {
  name: string;
  amount: number;
  value: string;
};

export function Modal({ isOpen, onRequestClose, onSubmit, windowWidth }: ModalProps) {
  const { register, handleSubmit, setValue , resetField , formState:{}} = useForm<FormData>();

  useEffect(() => {
    resetField("amount", { defaultValue: "" });
    resetField("name", { defaultValue: "" });
    resetField("value", { defaultValue: "" });
  }, [isOpen]);

  return (
    <ReactModal
      ariaHideApp={false}
      className="modal"
      isOpen={isOpen}
      style={{
        content: {
          borderRadius: "10px",
          height: windowWidth > 1024 ? "50vh" : '45vh',
          marginInline: "5%",
          marginTop: "25vh",
          paddingTop: "4vh",
          backgroundColor: theme.COLORS.PRIMARY,
          border: `1px solid ${theme.COLORS.TERCIARY}`,
        },
        overlay: {
          backgroundColor: "rgb(0 0 0/ 0.9)",
          animation: 'bottom-to-top .5s linear',
        },
      }}
      onRequestClose={onRequestClose}
    >
      <S.Container onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Adicionar Item</S.Title>
        <S.Label>Item</S.Label>
        <S.ItemInput required {...register("name")} />
          <S.BoxLabel>
            <S.Label>Valor unitário</S.Label>
            <S.ValueInput
              type="text"
              placeholder="0,00"
              {...register("value", {onChange(event) {
                const value = event.target.value as string;
                const a = value.replace(/[a-zA-Z\u00C0-\u00FF ]+/i, '')
                setValue('value', a.replace(",","."));
              },})}
            />
          </S.BoxLabel>
          <S.BoxLabel>
            <S.Label>Quantidade</S.Label>
            <S.AmountInput
              required
              type="number"
              placeholder="0"
              {...register("amount")}
            />
          </S.BoxLabel>
        <S.Button type="submit" windowWidth={windowWidth}>Adicionar</S.Button>
      </S.Container>
    </ReactModal>
  );
}
