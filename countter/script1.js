const count = document.querySelector(".count")
// const add = document.querySelector(".add")
// const subtract = document.querySelector(".subtract")
// const resetCount = document.querySelector(".reset")
const buttons = document.querySelector('.buttons')

// good way
buttons.addEventListener("click", (e)=> {
	if(e.target.classList.contains("add")){
		count.innerHTML++;
		console.log("add");
		setColor();
	}
	if(e.target.classList.contains("subtract")){
		count.innerHTML--;
		console.log("Subtract");
		setColor();
	} else if(e.target.classList.contains("reset")){
		count.innerHTML = 0;
		console.log("reset");
		setColor();
	}

})

function setColor() {
	console.log("color")
  if (count.innerHTML > 0) {
    count.style.color = "green";
  } else if (count.innerHTML < 0) {
    count.style.color = "black";
  } else {
    count.style.color = "red";
  }
}

// old method
add.addEventListener("click", (e) => {
	console.log('herrerere');
	count.innerHTML++;
})
subtract.addEventListener("click", (e) => {
	count.innerHTML--;
})
resetCount.addEventListener("click", (e) => {
	count.innerHTML = 0 ;
})