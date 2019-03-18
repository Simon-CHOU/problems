<template>
  <el-table
    :data="problems"
    style="width: 100%"
  >
    <el-table-column
      prop="idproblem"
      label="idproblem"
      width="180"
    ></el-table-column>
    <el-table-column
      prop="title"
      label="title"
      width="180"
    ></el-table-column>
    <el-table-column
      prop="description"
      label="description"
      width="500"
    ></el-table-column>
    <el-table-column
      prop="committed"
      label="committed"
    ></el-table-column>
    <el-table-column
      prop="passed"
      label="passed"
    ></el-table-column>
    <el-table-column
      prop="tag"
      label="tag"
    ></el-table-column>
  </el-table>
</template>
 <script>
import axios from "axios";
export default {
  create() {},
  mounted() {
    axios
      .get("http://127.0.0.1:8082/problem/list")
      .then(response => {
        this.problems = response.data;
        console.log(response.data[1].id);
      })
      .catch(function(error) {
        console.log(error);
      });
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
      problems: []
    };
  }
};
</script>