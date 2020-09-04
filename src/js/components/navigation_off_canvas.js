// import Hammer from "hammerjs"
import * as Hammer from "hammerjs"


console.log(`das`)
export function navigationOffCanvas(){
  const d = document, 
      w = window,
      panel = d.querySelector(`.panel`),
      panelBtn = d.querySelector(`.panel-button`),
      hamburger = d.querySelector(`.hamburger`),
      mq = w.matchMedia(`(min-width: 64em)`),
      hammerBody = new Hammer(d.body),
      hammerPanel = new Hammer(panel) 

  function closePanel(mq){
    if(mq.matches){
        panel.classList.remove(`is-active`)
        hamburger.classList.remove(`is-active`)
    }
  }
  function hammerTouches(e){
      if(e.type == `swipeleft`){
        panel.classList.remove(`is-active`)
        hamburger.classList.remove(`is-active`)
    }else if(e.type == `swiperight`){
        panel.classList.toggle(`is-active`)
        hamburger.classList.toggle(`is-active`)

    }
  }

  panelBtn.addEventListener(`click`, e => {
    e.preventDefault()
    panel.classList.toggle(`is-active`)
    hamburger.classList.toggle(`is-active`)
  })

  mq.addListener(closePanel)
  closePanel(mq)

  hammerPanel.on(`swipeleft swiperight`, hammerTouches)
  hammerBody.on(`swipeleft swiperight`, hammerTouches)
}

