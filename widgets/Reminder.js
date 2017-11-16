reminderDiv();

function reminderDiv () {
    $('#Reminder').html('<div id ="remTitle">Please Remember to </div><div id="rem"></div>');
    setReminder();
}

function setReminder () {
    $.get('/layout', function(ret) {
        var reminder = ret.reminder;

        $('#rem').html(reminder);
    });
}
