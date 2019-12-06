<template>
  <div>
    <table v-for="item in menace" :key="item.batchNumber">
      <tr>
        <td>目标批号：</td>
        <td>{{item.batchNumber}}</td>
      </tr>
      <tr>
        <td>相对距离：</td>
        <td>{{item.distance}}</td>
      </tr>
      <tr>
        <td>相对方位：</td>
        <td>{{item.bearing}}</td>
      </tr>
      <tr>
        <td>机型：</td>
        <td>{{item.planeType}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    menace: {
      type: Array
    }
  }
};
</script>

<style scoped>
div {
  width: 100%;
}
table {
  width: 80%;
  border-bottom: 1px solid #797979;
  border-right: 1px solid #797979;
  border-spacing: 0;
  margin: 10%;
}
tr {
  width: 100%;
}
td {
  width: 60%;
  border-left: 1px solid #797979;
  border-top: 1px solid #797979;
  background-color: #233273;
  line-height: 200%;
  text-align: left;
}
td:first-child {
  width: 40%;
}
</style>