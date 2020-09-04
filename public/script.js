"use strict";
const d = document,
    w = window,
    iframeGoogleMap = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15691.616095302918!2d-66.91541794999999!3d10.5082253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sve!4v1599248435219!5m2!1ses-419!2sve" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`

function navigationOffCanvas() {
        const panel = d.querySelector(`.panel`),
        panelBtn = d.querySelector(`.panel-button`),
        hamburger = d.querySelector(`.hamburger`),
        mq = w.matchMedia(`(min-width: 64em)`)

    function closePanel(mq) {
        if (mq.matches) {
            panel.classList.remove(`is-active`)
            hamburger.classList.remove(`is-active`)
        }
    }

    panelBtn.addEventListener(`click`, e => {
        e.preventDefault()
        panel.classList.toggle(`is-active`)
        hamburger.classList.toggle(`is-active`)
    })

    mq.addListener(closePanel)
    closePanel(mq)
}

function youtubeVideo() {
    var d = document,
        w = window,
        mq = w.matchMedia('(min-width: 64em)'),
        youtube = d.querySelectorAll('.Youtube'),
        youtubeWrapper = d.querySelectorAll('.Youtube-wrapper'),
        youtubeIds = [],
        youtubeIframe = [];

    youtube.forEach(function (video, index) {
        return youtubeIds[index] = video.id;
    });

    //console.log( youtubeIds )

    function showVideo(mq) {
        if (mq.matches) {
            youtubeWrapper.forEach(function (video, index) {
                video.innerHTML = '<iframe src="https://www.youtube.com/embed/' + youtubeIds[index] + '" frameborder="0"></iframe>';
            });
        } else {
            youtubeWrapper.forEach(function (video, index) {
                video.innerHTML = '<a href="https://www.youtube.com/watch?v=' + youtubeIds[index] + '" target="_blank"><i class="fa fa-youtube-play"></i> Ver Video</a>';
            });
        }
    }

    mq.addListener(showVideo);
    showVideo(mq);
}

function transparentHeader(){
    const header = d.querySelector(`.header`),
    firstContent = d.querySelector(`.u-afterFixed`),
    firstContentHeight = w.getComputedStyle(firstContent,null).getPropertyValue(`height`).split(`px`)[0],
    headerHeight = w.getComputedStyle(header,null).getPropertyValue(`height`).split(`px`)[0]
    console.log(`firstContentHeight: ${firstContentHeight}`)
    console.log(`headerHeight: ${headerHeight}`)
    
    let scrollTopLimit = firstContentHeight - headerHeight
    console.log(`scrollTopLimit: ${scrollTopLimit}`)
    
    
    function headerScroll(){
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop
        console.log(`scrollTop: ${scrollTop}`)
        if(scrollTop > scrollTopLimit){
            header.classList.add(`is-active`)
        }else {
            header.classList.remove(`is-active`)

        }
    }
    d.addEventListener(`DOMContentLoaded`, headerScroll)
    w.addEventListener(`scroll`, headerScroll/* ,false */ )
}

function contactForm(){
    
}
function googleMap(){
    
}
function headerVideo(){
    const mq = w.matchMedia(`(min-width:64em)`),
        videos = d.querySelectorAll(`.videoHeader-video`)

    function startVideo(mq){
        videos.forEach(video => mq.matches ? video.play() : video.autoplay = false)
    }
    mq.addListener(startVideo)
    startVideo(mq)
}
if(location.pathname.includes(`contacto`)){
    // contactForm()
    // googleMap()
    headerVideo()
}

function googleMapIframe() {
    var d = document,
        w = window,
        mq = w.matchMedia('(min-width: 64em)'),
        map = d.querySelector(`.googleMap`)

    //console.log( youtubeIds )

    function showMap(mq) {
     
        return(mq.matches)
            ? map.innerHTML = iframeGoogleMap
            : map.innerHTML = `<a href="https://goo.gl/maps/zgRVvZvUmR5ZSzAz7" target="_blank">Ver ubicacion<a>`
    }

    mq.addListener(showMap);
    showMap(mq);
}

navigationOffCanvas()
transparentHeader()
youtubeVideo()
googleMapIframe()

