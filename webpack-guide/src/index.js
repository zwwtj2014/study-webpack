import _ from 'lodash';
import './style.css';
import Lufei from './lufei.jpg';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 添加图片
  var lufei = new Image();
  lufei.src = Lufei;
  element.appendChild(lufei);

  return element;
}

document.body.appendChild(component());
