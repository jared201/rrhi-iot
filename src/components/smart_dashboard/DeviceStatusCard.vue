<template>
  <!-- add a page title here-->
  <div class="columns is-multiline">
    <div class="column is-full">
      <h1 class="title">Smart Device Dashboard POC</h1>
    </div>
  </div>
  <div class="columns is-multiline">
    <div class="column is-full" v-for="(device, index) in devices" :key="index">

      <div class="card">
        <header class="card-header has-background-info-light">
          <p class="card-header-title">{{ device.store_branch_name }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <p>Operating Status: {{ device.current_operating_status }}</p>
            <p>Room Temperature: {{ device.current_room_temperature }}</p>
            <p>Device Temperature: {{ device.current_device_temperature }}</p>
            <p>Create Date: {{ device.create_date }}</p>
            <p>Modified Date: {{ device.modified_date }}</p>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Start</a>
          <a href="#" class="card-footer-item">Stop</a>
          <a href="#" class="card-footer-item">Update</a>
        </footer>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      devices: [
        {
          store_branch_name: 'UJ Branch 1',
          current_operating_status: 'ON',
          current_room_temperature: 25,
          current_device_temperature: 30,
          create_date: '2022-01-01',
          modified_date: '2022-01-02'
        },
        {
          store_branch_name: 'UJ Branch 2',
          current_operating_status: 'OFF',
          current_room_temperature: 20,
          current_device_temperature: 25,
          create_date: '2022-01-01',
          modified_date: '2022-01-02'
        },
        {
          store_branch_name: 'UJ Branch 3',
          current_operating_status: 'ON',
          current_room_temperature: 25,
          current_device_temperature: 30,
          create_date: '2022-01-01',
          modified_date: '2022-01-02'
        },
        {
          store_branch_name: 'UJ Branch 4',
          current_operating_status: 'OFF',
          current_room_temperature: 20,
          current_device_temperature: 25,
          create_date: '2022-01-01',
          modified_date: '2022-01-02'
        },
        {
          store_branch_name: 'UJ Branch 5',
          current_operating_status: 'ON',
          current_room_temperature: 25,
          current_device_temperature: 30,
          create_date: '2022-01-01',
          modified_date: '2022-01-02'
        },
        {
          store_branch_name: 'UJ Branch 6',
          current_operating_status: 'OFF',
          current_room_temperature: 20,
          current_device_temperature: 25,
          create_date: '2022-01-01',
          modified_date: '2022-01-02'
        },
        {
          store_branch_name: 'UJ Branch 7',
          current_operating_status: 'ON',
          current_room_temperature: 25,
          current_device_temperature: 30,
          create_date: '2022-01-01',
          modified_date: '2022-01-02'
        },
        {
          store_branch_name: 'UJ Branch 8',
          current_operating_status: 'OFF',
          current_room_temperature: 20,
          current_device_temperature: 25,
          create_date: '2022-01-01',
          modified_date: '2022-01-02'
        },
        {
          store_branch_name: 'UJ Branch 9',
          current_operating_status: 'ON',
          current_room_temperature: 25,
          current_device_temperature: 30,
          create_date: '2022-01-01',
          modified_date: '2022-01-02'
        }
        // Add more device data here
      ]
    }
  }
}
</script>