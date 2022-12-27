
type Item = {
  id?: number;
  name: string;
  amount: number;
  value: string;
};

export type Itens = Item[];

export function postItem(
  req: Item,
  edit?: boolean
) {
  const storage = localStorage.getItem("Itens");
  const { name, amount, value } = req;
  const id = new Date().getTime();
  const data: Item = {
    name: name,
    amount: amount,
    value: value,
    id: id
  };
      if (storage === null) {
          localStorage.setItem("Itens", JSON.stringify([data]))
          return;
      } else if(edit){
        localStorage.setItem("Itens", JSON.stringify(req));
        return ;
      }
      else {
        const itensArray = JSON.parse(storage);
        itensArray.push(data);
        localStorage.setItem("Itens", JSON.stringify(itensArray))
        return;
      }
}

export function getItens() {
    const storage = localStorage.getItem("Itens");
    if (storage === null){
        return []
     }else {
       const DataFormated: Itens = JSON.parse(storage);
        return DataFormated
     }
}

export function deleteItem(id: number) {
  const storage = localStorage.getItem("Itens");
  if (storage === null){
    return []
  }
  const DataFormated: Itens = JSON.parse(storage);
  const newData = DataFormated.filter((item) => item.id !== id);
  localStorage.setItem("Itens", JSON.stringify(newData));
}