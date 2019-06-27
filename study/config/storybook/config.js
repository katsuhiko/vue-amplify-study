/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue'

import Vue from 'vue'
import Vuetify from 'vuetify/dist/vuetify.min'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify, {
  iconfont: 'md'
})

addDecorator(() => ({
  template: '<v-app><story/></v-app>'
}))

const req = require.context('../../src/stories', true, /.stories.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
