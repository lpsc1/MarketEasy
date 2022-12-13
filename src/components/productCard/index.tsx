import React, { ChangeEvent, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { MdOutlineEditOff } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import * as S from "./styles";
import { deleteItem, getItens, Itens, postItem } from "../../services/item";

interface ProductCardProps {
  amount: number;
  name: string;
  value: number;
  id: number;
  onClick: () => void;
  onEdit: () => void;
}

export function ProductCard({
  id,
  amount,
  name,
  value,
  onClick,
  onEdit,
}: ProductCardProps) {
  const [editValue, setEditValue] = useState(String(value));
  const [trasnlateX, setTranslateX] = useState(0);
  const [move, setMove] = useState(0);
  const [moving, setMoving] = useState(false);
  const [editing, setEditing] = useState(false);
  function handleDrag(e: any) {
    var can = move - e.touches[0].clientX;
    if (can < 0) {
      setMoving(false);
    }
    if (can > 50) {
      setMoving(true);
      setTranslateX(120);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>, input: string) => {
    const response = getItens();
    switch (input) {
      case "amount":
        response.map((item) => {
          if (item.id !== id) {
            return;
          }
          item.amount = Number(e.target.value);
        });
        postItem(response as any, true);
        break;
      case "item":
        response.map((item) => {
            if (item.id !== id) {
                return;
            }
            item.name = e.target.value;
        });
        postItem(response as any, true);
        break;
        case "value":
            setEditValue(e.target.value.replace(/[a-zA-Z\u00C0-\u00FF ]+/i, '').replace(',','.'))
            response.map((item) => {
          if (item.id !== id) {
            return;
          }
          item.value = e.target.value.replace(/[a-zA-Z\u00C0-\u00FF ]+/i, '').replace(',','.');
        });
        postItem(response as any, true);
        break;
    }
  };
  //console.log("SONO", editValue)

  return (
    <S.Main>
      <S.Container
        onTouchStartCapture={(e) => [setMove(e.touches[0].clientX)]}
        onTouchMove={(e) => handleDrag(e)}
        moving={moving}
        editing={editing}
      >
        <S.AmountInput
          disabled={!editing}
          type="number"
          placeholder="0"
          defaultValue={amount.toFixed()}
          onChange={(e) => handleChange(e, "amount")}
        />
        <S.Line />
        <S.ItemInput
          disabled={!editing}
          type="text"
          maxLength={30}
          placeholder="Item"
          defaultValue={name}
          onChange={(e) => handleChange(e, "item")}
        />
        <S.Line />
        <S.ValueInput
          disabled={!editing}
          type="text"
          placeholder="0,00"
          value={!editing ? Number(editValue).toFixed(2) : editValue}
          onChange={(e) => handleChange(e, "value")}
        />
      </S.Container>
      <S.Edit
        moving={moving}
        onClick={() => [setEditing(!editing), setMoving(false)]}
        onClickCapture={onEdit}
  >
        {editing ? (
          <MdOutlineEditOff className="icon" />
        ) : (
          <AiOutlineEdit className="icon" />
        )}
      </S.Edit>
      <S.Delete onClick={onClick} moving={moving}>
        <BsTrash className="icon" />
      </S.Delete>
    </S.Main>
  );
}
