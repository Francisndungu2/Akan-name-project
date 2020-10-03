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
    }
}