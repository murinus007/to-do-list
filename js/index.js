let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let items = document.getElementsByTagName("li");

function inputLenght() {
	return input.value.length;
}

function listLenght() {
	return items.lenght;
}

function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

function crossOut() {
	li.classList.toggle("done");
}

li.addEventListener("click", crossOut);

let dBtn = document.createElement("button");
dBtn.appendChild(document.createTextNode("X"));
li.appendChild(dBtn);
dBtn.addEventListener("click", deleteListItem);

function deleteListItem() {
	li.classList.add("delete");
}

}

function addListAfterClick() {
	if (inputLenght() > 0) {
		createListElement();
	}
}

function addListAfterKeyPress(event) {
	if (inputLenght() > 0 && event.key === "Enter") {
		createListElement();
	}
}

enterButton.addEventListener("click", addListAfterClick);
 
input.addEventListener("keypress", addListAfterKeyPress);