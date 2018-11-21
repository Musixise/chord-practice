/**
 * 
 * 语法定义   
 *    *和弦名*  
 *    #五线谱#
 * 
 */

export default question => {
  let arr = question.split(/(?=[\*|\#])/g)
  for (let i = 0; i < arr.length; ++i) {
    if(arr[i][0] === "*") {
      parseToObject(arr, i, 'chord')
    }
    if(arr[i][0] === "#") {
      parseToObject(arr, i, 'notes')
    }
  }
  return arr
}

const parseToObject = (arr, index, type) => {
  arr[index] = {type, content: arr[index].substr(1, arr[index].length)}
  arr[index+1] =  arr[index+1].substr(1,  arr[index+1].length)
}