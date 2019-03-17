<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>

  <!-- <div>
        <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
        <h1>我是表格牛阿</h1>
  </div>-->
</template>
 <script>
import axios from 'axios';
export default {
  create() {
    axios
      .get("http://127.0.0.1:8082/problem/list")
      .then(response => {
        console.log(response);
        console.log("heeeeeeellllooooo");
        this.problem = response.data;
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
      axios.get('https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

    // https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc
    //http://127.0.0.1:8082/problem/list"
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      problem: [{}]
    };
  }
};
</script>