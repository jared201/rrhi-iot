<template>
  <div class="title-block">
    <h1>Welcome to UJ Dashboard</h1>
  </div>

  <div class="columns is-multiline">
    <div class="column is-3" v-for="n in 6" :key="n" @click="handleClick(n)">
      <div class="card">
        <div class="card-content">
          <span class="icon">
            <font-awesome-icon icon="fa-store" class="fa-5x"/> <!-- Placeholder icon, replace with your own -->
          </span>

          <p>Uncle John's Branch {{ n }}</p>
          <p><font-awesome-icon color="#0000FF" class="fa-thermometer-half" icon="fa-thermometer-half" /> Current Temperature: {{ temperature }}°C</p>
          <p><font-awesome-icon class="devices-icon" icon="fa-laptop" /> Number of Devices: {{ devices }}</p>
          <p><font-awesome-icon color="green" class="online-icon" icon="fa-check-circle" /> Online: {{ online }}</p>
          <p><font-awesome-icon color="red" icon="fa-times-circle" /> Offline: {{ offline }}</p>
          <button class="manage-button">Tap or Click to Manage Devices</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temperature: 20, // Initial temperature
      devices: 3, // Initial number of devices
      online: 3, // Initial number of online devices
      offline: 0, // Initial number of offline devices
    };
  },
  methods: {
    handleClick(n) {
      console.log(`Card ${n} clicked`);
      // Add your own logic here
    }
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  width: 300px; /* Adjust as needed */
  height: 330px; /* Adjust as needed */
  background-color: #FFFFE0; /* Light orange */

}

.card:hover {
  transform: scale(1.05);
}
.icon .svg-inline--fa {
  margin-top: 70px;
  color: lightblue;
}
.title-block h1 {
  text-align: center;
  padding: 20px 0;
  font-size: 2em;
  color: #333;
}
.card .fa-thermometer-half .svg-inline--fa {
  fill: #0000FF;
}
.card .devices-icon .svg-inline--fa {
  color: green; /* Change the color as per your preference */
}
.card .online-icon .svg-inline--fa {
  fill: green;
}

.card .manage-button {
  background-color: lightsalmon;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}
.card .manage-button {
  /* ... existing styles ... */
  margin-bottom: 50px;
}
</style>