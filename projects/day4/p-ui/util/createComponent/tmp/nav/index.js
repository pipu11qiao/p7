import PNav from './Nav.vue'

PNav.install=(app)=>{
  app.component(PNav.name,PNav)
}
// 单独导出Button对象
export const Nav=PNav
// 导出默认模块
export default PNav