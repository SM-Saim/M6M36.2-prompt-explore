const alertInFunction = () => {
  alert("I have to work hard, Insha Allah success will come on day");
};

const clickToConfirm = () => {
  const value1 = confirm(
    "Learn web development atleast 10 hours every single day"
  );
  if (value1 === true) {
    alert("Well done, keep it up");
  } else {
    console.log("Mair dibo");
  }
};
// prompt
const clickForsPrompt = () => {
  const value2 = prompt("Give Your opinion");
  console.log(value2);
};
