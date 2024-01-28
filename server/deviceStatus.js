// deviceStatus.js
module.exports.updateDeviceStatus = function(store_branch_name, device_name, current_operating_status, current_room_temperature, current_device_temperature, create_date, modified_date, callback) {
    console.log('Store Branch Name:', store_branch_name);
    console.log('Device Name:', device_name);
    console.log('Current Operating Status:', current_operating_status);
    console.log('Current Room Temperature:', current_room_temperature);
    console.log('Current Device Temperature:', current_device_temperature);
    console.log('Create Date:', create_date);
    console.log('Modified Date:', modified_date);
    // Add your logic here to store or process the data

    callback(null, 'Device Status Updated');
}
// function for reading device status here
module.exports.readDeviceStatus = function(store_branch_name, device_name, callback) {
    console.log('Store Branch Name:', store_branch_name);
    console.log('Device Name:', device_name);
    // Add your logic here to read the data
    let current_operating_status = 'ON';
    let current_room_temperature = 25;
    let current_device_temperature = 30;
    let create_date = new Date().toLocaleDateString();
    let modified_date = new Date().toLocaleDateString();
    let statusData = {
        current_operating_status: current_operating_status,
        current_room_temperature: current_room_temperature,
        current_device_temperature: current_device_temperature,
        create_date: create_date,
        modified_date: modified_date
    }
    callback(statusData, 'Device Status Read');
}