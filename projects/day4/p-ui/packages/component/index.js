import PComponent from './Component.vue'

PComponent.install=(app)=>{
  app.component(PComponent.name,PComponent)
}
// 单独导出Button对象
export const Component=PComponent
// 导出默认模块
export default PComponent