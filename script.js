const para = document.getElementById('displayText');

setTimeout(() => {
  para.innerText = '10';
  setTimeout( () => {
    para.innerText = '9';
    setTimeout( () => {
      para.innerText = '8';
      setTimeout( () => {
        para.innerText = '7';
        setTimeout( () => {
          para.innerText = '6';
          setTimeout( () => {
            para.innerText = '5';
            setTimeout( () => {
              para.innerText = '4';
              setTimeout( () => {
                para.innerText = '3';
                setTimeout( () => {
                  para.innerText = '2';
                  setTimeout( () => {
                    para.innerText = '1';
                    setTimeout( () => {
                      para.innerText = 'Happy Independance Day';
                      para.style.color = 'skyblue';
                      document.body.setAttribute('class', 'background') 
                    }
                    ,1000)
                  }
                  ,1000)
                }
                ,1000)
               }
               ,1000)
            }
            ,1000)
          }
          ,1000)
        }
        ,1000)
      }
      ,1000)
    }
    ,1000)
  }
  ,1000)
}
,1000)