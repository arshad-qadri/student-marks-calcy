const submit = document.getElementById("submit");
const shwMarks = document.getElementById("shwMarks");
const comp = document.getElementById("comp");
const phy = document.getElementById("phy");
const chem = document.getElementById("chem");
const maths = document.getElementById("maths");
const bio = document.getElementById("bio");

submit.addEventListener("click", () => {
  let total =
    parseFloat(comp.value) +
    parseFloat(phy.value) +
    parseFloat(chem.value) +
    parseFloat(maths.value) +
    parseFloat(bio.value);
  let perc = (total / 500) * 100;
  let grade = "";

  if (
    comp.value == "" ||
    phy.value == "" ||
    chem.value == "" ||
    maths.value == "" ||
    bio.value == ""
  ) {
    alert("Please fill all the feilds");
    return false;
  } else if (perc <= 100 && perc > 80) {
    grade = "A";
  } else if (perc <= 80 && perc > 60) {
    grade = "B";
  } else if (perc <= 60 && perc > 40) {
    grade = "C";
  } else if (perc < 40) {
    grade = "D";
  }

  if (perc < 40) {
    shwMarks.innerHTML = `Outoff 500 your marks is ${total} and percentage is ${perc.toFixed(
      2
    )}% and grade is ${grade}. You are Fail.`;
  } else {
    shwMarks.innerHTML = `Outoff 500 your marks is ${total} and percentage is ${perc.toFixed(
      2
    )}% and grade is ${grade}. You are Pass.`;
  }
});
