<template>
  <div class="form" v-loading.fullscreen.lock="fullscreenLoading">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
      <el-row type="flex" class="row-bg" justify="center">
        <el-row :gutter="20" type="flex" class="row-bg" justify="space-between">
          <el-col>
            <el-card class="name-card">
              <el-form-item label-width="0" inline="true" prop="callSign">
                <el-input placeholder="callSign" v-model="ruleForm.callSign"></el-input>
              </el-form-item>
            </el-card>
          </el-col>
          <el-col>
            <el-card class="name-card">
              <el-form-item label-width="0" inline="true" prop="battleTag">
                <el-input placeholder="battle#tag" v-model="ruleForm.battleTag"></el-input>
              </el-form-item>
            </el-card>
          </el-col>
        </el-row>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-row :gutter="20" type="flex" class="row-bg" justify="space-between">
          <el-col>
            <div class="grid-content bg-purple">
              <el-card class="box-card" v-bind:class="{ active: ruleForm.canPlay.tank }">
                <svg
                  @click="ruleForm.canPlay.tank = !ruleForm.canPlay.tank"
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
                <el-form-item label-width="0" inline="true" prop="SR.tank">
                  <el-input-number
                    class="rank-input"
                    size="small"
                    v-model="ruleForm.SR.tank"
                    :min="1"
                    :max="4000"
                  ></el-input-number>
                </el-form-item>
                <el-form-item inline-message="true" label-width="0" prop="tank">
                  <el-checkbox v-model="ruleForm.canPlay.tank"></el-checkbox>
                </el-form-item>
              </el-card>
            </div>
          </el-col>
          <el-col>
            <div class="grid-content bg-purple-light">
              <el-card class="box-card" v-bind:class="{ active: ruleForm.canPlay.damage }">
                <svg
                  @click="ruleForm.canPlay.damage = !ruleForm.canPlay.damage"
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
                <el-form-item label-width="0" inline="true" prop="SR.damage">
                  <el-input-number
                    class="rank-input"
                    size="small"
                    v-model="ruleForm.SR.damage"
                    :min="1"
                    :max="5000"
                  ></el-input-number>
                </el-form-item>
                <el-form-item inline-message="true" label-width="0" prop="damage">
                  <el-checkbox v-model="ruleForm.canPlay.damage"></el-checkbox>
                </el-form-item>
              </el-card>
            </div>
          </el-col>
          <el-col>
            <div class="grid-content bg-purple">
              <el-card class="box-card" v-bind:class="{ active: ruleForm.canPlay.support }">
                <svg
                  @click="ruleForm.canPlay.support = !ruleForm.canPlay.support"
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
                <el-form-item label-width="0" inline="true" prop="SR.support">
                  <el-input-number
                    class="rank-input"
                    size="small"
                    v-model="ruleForm.SR.support"
                    :min="1"
                    :max="4000"
                  ></el-input-number>
                </el-form-item>
                <el-form-item inline-message="true" label-width="0" prop="support">
                  <el-checkbox v-model="ruleForm.canPlay.support"></el-checkbox>
                </el-form-item>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-card class="prefferedRole">
          <el-form-item inline-message="true" label label-width="auto" prop="prefferedRole">
            <el-select v-model="ruleForm.prefferedRole" placeholder=" Select Preffered Role">
              <el-option label="None" value="none"></el-option>
              <el-option label="Tank" value="tank"></el-option>
              <el-option label="Damage" value="damage"></el-option>
              <el-option label="Support" value="support"></el-option>
            </el-select>
          </el-form-item>
        </el-card>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-button class="ready-btn" type="warning" @click="submitForm('ruleForm')">Ready</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { db, auth } from "../firebase";

interface Form {
  callSign: string;
  battleTag: string;
  canPlay: {
    tank: boolean;
    damage: boolean;
    support: boolean;
  };
  SR: {
    tank: number;
    damage: number;
    support: number;
  };
  prefferedRole: string;
}

@Component
export default class RankForm extends Vue {
  @Prop() private msg!: string;

  private fullscreenLoading = true;

  checkSR = (rule: string, value: number) => {
    return new Promise((resolve, reject) => {
      console.log(value);
      if (!value) {
        return reject("Required");
      }
      if (isNaN(value)) {
        return reject("rank must use numbers");
      }
      if (value < 100) {
        return reject("Invalid SR");
      }
      if (value > 5000) {
        return reject("Invalid SR");
      }
      resolve();
    });
  };

  checkBattleTag = (rule: string, value: string) => {
    return new Promise((resolve, reject) => {
      console.log(value);
      if (!value) {
        return reject("Required");
      }
      if (typeof value !== "string") {
        return reject("BattleTag must be string");
      }
      if (!value.includes("#")) {
        return reject("Invalid BattleTag");
      }
      if (value.length < 5) {
        return reject("Invalid BattleTag");
      }
      resolve();
    });
  };

  checkRole = () => {
    return new Promise((resolve, reject) => {
      if (
        !this.ruleForm.canPlay.tank &&
        !this.ruleForm.canPlay.damage &&
        !this.ruleForm.canPlay.support
      ) {
        return reject("Please select at lest one role");
      }
      resolve();
    });
  };

  checkPreffered = (rule: string, value: string) => {
    return new Promise((resolve, reject) => {
      switch (value) {
        case "tank":
          if (this.ruleForm.canPlay.tank) {
            return resolve();
          }
          return reject("tank is not selected");

        case "damage":
          if (this.ruleForm.canPlay.damage) {
            return resolve();
          }
          return reject("damage is not selected");

        case "support":
          if (this.ruleForm.canPlay.support) {
            return resolve();
          }
          return reject("support is not selected");

        case "":
          this.ruleForm.prefferedRole = "none";
          return resolve();

        default:
          resolve();
          break;
      }
      resolve();
    });
  };

  created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = db.collection("players").doc(user.uid);
        docRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              const data = doc.data();
              if (data) {
                this.ruleForm.callSign = data.callSign;
                (this.ruleForm.battleTag = data.battleTag),
                  (this.ruleForm.SR = data.SR),
                  (this.ruleForm.prefferedRole = data.prefferedRole);
                this.fullscreenLoading = false;
              }
            } else {
              this.fullscreenLoading = false;
            }
          })
          .catch((error) => {
            this.alart(error, "Error", "close", false);
          });
      }
    });
  }

  private ruleForm: Form = {
    callSign: "",
    battleTag: "",
    SR: {
      tank: 0,
      damage: 0,
      support: 0,
    },
    canPlay: {
      tank: false,
      damage: false,
      support: false,
    },
    prefferedRole: "",
  };

  private rules = {
    callSign: [
      { required: true, message: "Please input callSign", trigger: "blur" },
      { min: 3, max: 12, message: "Length should be 3 to 12", trigger: "blur" },
    ],
    battleTag: [{ validator: this.checkBattleTag, trigger: "blur" }],
    "SR.tank": [{ validator: this.checkSR, trigger: "blur" }],
    "SR.damage": [{ validator: this.checkSR, trigger: "blur" }],
    "SR.support": [{ validator: this.checkSR, trigger: "blur" }],
    tank: [{ validator: this.checkRole, trigger: "blur" }],
    damage: [{ validator: this.checkRole, trigger: "blur" }],
    support: [{ validator: this.checkRole, trigger: "blur" }],
    prefferedRole: [{ validator: this.checkPreffered, trigger: "blur" }],
  };

  alart(msg: string, title: string, confirm: string, showConfirm: boolean) {
    this.$alert(msg, title, {
      confirmButtonText: confirm,
      showClose: false,
      showConfirmButton: showConfirm,
    });
  }

  submitForm(formName: string) {
    (this.$refs[formName] as Vue & {
      validate: (cb: (valid: boolean) => void) => void;
    }).validate((valid: boolean) => {
      if (valid) {
        auth.onAuthStateChanged(async (user) => {
          this.fullscreenLoading = true;
          if (user) {
            try {
              await db.collection("players").doc(user.uid).set(this.ruleForm);
              this.fullscreenLoading = false;
              this.alart(
                "We got you, you can now close this page",
                "Thank You !",
                "Update again",
                true
              );
            } catch (error) {
              this.fullscreenLoading = false;
              this.alart(error, "Error", "Retry", true);
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
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.name-card {
  width: 310px;
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

.prefferedRole {
  height: 82px;
}

.ready-btn {
  font-size: 20px;
  height: 60px;
  width: 200px;
  margin-top: 20px;
}

svg {
  margin: 10px;
  cursor: pointer;
  fill: #1a325e;
}
</style>
