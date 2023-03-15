import PContainer from './Container.vue'

PContainer.install=(app)=>{
  app.component(PContainer.name,PContainer)
}
// 单独导出Button对象
export const Container=PContainer
// 导出默认模块
export default PContainer