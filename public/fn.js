unicornData = null;

function process_response(data) {
    console.log(data);
    unicornData = data;
    display();
}

function findUnicorns() {
    console.log("findUnicorns() was called")
    $.ajax(
        {
            url: "http://localhost:5000/findUnicorns",
            type: "GET",
            success: process_response
        }
    )
}

function display() {
    dataObject = JSON.parse(unicornData);

    if ($('#result').html() == "") {
        for (i = 0; i < dataObject.length; i++) {
            $('#result').append(`<input type="button" id="${i}" class="details" value="${dataObject[i].name}" /><br />`)      
        }        
    }

}

function displayDetails() {
    index = $(this).attr('id');

    console.log(`Displaying details for ${index}`)
    dataObject = JSON.parse(unicornData);

    $('#details').html(JSON.stringify(dataObject[index]));
}

function setup() {
    $('#retrieve').click(findUnicorns);
    $('body').on('click', '.details', displayDetails)
}

$(document).ready(setup);