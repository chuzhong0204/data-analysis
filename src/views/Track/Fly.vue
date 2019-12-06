<template>
  <div class="fly">
    <div id="echartsDemo" style="width: 100%;height:50%"></div>
    <div id="echartsDemo1" style="width: 100%;height:50%;"></div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Fly",
  data() {
    return {
    };
  }, 
  mounted() {
    this.drawLine();
    this.drawLine1();
  },
  methods: {
    drawLine() {
      let elementById = document.getElementById("echartsDemo");
      let echartsDemo = this.$echarts.init(elementById);
      let option = {
        backgroundColor: "#001529",
        color: ["#38b4ee", "#00BFFF", "#FF00FF", "#ffffff", "#000000"],
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },

        title: {
          text: "飞行高度变化趋势",
          left: "center",
          y: "10",
          textStyle: {
            color: "#F2F2F2"
          }
        },
        tooltip: {
          trigger: "axis"
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          axisTick: {
            show: true,
            lineStyle: {
              color: "#D9D9D9"
            }
          },
          axisLabel: {
            textStyle: {
              color: "#F2F2F2",

              fontWeight: "bold",
              fontSize: 12
            }
          },
          axisLine: {
            lineStyle: {
              color: "#D9D9D9"
            }
          },

          data: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]
        },
        yAxis: {
          min: 0,
          max: 5000,
          interval: 1000,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
            //    onZero:false
          },
          axisLabel: {
            formatter: "{value}",
            textStyle: {
              color: "#F2F2F2",

              fontWeight: "bold",
              fontSize: 12
            },
            margin: 20
          },
          splitLine: {
            //网格线
            show: true,
            lineStyle: {
              color: ["#E9E9E9"],
              type: "dashed",
              width: "1"
            }
          }
        },
        series: [
          {
            name: "敌机",
            type: "line",
            symbolSize: 0,
            color: ["#D13E57"],
            data: ["600", "700", "5000", "600", "4050", "2540", "4085"],
            label: {
              normal: {
                show: false,
                position: "top" //值显示
              }
            },
            markPoint: {
              symbol: "triangle"
            }
          },
          {
            name: "绿色",
            type: "line",
            symbolSize: 0,
            color: ["#2FC15B"],
            data: ["500", "1000", "2000", "3000", "4000", "5000", "3000"],
            label: {
              normal: {
                show: false,
                position: "top" //值显示
              }
            }
          }
        ]
      };
      echartsDemo.setOption(option);
      $(window).resize(function() {
        echartsDemo.resize();
      });
    },
    drawLine1() {
      let elementById = document.getElementById("echartsDemo1");
      let echartsDemo1 = this.$echarts.init(elementById);
      let option = {
        backgroundColor: "#001529",
        color: ["#38b4ee", "#00BFFF", "#FF00FF", "#ffffff", "#000000"],
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },

        title: {
          text: "飞行速度变化趋势",
          left: "center",
          y: "10",
          textStyle: {
            color: "#F2F2F2"
          }
        },
        tooltip: {
          trigger: "axis"
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          axisTick: {
            show: true,
            lineStyle: {
              color: "#D9D9D9"
            }
          },
          axisLabel: {
            textStyle: {
              color: "#F2F2F2",

              fontWeight: "bold",
              fontSize: 12
            }
          },
          axisLine: {
            lineStyle: {
              color: "#D9D9D9"
            }
          },

          data: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]
        },
        yAxis: {
          min: 0,
          max: 5000,
          interval: 1000,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
            //    onZero:false
          },
          axisLabel: {
            formatter: "{value}",
            textStyle: {
              color: "#F2F2F2",

              fontWeight: "bold",
              fontSize: 12
            },
            margin: 20
          },
          splitLine: {
            //网格线
            show: true,
            lineStyle: {
              color: ["#E9E9E9"],
              type: "dashed",
              width: "1"
            }
          }
        },
        series: [
          {
            name: "敌机",
            type: "line",
            symbolSize: 0,
            color: ["#D13E57"],
            data: ["600", "700", "5000", "600", "4050", "2540", "4085"],
            label: {
              normal: {
                show: false,
                position: "top" //值显示
              }
            },
            markPoint: {
              symbol: "triangle"
            }
          },
          {
            name: "绿色",
            type: "line",
            symbolSize: 0,
            color: ["#2FC15B"],
            data: ["500", "1000", "2000", "3000", "4000", "5000", "3000"],
            label: {
              normal: {
                show: false,
                position: "top" //值显示
              }
            }
          }
        ]
      };
      echartsDemo1.setOption(option);
      $(window).resize(function() {
        echartsDemo1.resize();
      });
    }
  }
};
</script>
<style scoped>
.fly {
  width: 100%;
  height: 100%;
}
.fly p {
  margin: 0px;
}
</style>