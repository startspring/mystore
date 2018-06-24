<template>
  <div>
      <h2 class="sub-header">编辑英雄</h2>
      <form>
          <div class="form-group">
            <label for="gender">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="gender" placeholder="请输入英雄名称">
          </div>
          <div class="form-group">
            <label for="sex">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="sex" placeholder="请输入英雄性别">
          </div>
          <button type="submit" class="btn btn-success" @click.prevent="handleEdit">提交</button>
      </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      },
      id: -1
    };
  },
  created() {
    // 获取URL上id参数
    this.id = this.$route.params.id;
    // 加载数据
    this.loadData();
  },
  methods: {
    loadData() {
      // 发送请求,获取要编辑的英雄对象
      this.$http.get(`http://localhost:3000/heroes/${this.id}`)
        .then((res) => {
          if (res.status === 200) {
            this.formData = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleEdit() {
      // 发送编辑patch请求,带有数据---请求体
      this.$http.patch(`http://localhost:3000/heroes/${this.id}`, this.formData)
        .then((res) => {
          if (res.status === 200) {
            // 编辑成功,跳转到列表页面
            this.$router.push({
              name: 'heroes'
            });
          }
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
