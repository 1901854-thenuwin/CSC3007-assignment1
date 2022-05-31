// Check JS is linked with HTML
// alert('Connection Successful')

fetch ("https://api.data.gov.sg/v1/environment/psi").then ((psi_readings) => {

    // Check link has been connected
    // console.log(psi_readings);

    // Convert JSON to Object
    return psi_readings.json();

}).then(function(psi_reading_object) {

    // Check all data has been coverted to Object
    // console.log (psi_reading_object);

    // Read readings[items]
    // console.log (psi_reading_object["items"][0].readings);

    // Ensure that able to read Timestampß
    // console.log (psi_object["items"][0].update_timestamp);

    // Declarations //
    var metric = Object.keys(psi_reading_object.items[0].readings);
    var rows = metric.length;
    var metric_data = psi_reading_object.items[0].readings;
    // console.log(metric_data)
    var update_time = psi_reading_object["items"][0].update_timestamp;
    // console.log(update_time)

    // Table
    for (var i = 0; i < rows; i++) {
        var national_column = Object.values(metric_data)[i].national
        var central_column =  Object.values(metric_data)[i].central
        var west_column =  Object.values(metric_data)[i].west
        var east_column =  Object.values(metric_data)[i].east
        var north_column =  Object.values(metric_data)[i].north
        var south_column =  Object.values(metric_data)[i].south
        $("#psi_data_table tr:last").after("<tr><td>" + metric[i] + "</td><td>" + national_column + "</td><td>" + central_column + "</td><td>" + west_column + "</td><td>" + east_column + "</td><td>" + north_column + "</td><td>" + south_column + "</td></tr>");
    } 

    // Format Time
    update_time = moment(update_time).format("DD/MM/YYYY, hh:mm a")
    // console.log(update_time)

    // Display Update Time
    document.getElementById("time").innerHTML = update_time;
    
})