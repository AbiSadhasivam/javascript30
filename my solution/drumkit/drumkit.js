  
  document.onkeydown = (evt) => {
    let query = '[data-key="' + evt.which+'"]';
    let [ele, audioToPlay] = document.querySelectorAll(query);
    let selectedEle = document.getElementsByClassName('col-selected')[0];
    if (selectedEle) { 
      selectedEle.classList.remove('col-selected');
    }
    if (ele) {      
      audioToPlay.play();
      ele.classList.add('col-selected');
    }
  }
  