import [vueComponentName] from './[vueFileName]'

[vueComponentName].install=(app)=>{
  app.component([vueComponentName].name,[vueComponentName])
}
// 单独导出Button对象
export const [componentName]=[vueComponentName]
// 导出默认模块
export default [vueComponentName]