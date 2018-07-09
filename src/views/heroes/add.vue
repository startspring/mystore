<template>
  <div>
      <h2 class="sub-header">添加英雄</h2>
      <form>
          <div class="form-group">
            <label for="gender">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="gender" placeholder="请输入英雄名称">
          </div>
          <div class="form-group">
            <label for="sex">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="sex" placeholder="请输入英雄性别">
          </div>
          <button type="submit" class="btn btn-success" @click.prevent="handleAdd">提交</button>
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
      }
    };
  },
  methods: {
    handleAdd() {
      this.$http.post('/heroes', this.formData)
        .then((res) => {
          if (res.status === 201) {
            // 添加成功,编程式导航实现跳转
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
