// let cardBoxbtn = document.getElementById("addContactCardbtn");

// cardBoxbtn.addEventListener("click", (e) => {
//   let box = document.getElementById("addContactCard");
//   box.style.display = "block";
// });

// let cardBoxClosebtn = document.getElementById("addContactCardClosebtn");
// cardBoxClosebtn.addEventListener("click", (e) => {
//   let ui = new UI();
//   ui.clearFields();
//   let box = document.getElementById("addContactCard");
//   box.style.display = "none";
// });

// let form = document.getElementById("addContactForm");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let name = document.getElementById("name").value;
//   let contact = document.getElementById("contact").value;
//   let email = document.getElementById("email").value;
//   let con = new Contact(name, contact, email);
//   let ui = new UI();
//   if (ui.validateContact(con)) {
//     ui.addContact(con);
//     cardBoxClosebtn.click();
//     debugger;
//     let oldContact = localStorage.getItem("contactlist");
//     if (oldContact === null) {
//       oldContact = [];
//       localStorage.setItem("contactlist", JSON.stringify(oldContact));
//       oldContact = localStorage.getItem("contactlist");
//     }
//     let jsonObj = JSON.parse(oldContact);
//     jsonObj.push(con);
//     localStorage.setItem("contactlist", JSON.stringify(jsonObj));
//   }
// });

// let tbody = document.getElementById("contactData");
// tbody;
// tbody.addEventListener("click", function (e) {
//   if (e.target.classList.contains("removebtn")) {
//     let ui = new UI();
//     ui.removeContact(e.target);
//   }
// });
// // debugger;
// // let removebtns = document.getElementsByClassName("removebtn");

// // for (let index = 0; index < removebtns.length; index++) {
// //   const element = removebtns[index];
// //   element.addEventListener("click", function (e) {
// //     let ui = new UI();
// //     ui.removeContact(e.target);
// //   });
// // }

// $(".jq li")
//   .css("color", "red")
//   .text((index, value) => {
//     if (value === "item 2") {
//       debugger;
//       return `${value} changed`;
//     }
//   });

//console.log(div);

// $(".jq li").on("click", (e) => {
//   $(e.target).css("color", "yellow");
// });

$(".jq li").click((e) => {
  console.log("li item is clicked");
});
