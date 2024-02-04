<template>
  <div>
    <h1>{{ branch_name }}</h1>
    <div class="grid-container">

    <article class="message" v-for="(device, index) in devices" :key="index">
      <div class="message-header" :style="{ 'background-color': device.headerColor }">
        <p>
          <font-awesome-icon icon="fa-laptop"/> <!-- Replace with your icon -->
          {{ device.device_name }}
        </p>
      </div>
      <div class="message-body">
        <div class="icon-and-content">
          <div class="icon">
            <font-awesome-icon v-if="device.device_name === 'Main Aircon'" icon="fa-fan" size="5x" color="darkgray" :class="{ spin: device.isFanSpinning }"/>
            <font-awesome-icon v-else-if="device.device_name === 'Beverage Freezer'" icon="fa-ice-cream" size="5x"
                               color="pink" :class="{ shake: device.isIceCreamShaking }"/>
            <font-awesome-icon v-else-if="device.device_name === 'Meat Freezer'" icon="fa-drumstick-bite" size="5x"
                               color="brown" :class="{ shake: device.isDrumstickShaking }"/>
          </div>
          <div class="content">
            <p>Operating Status: {{ device.current_operating_status }}</p>


          </div>

        </div>
        <div class="fan-speed-slider" v-if="device.device_name === 'Main Aircon'">
          <label for="fan-speed">Fan Speed</label>
          <input type="range" id="fan-speed" min="0" max="100" v-model="device.fanSpeed">
        </div>
        <div class="thermostat-slider" v-if="device.device_name === 'Main Aircon'">
          <label for="thermostat">Thermostat</label>
          <div class="slider-container">
            <span class="slider-label">Cold</span>
            <input type="range" id="thermostat" min="0" max="100" v-model="device.thermostat">
            <span class="slider-label">Hot</span>
          </div>
        </div>
        <div class="button-container">
          <button class="on-button" @click="turnOn(device)">ON</button>
          <button class="off-button" @click="turnOff(device)">OFF</button>
        </div>

      </div>
    </article>
    </div>
    <div class="return-button-container">
      <router-link to="/" class="return-button">Return to Store Branches</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      branch_id: null,
      branch_name: null,
      devices: [
        // Your devices data here
        // Replace this with your own API call
        {
          device_name: 'Main Aircon',
          current_operating_status: 'Online',
          current_room_temperature: 20,
          current_device_temperature: 25,
          create_date: '2021-01-01',
          modified_date: '2021-01-01',
          fanSpeed: 50, // Initial fan speed
          thermostat: 25 // Initial thermostat value

        },
        {
          device_name: 'Beverage Freezer',
          current_operating_status: 'Offline',
          create_date: '2021-01-01',
          modified_date: '2021-01-01',
          isIceCreamShaking: false,
          headerColor: 'lightblue', // Initial color
        },
        {
          device_name: 'Meat Freezer',
          current_operating_status: 'Online',
          create_date: '2021-01-01',
          modified_date: '2021-01-01',
          isDrumstickShaking: false // Initial state

        },
      ],
      headerColor: 'lightblue', // Initial color

    }
  },
  created() {
    this.branch_id = this.$route.params.branch_id;
    this.branch_name = this.$route.params.branch_name;
    // Fetch devices data from the API
    // Replace this with your own API call

  },
  methods: {
    // ...
    turnOn(device) {
      device.current_operating_status = 'Online';
      device.headerColor = 'lightgreen';
      if (device.device_name === 'Main Aircon') {
        device.isFanSpinning = true;
      }else if (device.device_name === 'Beverage Freezer') {
        device.current_operating_status = 'Online';
        device.isIceCreamShaking = true;
      }else if (device.device_name === 'Meat Freezer') {
        device.current_operating_status = 'Online';
        device.headerColor = 'lightgreen';
        device.isDrumstickShaking = true; // Add this line

      }
    },
    turnOff(device) {
      if (device.device_name === 'Main Aircon') {
        device.current_operating_status = 'Offline';
        device.headerColor = 'red';
        device.isFanSpinning = false;
      }else if (device.device_name === 'Beverage Freezer') {
        device.current_operating_status = 'Offline';
        device.headerColor = 'red';
        device.isIceCreamShaking = false;
      }else if (device.device_name === 'Meat Freezer') {
        device.current_operating_status = 'Offline';
        device.headerColor = 'red';
        device.isDrumstickShaking = false; // Add this line

      }
    },
  },
}
</script>

<style scoped>
.slider-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.slider-label {
  margin: 0 10px; /* Adjust as needed */
}
.thermostat-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.thermostat-slider label {
  margin-bottom: 10px;
}

.thermostat-slider input[type=range] {
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: linear-gradient(to right, blue , red);
  outline: none;
}

.thermostat-slider input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}

.thermostat-slider input[type=range]::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}
.fan-speed-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.fan-speed-slider label {
  margin-bottom: 10px;
}

.fan-speed-slider input[type=range] {
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
}

.fan-speed-slider input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}

.fan-speed-slider input[type=range]::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}
.message {
  min-height: 350px; /* Adjust as needed */

}
.spin {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.return-button-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
}

.return-button {
  padding: 10px 20px;
  background-color: lightblue;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
}
.on-button:hover, .off-button:hover {
  background-color: darkgray; /* Change the background color on hover */
  color: white; /* Change the text color on hover */
  transition: all 0.3s ease; /* Add a transition for a smooth effect */
}
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 30px; /* Adjust as needed */
}

.on-button, .off-button {
  padding: 10px 20px; /* Adjust as needed */
  border: none;
  border-radius: 5px; /* Adjust as needed */
  font-size: 16px; /* Adjust as needed */
  cursor: pointer;
  margin-right: 10px; /* Add this line and adjust as needed */

}

.on-button {
  background-color: green; /* Adjust as needed */
  color: white; /* Adjust as needed */
  border-top-left-radius: 50%; /* Add this line */
  border-bottom-left-radius: 50%; /* Add this line */
}

.off-button {
  background-color: red; /* Adjust as needed */
  color: white; /* Adjust as needed */
  border-top-right-radius: 50%; /* Add this line */
  border-bottom-right-radius: 50%; /* Add this line */
}
.icon-and-content {
  display: flex;
  justify-content: center;
  align-items: center; /* Add this line */
  margin-top: 100px; /* Adjust as needed */


}

.icon {
  margin-right: 20px; /* Adjust as needed */
  margin-left: 20px; /* Add this line and adjust as needed */
}
.content {
  flex: 1;
}
h1 {
  font-size: 3em; /* Adjust as needed */
  padding: 20px; /* Adjust as needed */
  margin-bottom: 20px; /* Adjust as needed */
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
}
.message-header i {
  margin-right: 5px;

}
.message-header {
  background-color: lightblue; /* Add this line */
  /* Rest of your CSS */
}
.shake {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>