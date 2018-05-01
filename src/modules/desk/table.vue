<template>
  <div class="testTable">
    <section>
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
  			<el-form :inline="true" :model="filters">
  				<el-form-item>
  					<el-input v-model="filters.name" placeholder="姓名"></el-input>
  				</el-form-item>
  				<el-form-item>
  					<el-button type="primary" @click="searchInfoByName(filters.name)">查询</el-button>
  				</el-form-item>
  				<el-form-item>
  					<el-button type="primary" @click="handleAdd">新增</el-button>
  				</el-form-item>
  			</el-form>
		  </el-col>
      <!--列表-->
  		<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;" :stripe="true">
  			<el-table-column type="selection" width="55">
  			</el-table-column>
  			<el-table-column type="index" width="60">
  			</el-table-column>
  			<el-table-column prop="name" label="姓名" width="120" sortable>
  			</el-table-column>
  			<el-table-column prop="gender" label="性别" width="100" sortable>
  			</el-table-column>
  			<el-table-column prop="age" label="年龄" width="100" sortable>
  			</el-table-column>
  			<el-table-column prop="birthday" label="生日" width="120" sortable>
  			</el-table-column>
  			<el-table-column prop="address" label="地址" min-width="180" sortable>
  			</el-table-column>
  			<el-table-column label="操作" width="150">
  				<template scope="scope">
  					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
  					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
  				</template>
  			</el-table-column>
  		</el-table>

      <!--新增及修改人员信息弹窗-->
		<tableEdit
      :formVisible = "formVisible"
      :form = "form"
      :formRules = "formRules"
      :tableTitle = "tableTitle"
      :tableType = "tableType"
      @addCancel = "addCancel"
      @getUsers = "getUsers">
    </tableEdit>
    </section>
  </div>
</template>

<script>
import { searchInfo, delUser } from '../../api/login'
import tableEdit from '../../components/tableEdit.vue'
export default {
  name: 'hello',
  data () {
    return {
      filters: {
        name: ''
      },
      tableTitle: '',
      tableType: '',
      listLoading: false,
      // 列表被选择列
      sels: [],
      users: [{
        name: '王国政',
        gender: '男',
        age: '36',
        birthday: '1981-07-09',
        address: '北京市前门大街'
      }],
      formVisible: false,
      formRules: {
        name: [
          { required: true, message: '请您完善此项', trigger: 'blur' }
        ]
      },
      form: {
        name: '',
        gender: '',
        age: '',
        birthday: '',
        address: ''
      }
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    getUsers () {
      this.formVisible = false
      // 因为暂时未做分页功能 先固定查询页码（offset）与查询条数（limit）
      const params = 'offset=1&limit=10'
      searchInfo(params).then(res => {
        console.log(res.data)
        this.users = res.data.content
      })
    },
    addCancel (message) {
      this.formVisible = false
      this.$alert(message)
    },
    // 通过姓名模糊查询
    searchInfoByName (name) {
      // 因为暂时未做分页功能 先固定查询页码（offset）与查询条数（limit）
      const queryName = `offset=1&limit=10&name=${name}`
      searchInfo(queryName).then(res => {
        this.users = res.data.content
      })
    },
    // 点击添加
    handleAdd () {
      console.log('add')
      this.tableType = 'add'
      this.tableTitle = '新增人员'
      this.formVisible = true
      this.form = {
        name: '',
        gender: '男',
        age: '',
        birthday: '',
        address: ''
      }
    },
    // 点击
    handleEdit (index, row) {
      this.formVisible = true
      this.tableType = 'edit'
      this.tableTitle = '编辑人员'
      this.form = Object.assign({}, row)
    },
    // 删除人员
    handleDel (index, row) {
      this.$confirm('确认删除该人员信息吗？', '确认删除', {
        type: 'warning'
      }).then(() => {
        this.listLoading = true
        // 删除人员所需将数据id传到后台 数据格式如下
        let params = {
          'users': [{
            'id': row.id
          }]
        }
        delUser(params).then(res => {
          this.listLoading = false
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.getUsers()
        })
      }).catch(() => {

      })
    },
    // 修改选择列
    selsChange (sels) {
      this.sels = sels
    }
  },
  components: {
    tableEdit
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.testTable {
  text-align: left;
}
</style>
