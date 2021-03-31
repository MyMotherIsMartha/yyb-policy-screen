<template>
  <div class="home">
    <div id="myChart" style="width:400px;height:400px"></div>
    <button @click="drawLine">drawLine</button>
  </div>
</template>

<script>
import {encodeAES} from "../utils/crypto" 
import {login} from "../api/login"
import {zczl,zcdf,zcfbl,zcfzb,zcfblsub} from "../api/home"


export default {
  name: 'Home',
  data() {
    return {
      zczl:{
          "totalReleasePolicyNum": 6,
          "validPolicyNum": 5,
          "expiryPolicyNum": 1,
          "browsePolicyNum": 9
      },
      zcdf:{
          "totalAmount": 619.07,
          "totalNum": 33,
          "totalAlreadyAmount": 2.66,
          "totalAlreadyNum": 6
      },
      zcfbl:[
          {
              "area": 1,
              "areaName": "市本级",
              "count": 4
          },
          {
              "area": 6,
              "areaName": "鄞州区",
              "count": 2
          }
      ],
      zcfzb: [
          {
              "deptId": "ff8080815d551320015d5893a1c70006",
              "releaseDept": "市、县（市、区）",
              "policyNum": 2
          },
          {
              "deptId": "ff8080815de37958015de61bb89b21fd",
              "releaseDept": "市委农办（市农办）",
              "policyNum": 1
          },
          {
              "deptId": "bb4a9da36460055b016462d39ed373ad",
              "releaseDept": "鄞州区人才服务中心",
              "policyNum": 1
          },
          {
              "deptId": "ff8080815de37958015de61bb8e92203",
              "releaseDept": "市信访局",
              "policyNum": 1
          },
          {
              "deptId": "bb4a9da36ad53480016adeb82b453cca",
              "releaseDept": "市服务业局",
              "policyNum": 1
          }
      ],
      area:[
        {
          "areaid":1,
          "name":"市本级"
        }
        //  1: 2:海曙区 3:江北区 4:镇海区 5:北仑区 6:鄞州区 7:奉化区 8:余姚市 9:慈溪市 10:宁海县 11:象山县 12:宁波杭州湾新区 13:梅山物流产业集聚区 14:宁波保税区 15:大榭开发区 16:宁波国家高新区 17:东钱湖 18:宁波石化开发区19:宁波临空经济示范区
      ]
      
    }
  },
  components: {
  },
  mounted(){
    this.login();
  },
  methods: {
    drawLine(){
      zcdf(1).then(res=>{
        console.log(res);
      });
      // let mychart= this.$echarts.init(document.getElementById('myChart'))
      // mychart.setOption({
      //   title:{text:'tttt'},
      //   tooltip:{},
      //   xAxis:{
      //     data:["a","b","c","d"]
      //   },
      //   yAxis:{},
      //   series:[{
      //     name: 'vvv',
      //     type: 'bar',
      //     data: [5,20,30,50]
      //   }]
      // });

    },
    login(){   
      this.$store.dispatch("Login").then(()=>{
        console.log("logged");
      });
    }

  }
}
</script>
