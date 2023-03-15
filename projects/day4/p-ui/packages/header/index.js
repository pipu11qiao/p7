import PHeader from './Header.vue'

PHeader.install=(app)=>{
  app.component(PHeader.name,PHeader)
}
// 单独导出Button对象
export const Header=PHeader
// 导出默认模块
export default PHeader