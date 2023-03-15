import PAside from './Aside.vue'

PAside.install=(app)=>{
  app.component(PAside.name,PAside)
}
// 单独导出Button对象
export const Aside=PAside
// 导出默认模块
export default PAside