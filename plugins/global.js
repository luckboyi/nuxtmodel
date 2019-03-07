import '@babel/polyfill'
import Vue from 'vue'
import msgCon from '@/components/mask/msg'
import http from '../assets/utils/http'
const maskConContructor = Vue.extend(msgCon)
export const maskCom = (params) => {
  const maskConDom = new maskConContructor().$mount()
  var bindGameObj = document.getElementById('maskCon')
  if (bindGameObj != null) {
    bindGameObj.parentNode.removeChild(bindGameObj)
  }
  if (params !== undefined) {
    document.body.appendChild(maskConDom.$el)
  }
  params !== undefined ? maskConDom.params = params : ''
}
Vue.prototype.$msgCon = maskCom
if (process.client) {
  window.history.replaceState = window.history.replaceState || function() {}
  window.maskCom = maskCom
  window.http = http
}
