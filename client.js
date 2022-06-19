$(document).ready(onReady);

function onReady() {
    console.log('jQuery and DOM working');
    $('.submit').on('click', monthlyPayroll);
    $('.employee-container').on('click', '.toDelete', handleDelete);
    // .employee-container .toDelete .employee-row
}
let sum = 0;
let monthlyTotal = 0;

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
    $('.add-employee').append(`
    <tr class="employee-row">
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${job}</td>
        <td class ="">$ ${salary.toLocaleString(undefined,{minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
        <td><button type="button" class="toDelete">Delete</button></td>
    </tr>`);

    sum += salary;
    // gets monthly instead of total payroll. 
    monthlyTotal = sum / 12; 
    // Below works for rounding to 2 decimal
    monthlyTotal = Math.round(monthlyTotal * 100) / 100;
    //$('.monthly-result').text(sum); Also works
    //$('.monthly-result').empty().append(Math.round(monthlyTotal * 100) / 100);
    $('.annual-result').empty().append(sum.toLocaleString(undefined,{minimumFractionDigits: 2, maximumFractionDigits: 2}));
    $('.monthly-result').empty().append(monthlyTotal.toLocaleString(undefined,{minimumFractionDigits: 2, maximumFractionDigits: 2}));
    if( monthlyTotal > 20000) {
        $(".monthly-result").css("background-color", "red");
    }
}
function handleDelete() {
    //parents function also works if you use the .employee-row in the argument to match it. 
    //$(this).parents('.employee-row').remove();
    $(this).closest('.employee-row').remove();
}

