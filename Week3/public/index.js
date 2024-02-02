document.addEventListener('DOMContentLoaded',()=>{
  const numberInput  = document.getElementById('numberInput')
  const numberButton = document.getElementById('numberButton')
  const result = document.getElementById('result') 

  numberButton.addEventListener('click',()=>{
    const inputValue = numberInput.value.trim()

    if( !inputValue ){
      result.textContent = 'Lack of Parameter'
    }else if (isNaN(parseInt(inputValue))){
      result.textContent = 'Wrong Parameter'
    }else {
      sendAjaxRequest(inputValue)
    }
  })


  function sendAjaxRequest(inputValue){
    const xhr = new XMLHttpRequest()
    const url = `/getData?number=${inputValue}`

    xhr.open('GET',url, true)

    xhr.onreadystatechange = function(){
      if (xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
          const response = xhr.responseText
          result.textContent = response
        } else {
          result.textContent = '發生錯誤,稍後再試'
        }
      }
    }
    xhr.send()
  }
})

