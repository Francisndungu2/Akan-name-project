function getName() {
    var year = document.getElementById("yob").value;
    var month = document.getElementById("month").value;
    var dayofmonth = document.getElementById("day").value;
    var date = new Date(`${year}-${month}-${dayofmonth}`);
    var birthday = date.getDate();
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var result = document.getElementById("result");
    var maleNames = ["Kwasi", "Kwandwo", "Kwaku", "Kwabena", "Yaw", "Kofi", "Kwame"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (year == "" || year.length < 4 || year.length > 4) {
        alert("Hey you need to enter a valid year!");
    } else if (month < 0 || month > 12) {
        alert("Hey you need to enter a valid month!");
    } else if (dayOfMonth < 0 || dayOfMonth > 31) {
        alert("hey you need to re-enter a valid day!");
    } else if (male.checked == false && female.checked == false) {
        alert("you need to specify your gender!");
    } else if (male.checked == true) {
        result.innerHTML = "Hey" + maleNames[birthday] + ".Well, since you were born on a " + days[birthDay] +
            "that's your Ghanaian name.";
    } else if (female.checked == true) {
        result.innerHTML = "Hey" + femaleNames[birthday] + ". Well, since you were born on a " + days[birthDay] + " that's your Ghanaian name.";
    } else {
        alert("Come on Akan, just run!")

    }
}