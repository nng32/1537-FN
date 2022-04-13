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
            url: "https://ump45-comp-1537-fn.herokuapp.com/findUnicorns",
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
    
    results = "<ul>";

    for (field in dataObject[index]) {
        results += `<li>${dataObject[index][field]}</li>`
    }

    results += "</ul>";

    $('#details').html(results);
}

function setup() {
    $('#retrieve').click(findUnicorns);
    $('body').on('click', '.details', displayDetails)
}

$(document).ready(setup);