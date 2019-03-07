import '@babel/polyfill'
import Vue from 'vue'
if (process.client) {
  window.history.replaceState = window.history.replaceState || function() {}
}
