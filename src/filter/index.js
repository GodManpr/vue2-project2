import * as filters from './filters'
import Vue from "vue";

Object.keys(filters).forEach(v => {
    Vue.filter(v, filters[v])
})