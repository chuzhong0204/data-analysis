<template>
  <div>
    <table>
      <tr>
        <td colspan="12">批次：</td>
        <td colspan="12">架次：</td>
      </tr>
      <tr>
        <td colspan="10" rowspan="2">空战战损</td>
        <td colspan="7">击伤数量</td>
        <td colspan="7"></td>
      </tr>
      <tr>
        <td colspan="7">击落数量</td>
        <td colspan="7"></td>
      </tr>
      <tr>
        <td colspan="10" rowspan="2">地防战损</td>
        <td colspan="7">击伤数量</td>
        <td colspan="7"></td>
      </tr>
      <tr>
        <td colspan="7">击落数量</td>
        <td colspan="7"></td>
      </tr>
      <tr>
        <td colspan="10" rowspan="2">空战击落敌机</td>
        <td colspan="7">击伤数量</td>
        <td colspan="7"></td>
      </tr>
      <tr>
        <td colspan="7">击落数量</td>
        <td colspan="7"></td>
      </tr>
      <tr>
        <td colspan="2" rowspan="3">地面损伤情况</td>
        <td colspan="11">轻度损伤数量</td>
        <td colspan="11"></td>
      </tr>
      <tr>
        <td colspan="11">中度损伤数量</td>
        <td colspan="11"></td>
      </tr>
      <tr>
        <td colspan="11">重度损伤数量</td>
        <td colspan="11"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableTotal"
};
</script>

<style scoped>
div {
  height: 60%;
  width: 100%;
  position: relative;
  border-bottom: 1px dashed #d7d7d7;
}
table {
  width: 96%;
  height: 100%;
  border-spacing: 6px;
    position: relative;
  left: 2%;
  padding: 2% 0px;
}
tr {
  width: 100%;
}
td {
  width: 8%;
  background-color: #233273;
  border: 2px solid #F2F2F2;
}
</style>