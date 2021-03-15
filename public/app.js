let divs = [
  "accountBloc",
  "accountProject",
  // "overlayOptions1",
  // "overlayOptions2",
  // "overlayOptions3",
  // "overlayOptions4",
  // "overlayOptions5",
  // "overlayOptions6",
  "rename",
  "delete",
  "link",
  // "add",
];
let visibleDivId = null;
const divVisibility = (divId) => {
  if (visibleDivId === divId) {
    visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
};
const hideNonVisibleDivs = () => {
  let i, divId, div;
  for (i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if (visibleDivId === divId) {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  }
};

const changeBackgroundColor = () => {
  const Color = document.getElementById("backgroundColor").value;
  const addColor = () => {
    const Value = document.getElementById("backgroundColorValue");
    Value.style.backgroundColor = Color;
  };
  addColor();
};

const changeBlockColor = () => {
  const Color = document.getElementById("blockColor").value;
  const addColor = () => {
    const Value = document.getElementById("blockColorValue");
    Value.style.backgroundColor = Color;
  };
  addColor();
};

const changeTextColor = () => {
  const Color = document.getElementById("textColor").value;
  const addColor = () => {
    const Value = document.getElementById("textColorValue");
    Value.style.backgroundColor = Color;
  };
  addColor();
};
