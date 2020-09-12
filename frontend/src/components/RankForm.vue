<template>
  <div class="form">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
      <el-row type="flex" justify="center">
        <el-card class="name-card">
          <el-form-item label-width="0" inline="true" prop="name">
            <el-input placeholder="Player Name" v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-card>
      </el-row>

      <el-row type="flex" class="row-bg" justify="center">
        <el-row :gutter="20" type="flex" class="row-bg" justify="space-between">
          <el-col>
            <div class="grid-content bg-purple">
              <el-card class="box-card" v-bind:class="{ active: ruleForm.tank }">
                <svg
                  @click="ruleForm.tank = !ruleForm.tank"
                  class="icon"
                  viewBox="0 0 32 32"
                  role="presentation"
                >
                  <title>Tank</title>
                  <path
                    d="M29,10.7c0,2.1,0,4.1,0,6.2c0,0.6-0.1,1.1-0.4,1.6c-2.9,5.3-6.8,9.7-11.8,13.2c-0.6,0.4-1,0.4-1.6,0
                    c-4.9-3.4-8.8-7.8-11.7-13c-0.3-0.6-0.4-1.2-0.4-1.8c0-3.9,0.1-7.8,0-11.7C3,2.3,5.2,1.9,7.1,1.4C10.4,0.6,13.3,0,16.6,0
                    c3.1,0,7.7,1.1,9.4,1.6c1.3,0.4,2.7,0.9,2.9,2.2C29,4.9,28.9,6,29,7.1C29,8.3,29,9.5,29,10.7C29,10.7,29,10.7,29,10.7z"
                  />
                </svg>
                <el-form-item label-width="0" inline="true" prop="tankSR">
                  <!-- <el-input class="rank-input" placeholder="Tank Rank" v-model="ruleForm.tankSR"></el-input> -->
                  <el-input-number  class="rank-input" size="small" v-model="ruleForm.tankSR"  :min="1" :max="4000"></el-input-number>
                </el-form-item>
                <el-form-item inline-message="true" label-width="0" prop="tank">
                  <el-checkbox v-model="ruleForm.tank"></el-checkbox>
                </el-form-item>
              </el-card>
            </div>
          </el-col>
          <el-col>
            <div class="grid-content bg-purple-light">
              <el-card class="box-card" v-bind:class="{ active: ruleForm.damage }">
                <svg
                  @click="ruleForm.damage = !ruleForm.damage"
                  class="icon"
                  viewBox="0 0 32 32"
                  role="presentation"
                >
                  <title>Damage</title>
                  <g>
                    <rect x="2.1" y="28.1" width="7.1" height="3.9" />
                    <path
                      d="M9.1,7c0,0,0-0.5,0-0.7C8.6,1.5,5.6,0,5.6,0s-3,1.5-3.5,6.3c0,0.2,0,0.7,0,0.7v18.4h3.5h3.5V7z"
                    />
                  </g>
                  <g>
                    <rect x="12.5" y="28.1" width="7.1" height="3.9" />
                    <path
                      d="M19.5,7c0,0,0-0.5,0-0.7C19,1.5,16,0,16,0s-3,1.5-3.5,6.3c0,0.2,0,0.7,0,0.7v18.4H16h3.5V7z"
                    />
                  </g>
                  <g>
                    <rect x="22.9" y="28.1" width="7.1" height="3.9" />
                    <path
                      d="M29.9,7c0,0,0-0.5,0-0.7C29.4,1.5,26.4,0,26.4,0s-3,1.5-3.5,6.3c0,0.2,0,0.7,0,0.7v18.4h3.5h3.5V7z"
                    />
                  </g>
                </svg>
                <el-form-item label-width="0" inline="true" prop="damageSR">
                  <!-- <el-input
                    class="rank-input"
                    placeholder="Damage Rank"
                    v-model="ruleForm.damageSR"
                  ></el-input> -->
                  <el-input-number class="rank-input" size="small" v-model="ruleForm.damageSR"  :min="1" :max="4000"></el-input-number>
                </el-form-item>
                <el-form-item inline-message="true" label-width="0" prop="damage">
                  <el-checkbox v-model="ruleForm.damage"></el-checkbox>
                </el-form-item>
              </el-card>
            </div>
          </el-col>
          <el-col>
            <div class="grid-content bg-purple">
              <el-card class="box-card" v-bind:class="{ active: ruleForm.support }">
                <svg
                  @click="ruleForm.support = !ruleForm.support"
                  class="icon"
                  viewBox="0 0 32 32"
                  role="presentation"
                >
                  <title>Support</title>
                  <path
                    fill-rule="evenodd"
                    d="M29.3,10.2h-7.5V2.7c0-1.5-1.2-2.7-2.7-2.7h-6.3c-1.5,0-2.7,1.2-2.7,2.7v7.5H2.7
		c-1.5,0-2.7,1.2-2.7,2.7v6.3c0,1.5,1.2,2.7,2.7,2.7h7.5v7.5c0,1.5,1.2,2.7,2.7,2.7h6.3c1.5,0,2.7-1.2,2.7-2.7v-7.5h7.5
		c1.5,0,2.7-1.2,2.7-2.7v-6.3C32,11.4,30.8,10.2,29.3,10.2z"
                  />
                </svg>
                <el-form-item label-width="0" inline="true" prop="supportSR">
                  <!-- <el-input
                    class="rank-input"
                    placeholder="Support Rank"
                    v-model="ruleForm.supportSR"
                  ></el-input> -->
                  <el-input-number class="rank-input" size="small" v-model="ruleForm.supportSR"  :min="1" :max="4000"></el-input-number>
                </el-form-item>
                <el-form-item inline-message="true" label-width="0" prop="support">
                  <el-checkbox v-model="ruleForm.support"></el-checkbox>
                </el-form-item>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-button type="warning" @click="submitForm('ruleForm')">Ready</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {db, auth} from "../firebase";
   
@Component
export default class PlayerName extends Vue {
  @Prop() private msg!: string;

  checkSR = (rule: string, value: number) => {
    return new Promise((resolve, reject) => {
      if (!value) {
        return reject("Required");
      }
      if (isNaN(value)) {
        return reject("rank must use numbers");
      }
      if (value > 5000) {
        return reject("Invalid SR");
      }
      resolve();
    });
  };

  checkRole = () => {
    return new Promise((resolve, reject) => {
      if (
        !this.ruleForm.tank &&
        !this.ruleForm.damage &&
        !this.ruleForm.support
      ) {
        return reject("Please select at lest one role");
      }
      resolve();
    });
  };

  private ruleForm = {
    name: localStorage.name ? localStorage.name : "",
    tankSR: localStorage.tankSR ? localStorage.tankSR : null,
    damageSR: localStorage.damageSR ? localStorage.damageSR : null,
    supportSR: localStorage.supportSR ? localStorage.supportSR : null,
    tank: false,
    damage: false,
    support: false,
  };

  private rules = {
    name: [
      { required: false, message: "Please input player name", trigger: "blur" },
      { min: 3, max: 12, message: "Length should be 3 to 12", trigger: "blur" },
    ],
    tankSR: [{ validator: this.checkSR, trigger: "blur" }],
    damageSR: [{ validator: this.checkSR, trigger: "blur" }],
    supportSR: [{ validator: this.checkSR, trigger: "blur" }],
    tank: [{ validator: this.checkRole, trigger: "blur" }],
    damage: [{ validator: this.checkRole, trigger: "blur" }],
    support: [{ validator: this.checkRole, trigger: "blur" }],
  };

  submitForm(formName: string) {
    (this.$refs[formName] as Vue & {
      validate: (cb: (valid: boolean) => void) => void;
    }).validate((valid: boolean) => {
      if (valid) {
        localStorage.name = this.ruleForm.name;
        localStorage.tankSR = this.ruleForm.tankSR;
        localStorage.damageSR = this.ruleForm.damageSR;
        localStorage.supportSR = this.ruleForm.supportSR;
        auth.onAuthStateChanged(async user => {
           if (user) {
             try {
               await db.collection('players').doc(user.uid).set(this.ruleForm);
               console.log('ok')
             } catch(error) {
               console.log(error)
             }
           }
            });
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  padding-top: 5%;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.name-card {
  width: 480px;
  height: 80px;
}

.box-card {
  width: 200px;
  height: 320px;
}

.rank-input {
  margin-top: 10px;
}

.el-card {
  background-color: #ffffff82 !important;
}

.active {
  background-color: white !important;
}

svg {
  margin: 10px;
  fill: #1a325e;
}
</style>
