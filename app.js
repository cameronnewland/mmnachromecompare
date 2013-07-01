
$(document).ready(function() {
    $.getJSON('data.js',{}, function(data) {
//        var dataObj = $.parseJSON(data);
//        $.each()
        $('#compare').append(data['PrimaryVehicle']['-ModelYear']);
    });
});