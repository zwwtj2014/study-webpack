import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.onclick = Print.bind(null, 'Hello webpack!');

  return element;
}

document.body.appendChild(component());
