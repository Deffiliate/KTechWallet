<template>
  <v-layout wrap row>
    <v-flex xs12 sm6 md4 lg4 xl3 v-for="name in accountNames" :key="name">
      <WalletInfoCard v-bind:AccountName="name"/>
    </v-flex>

    <v-card v-if="!ShowCreateAccount()">
      <v-card-title>
        <h1>No Account found</h1>
      </v-card-title>

      <v-card-text>The private key will be stored password protected in your browser's localstorage.</v-card-text>
      <v-card-actions>
        <v-btn color="accent" to="/wallet/createaccount">
          <v-icon color="primary">add</v-icon>Create Account
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";
import WalletInfoCard from "@/KTechWallet/Component/WalletInfoCard.vue";
import store from "../store/store";

import {
  KtlAccountData,
  eCoinType,
  KtlKeyStorage,
  eKeyTypes,
  KtlAccount,
  KtlStorageWindowLocalStorage
} from "@/KTechLib/KTechLib";

@Component({
  components: { WalletInfoCard }
})
export default class Tools extends Vue {
  accountNames: Array<string> = store.AccountManager.GetAccountNames();
  ShowCreateAccount(): boolean {
    if (!this.accountNames || this.accountNames.length === 0) {
      return false;
    }
    return true;
  }
}
</script>