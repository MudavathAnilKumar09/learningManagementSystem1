let users = JSON.parse(localStorage.getItem("users")) || [];
class user {
  constructor() { }
  validatePass(userpass) {
    let value = userpass.length < 8 ? false : true;
    return value;
  }
  signup(useremail, userpass, usertype) {
    const usersData = localStorage.getItem('users');
    // let present = false;
    // console.log("heere")
    // for (i = 0; usersData.length; i++) {
    //   if (usersData[i].email === useremail) {
    //     present = true;
    //     console.log(useremail);
    //     break;

    //   }

    // }
    // if (present==false) {
      let validated = false;
      validated = this.validatePass(userpass);
      if (validated) {
        this.email = useremail;
        this.pass = userpass;
        this.usertype = usertype;
        users.push(this);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(useremail));
        localStorage.setItem("currentType", JSON.stringify(usertype));
        if (usertype == "student") {
          window.location = "user.html";
        } else {
          window.location = "admin.html";
        }
      } else {
        alert("Please fill correct details");
      }
    // }
    // else {

      // alert("user already exists, please login");
      // window.location = "index.html";
    }
  }

//   console.log(users);
const signupUser = (event) => {
  event.preventDefault();
  let useremail = document.getElementById("email").value;
  let userpass = document.getElementById("password").value;
  let usertype = document.getElementById("user").value;
  let User = new user();
  User.signup(useremail, userpass, usertype);
}
