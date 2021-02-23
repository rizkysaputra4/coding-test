rowModel = {
  no: "",
  descriptions: "",
  action: "",
};

currentTable = [
  {
    no: 1,
    description: "",
    action: "",
  },
  {
    no: 2,
    description: "",
    action: "",
  },
  {
    no: 3,
    description: "",
    action: "",
  },
];

const onClickBtn = () => {
  numbOfLastRow = currentTable.length;
  rowModel.no = numbOfLastRow + 1;
  currentTable.push(rowModel);
  return currentTable;
};
onClickBtn();
