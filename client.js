$(document).ready(onReady);

function onReady() {
    console.log('jQuery and DOM working');
    $('.submit').on('click', monthlyPayroll);
    $('.employee-container').on('click', '.toDelete', handleDelete);
    // .employee-container .toDelete .employee-row
}
let sum = 0;

function monthlyPayroll() {
    let firstName = $('.fname').val();
    //console.log(firstName);
    let lastName = $('.lname').val();
    //console.log(lastName);
    let id = $('.id').val();
    //console.log(id);
    let job = $('.job-title').val();
    //console.log(job);
    let salary = Number($('.salary').val());
    //console.log(salary);

    // resets input values to blank
    $('.fname').val('');
    $('.lname').val('');
    $('.id').val('');
    $('.job-title').val('');
    $('.salary').val('');

    //Changed html to have proper table elements. Used this before: $('.employee-container').append(`
    $('.test').append(`
    <tr class="employee-row">
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${job}</td>
        <td class ="">${salary}</td>
        <td><button type="button" class="toDelete">Delete</button></td>
    </tr>`);

    sum += salary;
    //$('.monthly-result').text(sum);
    $('.monthly-result').empty().append(sum);
    if( sum > 20000) {
        $(".monthly-result").css("background-color", "red");
    }
}
function handleDelete() {
    //parents function also works if you use the .employee-row in the argument to match it. 
    //$(this).parents('.employee-row').remove();
    $(this).closest('.employee-row').remove();
}

