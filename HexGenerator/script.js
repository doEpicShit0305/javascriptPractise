const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateRandomNum = () => {
	console.log("Test");
	const randomNumber = Math.floor(Math.random() * 10 + 1);
	number.innerHTML = randomNumber
	console.log(randomNumber);
}
btn.addEventListener("click", generateRandomNum)

generateRandomNum();
