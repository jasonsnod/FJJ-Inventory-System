<template>
  <div id="app">
    <div class="login-container">
      <div class="login-form">
        <!-- Main login form -->
        <form @submit.prevent="login">
          <div class="welcome-container">
            <h1>Welcome</h1>
          </div>
          <div role="alert" v-if="invalidCredentials">
            Invalid username and password!
          </div>
          <div role="alert" v-if="$route.query.registration">
            Thank you for registering, please sign in.
          </div>
          <div class="form-input-group">
            <label for="username">Username</label>
            <div class="input-with-icon">
              <font-awesome-icon :icon="faUser" />
              <input
                type="text"
                id="username"
                v-model="user.username"
                class="form-control"
                required
                autofocus
              />
            </div>
          </div>
          <div class="form-input-group">
            <label for="password">Password</label>
            <div class="input-with-icon">
              <font-awesome-icon :icon="faLock" />
              <input
                type="password"
                id="password"
                v-model="user.password"
                class="form-control"
                required
              />
            </div>
          </div>

          <!-- Forgot password link -->
          <div class="forgot-password-container">
            <a
              href="#"
              class="forgot-password-link"
              @click.prevent="showForgotPasswordForm = !showForgotPasswordForm"
            >
              Forgot Password?
            </a>
          </div>
          <button type="submit" class="btn btn-primary btn-block">
            Sign in
          </button>
        </form>

        <!-- Forgot password form -->
        <div v-if="showForgotPasswordForm" class="forgot-password-overlay">
          <div class="forgot-password-form">
            <h2 v-if="!resetPasswordSuccess">Forgot Password</h2>
            <h2 v-if="resetPasswordSuccess">Password Reset Successful!</h2>
            <div v-if="!resetPasswordSuccess">
              <div class="form-input-group">
                <label for="forgotPasswordEmail">Email</label>
                <input
                  type="email"
                  id="forgotPasswordEmail"
                  v-model="user.email"
                  class="form-control"
                  required
                />
              </div>
              <button
                type="button"
                class="btn btn-primary"
                @click="forgotPassword"
              >
                Submit
              </button>
            </div>
            <button
              v-if="resetPasswordSuccess"
              type="button"
              class="btn btn-primary"
              @click="closeForgotPasswordForm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authService from "../services/AuthService";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";

export default {
  name: "App",
  data() {
    return {
      faUser: faUser,
      faLock: faLock,
      resetPasswordSuccess: false,
      user: {
        username: "",
        password: "",
        email: "",
      },
      invalidCredentials: false,
      showForgotPasswordForm: false,
    };
  },
  methods: {
    async login() {
      try {
        const response = await authService.login(this.user);

        if (response.status === 200) {
          this.$store.commit("SET_AUTH_TOKEN", response.data.token);
          this.$store.commit("SET_USER", response.data.user);
          this.$router.push("/");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.invalidCredentials = true;
        }
      }
    },
    async forgotPassword() {
      try {
        const response = await authService.forgotPassword(this.user.email);

        if (response.status === 200) {
          this.resetPasswordSuccess = true;
          this.showForgotPasswordForm = false;
        } else {
          this.showForgotPasswordForm = false;
        }
      } catch (error) {
        this.showForgotPasswordForm = false;
      }
    },
    closeForgotPasswordForm() {
      this.showForgotPasswordForm = false;
      this.resetPasswordSuccess = false;
      this.user.email = "";
    },
  },
};
</script>

<style scoped>
.login-container {
  background-image: url("./src/Images/logistics-stock-transport-shipping.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.welcome-container {
  display: inline-block;
}

.login-form {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 45px;
  border-radius: 10px;
  width: 320px;
  height: 75vh;
  text-align: center;
  padding-right: 3%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-input-group {
  margin-bottom: 20px;
}

.form-control {
  width: calc(100% - 20px);
  height: 30px;
  border: none;
  border-bottom: 2px solid #000000;
  padding-left: 30px;
}

.btn-primary {
  background-color: #f7f9fc;
  color: #fff;
}

.btn-primary:hover {
  background-color: #f7d4a0;
}

.btn-block {
  width: 30%;
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}
.input-with-icon font-awesome-icon {
  margin-right: 10px;
}

.input-with-icon i {
  position: absolute;
  left: 10px;
  transform: translateY(-50%);
  color: #555;
}

.btn {
  width: 100%;
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  color: #000;
  background: #fff;
  line-height: 1px;
  border-radius: 40px;
  padding: 20px;
  font-size: 30px;
  box-shadow: rgb(255, 198, 0) -2px -2px 0px 2px,
    rgb(246, 84, 174) 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 0px 2px 7px;
  transition: all 0.2s;
  transform: scale(1.01);
}

.forgot-password-container {
  display: flex;
  justify-content: flex-end;
}

.forgot-password-link {
  color: #030303;
  text-decoration: none;
  margin-top: 5px;
  padding: 10px;
  display: inline-block;
}

.forgot-password-link:hover {
  text-decoration: underline;
}

.forgot-password-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.forgot-password-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 300px;
}
</style>
