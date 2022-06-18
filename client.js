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
    let salary = Number($('.salary').val());
    console.log(salary);

$('.employee-container').append(`
<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${job}</td>
    <td>${salary}</td>
    <td><button type="button" class="toDelete">Delete</button></td>
</tr>`)

sum += salary;
$('.monthly-result').text(sum);
//$('.monthly-result').empty().append(sum);
}
