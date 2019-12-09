<template>
  <div class="detail">
    <el-row :gutter="50">
      <el-col :span="18">
        <div class="grid-content">
          <Narbar>
            <p>打击目标毁伤情况</p>
          </Narbar>
          <Mould>
            <img src="../../assets/img/plane.png" alt />
            <div class="box1">
              <LittleTittle>当前战力</LittleTittle>
            </div>
            <div class="box2">
              <LittleTittle>打击目标毁伤情况</LittleTittle>
            </div>
          </Mould>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <Narbar>
            <p>威胁力估计表</p>
          </Narbar>
          <Mould class="table">
            <Table :menace="menace"></Table>
          </Mould>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Narbar from "@/components/Narbar";
import Mould from "@/components/Mould";
import LittleTittle from "../../components/LittleTittle";
import Table from "./Table";
export default {
  name: "Detail",
  components: {
    Narbar,
    Mould,
    LittleTittle,
    Table,
  },
  data() {
    return {
      menace: [{
        batchNumber: "1234567489",
        distance: "2000",
        bearing: "1345",
        planeType: "44525446",
      },{
        batchNumber: "1234567488",
        distance: "2000",
        bearing: "1345",
        planeType: "44525446",
      },{
        batchNumber: "1234567487",
        distance: "2000",
        bearing: "1345",
        planeType: "44525446",
      },{
        batchNumber: "1234567486",
        distance: "2000",
        bearing: "1345",
        planeType: "44525446",
      },{
        batchNumber: "1234567485",
        distance: "2000",
        bearing: "1345",
        planeType: "44525446",
      },{
        batchNumber: "1234567484",
        distance: "2000",
        bearing: "1345",
        planeType: "44525446",
      }]
    };
  }
};
</script>

<style scoped>
.detail {
  width: 90%;
  height: 83.4%;
  margin: 1% 5% 0%;
}
.el-row {
  height: 100%;
}
.el-col {
  border-radius: 4px;
  height: 100%;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background: #001529;
  height: 100%;
}
img {
  position: relative;
  width: 95%;
  top: 3%;
}
.littletittle {
  text-align: left;
}
.box1,
.box2 {
  float: left;
  top: 5%;
  height: 38%;
}
.box1 {
  width: 34%;
  border: 1px solid #000000;
  position: relative;
  left: 2.5%;
}
.box2 {
  width: 58%;
  border: 1px solid #000000;
  position: relative;
  left: 5%;
}
</style>