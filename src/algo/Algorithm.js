import { act } from '../anim/AnimationMain';

export function addLabelToAlgorithmBar(labelName, group) {
  const element = document.createElement("p");
  element.appendChild(document.createTextNode(labelName));

  if (!group) {
    const tableEntry = document.createElement("td");
    tableEntry.appendChild(element);

    const controlBar = document.getElementById("AlgorithmSpecificControls");
    controlBar.appendChild(tableEntry);
  } else {
    group.appendChild(element);
    element.setAttribute("class", "groupChild");
  }

  return element;
}

export function addCheckboxToAlgorithmBar(boxLabel, checked, group) {
  const element = document.createElement("input");

  element.setAttribute("type", "checkbox");
  element.setAttribute("id", boxLabel);
  element.setAttribute("name", boxLabel);
  element.setAttribute("value", boxLabel);
  checked && element.setAttribute("checked", "true");

  const label = document.createElement("label");
  label.setAttribute("for", boxLabel);
  const txtNode = document.createTextNode(boxLabel);
  label.appendChild(txtNode);

  if (!group) {
    const tableEntry = document.createElement("td");
    tableEntry.appendChild(element);
    tableEntry.appendChild(label);

    const controlBar = document.getElementById("AlgorithmSpecificControls");
    controlBar.appendChild(tableEntry);
  } else {
    const span = document.createElement("span");
    span.appendChild(element);
    span.appendChild(label);

    group.appendChild(span);
    span.setAttribute("class", "groupChild");
  }

  return element;
}
