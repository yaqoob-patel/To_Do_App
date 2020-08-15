var heading = document.getElementById("heading");
heading.innerHTML = "To Do App";
heading.style.fontSize = "4rem";
heading.style.textAlign = "center";
heading.style.textDecoration = "underline";
heading.style.fontStretch = "ultra-expanded";
heading.style.fontStyle = "italic";
heading.style.color = "white";
heading.style.backgroundColor = "red";
heading.style.border = "4px solid black";
heading.style.textShadow = "4px 4px 4px black";
heading.style.width = "400px";
heading.style.width = "400px";
heading.style.borderRadius = "8px";
heading.style.marginLeft = "465px";

//====================================creating Input=====================================

function collectInputText() {
  var text = document.getElementById("inputText").value;
  if (
    text !== "work to be done......" &&
    text !== "" &&
    text !== "please Enter todo again" &&
    text !== "sorry nothing to delete"
  ) {
    var li = document.createElement("li");
    li.style.border = "5px solid black";
    li.style.borderRadius = "15px ";
    li.style.marginTop = "15px ";
    li.style.marginLeft = "250px ";
    li.style.width = "50% ";
    li.style.textAlign = "center";
    li.style.paddingRight = "20px ";
    li.style.paddingBottom = "2px";
    var liText = document.createTextNode(text);
    li.appendChild(liText);
    // li.style.textAlign = "center";
    console.log(liText);
    document.getElementById("list").appendChild(li);
    li.style.fontSize = "2rem";
    document.getElementById("inputText").value = "";

    //=======================Delet All Button In Html======================================

    // var delAllBtn = document.createElement("button");
    // delAllBtn.innerHTML = "AllClear";
    // delAllBtn.setAttribute("onclick", "clearAllList()");
    // document.body.appendChild(delAllBtn);
    // console.log(delAllBtn);

    // //=================================DELETE BUTTON================================

    var delBtn = document.createElement("button");
    var delBtnId = document.createAttribute("id");
    delBtnId.value = "delBtn1";
    delBtn.setAttributeNode(delBtnId);
    var attDelBtnClick = document.createAttribute("onclick");
    attDelBtnClick.value = "deletListItems(this)";
    delBtn.setAttributeNode(attDelBtnClick);
    var attDelBtnType = document.createAttribute("type");
    attDelBtnType.value = "submit";
    delBtn.setAttributeNode(attDelBtnType);
    console.log(delBtn);
    li.appendChild(delBtn);
    delBtn.textContent = "DELETE";
    delBtn.style.textAlign = "right";
    delBtn.style.marginLeft = "200px";
    delBtn.style.marginRight = "20px";
    delBtn.style.marginBottom = "10px";

    //====================================Edit Button=============================

    var editBtn = document.createElement("button");
    var editBtnId = document.createAttribute("id");
    editBtnId.value = "editBtn1Id";
    editBtn.setAttributeNode(editBtnId);
    console.log(editBtn);

    editBtn.textContent = "E D I T";
    var editBtnOnClickAtt = document.createAttribute("onclick");
    editBtnOnClickAtt.value = "editBtnOnClick(this)";
    editBtn.setAttributeNode(editBtnOnClickAtt);
    li.appendChild(editBtn);

    // var result = document.getElementById("list").appendChild(li);
    // console.log(result);

    // delBtn.textContent = "EDIT";
    // document.body.getElementById("list").appendChild(delBtn);
  } else {
    document.getElementById("inputText").value = "please Enter todo again";
  }
}
// function editInputText() {
//   var ulFirstChild = document.getElementById("list").firstChild.textContent;
//   // console.log(ulFirstChild);

//   document.getElementById("list").firstChild.textContent = "";
//   console.log(ulFirstChild);

//   ulFirstChild.textContent = document.getElementById(
//     "list"
//   ).firstChild.firstChild;
// }
//==========================================FUNCTIONS=====================================
function deletListItems(e) {
  console.log("yaqoob");
  console.log(e.parentNode);
  e.parentNode.remove();
  // document.getElementById("").remove();
}

console.log(document.getElementById("list").children.length);

function clearAllList() {
  console.log("Navyaan");
  if (document.getElementById("list").children.length <= 0) {
    document.getElementById("inputText").value = "sorry nothing to delete";
  } else {
    document.getElementById("list").textContent = "";
  }
}

function editBtnOnClick(val) {
  console.log(val.parentNode.childNodes[0]);

  var newValAftEdt = prompt(
    "please Enter Text",
    val.parentNode.childNodes[0].textContent
  );
  console.log(newValAftEdt);

  val.parentNode.childNodes[0].textContent = newValAftEdt;
  console.log(val.parentNode.childNodes[0]);
}
