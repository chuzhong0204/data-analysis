<template>
  <div id="ground">
    <div id="ground1" class="did"></div>
    <div id="ground2" class="did"></div>
    <div id="ground3" class="did"></div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "Ground",
  data() {
    return {
      color: ["rgb(19,125,221)", "rgb(34,144,76)", "rgb(180,152,26)"],
      data:["200","600","500"]
    };
  },
  mounted() {
    this.drawpie1("ground1",this.color[0],this.data[0]);
    this.drawpie1("ground2",this.color[1],this.data[1]);
    this.drawpie1("ground3",this.color[2],this.data[2]);
  },
  methods: {
    drawpie1(id,color,data) {
      let elementById = document.getElementById(id);
      let echartsDemo = this.$echarts.init(elementById);
      let option = {
        graphic: {
          type: "text",
          left: "center",
          top: "center",
          style: {
            text: "轻度损伤\n10%",
            textAlign: "center",
            fill: "#fff",
            fontSize: 20
          }
        },
        series: [
          {
            type: "pie",
            radius: ["45%", "55%"],
            label: {
              show: false
            },
            data: [data, "900"],
            color: [color, "rgb(240,242,245)"]
          }
        ]
      };
      echartsDemo.setOption(option);
      $(window).resize(function() {
        echartsDemo.resize();
      });
    }
  }
};
</script>
<style scoped>
#ground {
  width: 100%;
  height: 100%;
}
#ground1,
#ground2,
#ground3 {
  width: 100%;
  height: 33%;
}
</style>