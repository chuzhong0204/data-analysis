<template>
  <div class="dispatch">
    <el-row :gutter="50">
      <el-col :span="6">
        <div class="grid-content">
          <Narbar>
            <p>战损情况</p>
          </Narbar>
          <Mould>
            <div><Head></Head>
              <LittleTittle>空战战损</LittleTittle>
              <span>击伤数量</span>
              <ProgressBar></ProgressBar>
              <span>击落数量</span>
              <ProgressBar></ProgressBar>
              <LittleTittle>地防战损</LittleTittle>
              <span>击伤数量</span>
              <ProgressBar></ProgressBar>
              <span>击落数量</span>
              <ProgressBar></ProgressBar>
            </div>
            <div>
              <LittleTittle>空战击落敌机</LittleTittle>
              <span>击伤数量</span>
              <ProgressBar></ProgressBar>
              <span>击落数量</span>
              <ProgressBar></ProgressBar>
            </div>
          </Mould>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <Narbar>
            <p>航空兵出动情况（总体）</p>
          </Narbar>
          <Mould class="special">
            <TableTotal></TableTotal>
          </Mould>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <Narbar>
            <p>地面损伤情况</p>
          </Narbar>
          <Mould>
            <Ground></Ground>
          </Mould>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Narbar from "../../components/Narbar";
import Mould from "../../components/Mould";
import Ground from "./Ground";
import LittleTittle from "../../components/LittleTittle";
import ProgressBar from "../../components/ProgressBar";
import TableTotal from "./TableTotal";
import Head from "./Head";

export default {
  name: "Dispatch",
  components: {
    Mould,
    Narbar,
    Ground,
    LittleTittle,
    ProgressBar,
    TableTotal,
    Head
  }
};
</script>

<style scoped>
.dispatch {
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
div span {
  position: relative;
  text-align: left;
}
.special {
  height: 540px !important;
}
</style>