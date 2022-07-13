<template>
  <div>
    <i class="el-icon-s-unfold"></i>
    <i class="el-icon-rank"></i>
    <i class="el-icon-circle-close"></i>
    <el-dropdown>
      <span class="el-dropdown-link">
        duck<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人设置</el-dropdown-item>
        <el-dropdown-item>安全退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
i {
  color: white;
  font-size: 25px;
}
.el-icon-s-unfold {
  position: absolute;
  margin-top: 20px;
}
.el-icon-rank {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin-right: 200px;
  margin-top: 28px;
}
.el-icon-circle-close {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin-right: 160px;
  margin-top: 28px;
}
.el-dropdown {
  position: absolute;
  right: 0;
  margin-right: 15px;
  color: white;
  font-size: 25px;
}
</style>
