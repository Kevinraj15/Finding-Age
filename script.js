function calculatorYear() {
    var userDate = new Date(document.querySelector(".dateOfBirth").value);
    var today = new Date();

    var birthOfYear = userDate.getFullYear();
    var birthOfMonth = userDate.getMonth();
    var birthOfDay = userDate.getDate();

    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    var currentDay = today.getDate();


    var ageYears = currentYear - birthOfYear;
    var ageMonths = currentMonth - birthOfMonth;
    var ageDays = currentDay - birthOfDay;


    document.querySelector('#year').innerHTML = `${ageYears}<br>Year`;
    document.querySelector('#month').innerHTML = `${ageMonths}<br>Month`;
    document.querySelector('#date').innerHTML = `${Math.abs(ageDays)}<br>Day`;
}
