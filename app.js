
$(document).ready(function () {

    // Gets JSON data

    $.getJSON('data.js', {}, function (data) {

        // Appends Mitsubishi vehicle to Model Trims table header

        $('#modeltrims').append('<div class="modeltrim"><img src="' + data['PrimaryVehicle']['-ImageURL'] + '"><div class="trimname">' + data['PrimaryVehicle']['-TrimName'] + '</div>');

        // Appends competitors' vehicles to Model Trims table header

        $.each(data['CompetitorVehicle'], function (key) {
            $('#modeltrims').append('<div class="modeltrim"><img src="' + data['CompetitorVehicle'][key]['-ImageURL'] + '"><div class="trimname">' + data['CompetitorVehicle'][key]['-TrimName'] + '</div>');
        });

        // Appends headings, row labels, and column data to Model Trims

        $.each(data['ComparisonData']['Heading'], function (key) {
            $('#specscompare').append('<div class="comparesection"><div class="compareheaderrow"><div class="comparelabel">' + data['ComparisonData']['Heading'][key]['-HeadingName'] + '</div><div class="comparetrimnamelabel">' + data['PrimaryVehicle']['-TrimName'] + '</div><div class="comparetrimnamelabel">' + data['CompetitorVehicle'][0]['-TrimName'] + '</div><div class="comparetrimnamelabel">' + data['CompetitorVehicle'][1]['-TrimName'] + '</div><div class="comparetrimnamelabel">' + data['CompetitorVehicle'][2]['-TrimName'] + '</div></div></div>');

            $.each(data['ComparisonData']['Heading'][key]['Row'], function (key2) {
                $('#specscompare').append('<div class="comparisonrow"><div class="comparerowlabel">'+data['ComparisonData']['Heading'][key]['Row'][key2]['-RowLabel']+'</div></div>');
            });
            //                $('#specscompare').append('<div class="comparisonrow"><div class="comparerowlabel">'+data['ComparisonData']['Heading']['Row'][key]['-RowLabel']+'</div>');

            // +'</div><div class="comparerowitem">'+data['ComparisonData']['Heading']['Row'][key]['VehicleData'][0]['-ColData']+'</div><div class="comparerowitem">'+data['ComparisonData']['Heading']['Row'][key]['VehicleData'][1]['-ColData']+'</div><div class="comparerowitem">'+data['ComparisonData']['Heading']['Row'][key]['VehicleData'][2]['-ColData']+'</div><div class="comparerowitem">'+data['ComparisonData']['Heading']['Row'][key]['VehicleData'][3]['-ColData']+'</div>
            //            });
        });
    });
});