<template>
    <div>
      <h2 class="sub-header">英雄管理</h2>
      <router-link :to="{name: 'heroesadd'}" class="btn btn-success">添加</router-link>
      <!-- <a class="btn btn-success" href="add.html">添加</a> -->
      <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in list" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.gender }}</td>
                <td>
                  <!-- <router-link :to="'/heroes/edit/'+item.id">编辑</router-link> -->
                  <!-- <a href="edit.html">编辑</a> -->
                  <!-- <router-link :to="'/heroes/edit/'+item.id">编辑</router-link> -->
                  <router-link :to="{name: 'heroesedit', params: {id:item.id}}">编辑</router-link>
                  &nbsp;&nbsp;
                  <a href="javascript:void(0)" @click="handelDelete(item.id)">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    // 加载列表
    this.loadData();
  },
  methods: {
    loadData() { // 获取数据的方法
      // axios发送请求
      this.$http('http://localhost:3000/heroes')
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            this.list = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handelDelete(id) { // 删除数据的方法
      // 删除提示
      if (!confirm('是否确认删除数据')) {
        return;
      }
      // 发送请求,根据id删除数据
      this.$http.delete(`http://localhost:3000/heroes/${id}`)
        .then((res) => {
          // 删除成功,刷新列表
          this.loadData();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style>

</style>
