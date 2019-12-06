<template>
  <div class="track">
    <el-row :gutter="50">
      <el-col :span="6">
        <div class="grid-content">
          <Narbar>
            <p>我方</p>
          </Narbar>
          <Mould>
            <Airplane :pinfor="pinfor" :isShow="isShow"></Airplane>
          </Mould>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <Narbar>
            <p>高度趋势变化图</p>
          </Narbar>
          <Mould>
            <Fly></Fly>
          </Mould>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <Narbar>
            <p>敌方</p>
          </Narbar>
          <Mould>
            <Airplane :pinfor="dinfor" :isShow="!isShow"></Airplane>
          </Mould>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Fly from "./Fly";
import Narbar from "../../components/Narbar";
import Mould from "../../components/Mould";
import Airplane from "./Airplane";
export default {
  name: "Track",
  components: {
    Narbar,
    Mould,
    Fly,
    Airplane
  },
  data() {
    return {
      isShow: false,
      pinfor: [
        {
          jizhong: "歼-3123",
          hangxiang: "308",
          jiashu: "5",
          zuobiao: "55,55,55",
          ttime: "11:11:11"
        },
        {
          jizhong: "歼-10234",
          hangxiang: "308",
          jiashu: "5",
          zuobiao: "55,55,55",
          ttime: "11:11:11"
        },
        {
          jizhong: "歼-20234",
          hangxiang: "308",
          jiashu: "5",
          zuobiao: "55,55,55",
          ttime: "11:11:11"
        },
        {
          jizhong: "歼-30234",
          hangxiang: "308",
          jiashu: "5",
          zuobiao: "55,55,55",
          ttime: "11:11:11"
        },
        {
          jizhong: "歼-302343",
          hangxiang: "308",
          jiashu: "5",
          zuobiao: "55,55,55",
          ttime: "11:11:11"
        },
        {
          jizhong: "歼-302342",
          hangxiang: "308",
          jiashu: "5",
          zuobiao: "55,55,55",
          ttime: "11:11:11"
        }
      ],
      dinfor: [
        {
          jizhong: "歼-31234",
          hangxiang: "308",
          jiashu: "5",
          zuobiao: "55,55,55",
          ttime: "11:11:11",
          stime: "11:11:11"
        },
        {
          jizhong: "歼-10",
          hangxiang: "308",
          jiashu: "5",
          zuobiao: "55,55,55",
          ttime: "11:11:11",
          stime: "11:11:11"
        },
        {
          jizhong: "歼-20",
          hangxiang: "308",
          jiashu: "5",
          zuobiao: "55,55,55",
          ttime: "11:11:11",
          stime: "11:11:11"
        },
        {
          jizhong: "歼-303",
          hangxiang: "308",
          jiashu: "5",
          zuobiao: "55,55,55",
          ttime: "11:11:11",
          stime: "11:11:11"
        },
        {
          jizhong: "歼-302",
          hangxiang: "308",
          jiashu: "5",
          zuobiao: "55,55,55",
          ttime: "11:11:11",
          stime: "11:11:11"
        },
        {
          jizhong: "歼-301",
          hangxiang: "308",
          jiashu: "5",
          zuobiao: "55,55,55",
          ttime: "11:11:11",
          stime: "11:11:11"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.track {
  width: 90%;
  height: 900px;
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
  height: 100%;
}

</style>