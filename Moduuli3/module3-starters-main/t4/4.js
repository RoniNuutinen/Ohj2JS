'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (let person of students) {
  let name = person.name;
  let id = person.id;

  let option = document.createElement("option");
  option.value = id;

  let textNode = document.createTextNode(name);
  option.appendChild(textNode);

  document.querySelector("#target").appendChild(option);
}