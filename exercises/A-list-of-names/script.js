function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(element => {
    var hOne = document.createElement("h1");
    hOne.innerText = element["name"];
    content.appendChild(hOne);
    var hTwo = document.createElement("h2");
    hTwo.innerText = element["job"];
    content.appendChild(hTwo);


  });
  console.log(arrayOfPeople)


}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },];
  

listOfNames(people);
