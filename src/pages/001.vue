<template>
  <div flex gap-30>
    <div class="bargraph">
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
    <div class="piegraph" />
    <div class="test" />
    <div>
      <!--
        dataset = {
          total: [25, 26, 40, 45, 68],
          current: [15, 11, 17, 25, 37],
        }
      -->
      <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="240px" viewBox="0 0 60 100">
        <g transform="translate(0, 100) scale(1, -1)">
          <g>
            <rect x="1" y="0" width="10" height="25" fill="#37c" />
            <rect x="13" y="0" width="10" height="26" fill="#37c" />
            <rect x="25" y="0" width="10" height="40" fill="#37c" />
            <rect x="37" y="0" width="10" height="45" fill="#37c" />
            <rect x="49" y="0" width="10" height="68" fill="#37c" />
          </g>
          <g>
            <rect x="1" y="0" width="10" height="15" fill="#3c7" />
            <rect x="13" y="0" width="10" height="11" fill="#3c7" />
            <rect x="25" y="0" width="10" height="17" fill="#3c7" />
            <rect x="37" y="0" width="10" height="25" fill="#3c7" />
            <rect x="49" y="0" width="10" height="37" fill="#3c7" />
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
 .bargraph {
  display: grid;
  width: 150px;
  height: 300px;
  padding: 10px;
  transform: scaleY(1);
  grid-template-columns: repeat(5, 20%);
}

.bargraph div {
  margin: 0 2px;
}

.bargraph div:nth-child(1) {
  background: linear-gradient(to bottom, transparent 75%, #37c 0, #37c 85%, #3c7 0, #3c7 100%);
}

.bargraph div:nth-child(2) {
  background: linear-gradient(to bottom, transparent 74%, #37c 0, #37c 89%, #3c7 0);
}

.bargraph div:nth-child(3) {
  background: linear-gradient(to bottom, transparent 60%, #37c 0, #37c 83%, #3c7 0);
}

.bargraph div:nth-child(4) {
  background: linear-gradient(to bottom, transparent 55%, #37c 0, #37c 75%, #3c7 0);
}

.bargraph div:nth-child(5) {
  background: linear-gradient(to bottom, transparent 32%, #37c 0, #37c 63%, #3c7 0);
}

.piegraph {
  display: inline-block;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-image: conic-gradient(#37c 30deg, #3c7 30deg, #3c7 65deg, orange 65deg, orange 110deg, #f73 110deg, #f73 200deg, #ccc 200deg);
}

.test {
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: conic-gradient(#000, 180deg, #ff0 180deg, #ff0 270deg, #f0f 270deg, #ff00ff 360deg);
}
</style>
