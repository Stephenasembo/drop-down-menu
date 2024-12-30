import './styles.css';

let isHidden = false;
const dropDownBtn = document.querySelector('#dropDownBtn');
const dropDownContent = document.querySelector('#dropDownContent');
function showContent() {
  if (isHidden) {
    dropDownContent.classList.toggle('hide');
    isHidden = true;
  } else {
    dropDownContent.classList.toggle('hide');
    isHidden = false;
  }
}

dropDownBtn.addEventListener('click', showContent);
