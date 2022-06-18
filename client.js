$(document).ready(onReady);

function onReady() {
    console.log('jQuery and DOM working');
    $('.submit').on('click', monthlyPayroll);
}
let sum = 0;

function monthlyPayroll() {
    let firstName = $('.fname').val();
    console.log(firstName);
    let lastName = $('.lname').val();
    console.log(lastName);
    let id = $('.id').val();
    console.log(id);
    let job = $('.job-title').val();
    console.log(job);
    let salary = $('.salary').val();
    console.log(salary);
}
