var hasFirstVideoPlayed = false;
var hasSecondVideoPlayed = false;
var hasThridVideoPlayed = false;
var hasFourthVideoPlayed = false;
var hasFifthVideoPlayed = false;

var firstVideo = document.getElementById("videoOne");
var secondVideo = document.getElementById("videoTwo");
var thirdVideo = document.getElementById("videoThree");
var fourthVideo = document.getElementById("videoFour");
var fifthVideo = document.getElementById("videoFive");

// var aud = document.getElementById("myAudio");
// var triangle = document.getElementById("purple-triangle");
// scroll into view, afslutning
 function sectionJump() {
            var elmnt = document.getElementById("sectionTwelve");
            elmnt.scrollIntoView();
        }

// play video function
function playVideo(videoElement) {
    videoElement.play();
}

/*
Pop-up vindue med test for om video afspiller
firstVideo.oncanplay = function() {
    alert("Can start playing video");
};
*/

window.onscroll = function () {
    //Log for getBoundingClientRect() værdi i consollen
    console.log('Video bottom rect: ' + firstVideo.getBoundingClientRect().bottom);
    /*
    if (firstVideo.getBoundingClientRect().bottom < 340) {
        //One time play using boolean
        if (!hasFirstVideoPlayed) {
            playVideo(firstVideo);
            console.log("Playing first video");
            hasFirstVideoPlayed = true;
        }
    }
    */
    // if first video is within view and not playing - play video
    if (firstVideo.getBoundingClientRect().bottom < 730 && firstVideo.getBoundingClientRect().bottom > 0) {
        var isVideoPlaying = (firstVideo.currentTime > 0 && !firstVideo.paused && !firstVideo.ended && firstVideo.readyState > 2);
        console.log(isVideoPlaying);
        if (isVideoPlaying == false) {
            playVideo(firstVideo);
            console.log("Playing first video");
        }
    } 
    else {
        firstVideo.pause();
    }

    // if second video is within view and not playing - play video
    if (secondVideo.getBoundingClientRect().bottom < 732 && secondVideo.getBoundingClientRect().bottom > 0) {
        var isVideoPlaying = (secondVideo.currentTime > 0 && !secondVideo.paused && !secondVideo.ended && secondVideo.readyState > 2);
        console.log(isVideoPlaying);
        if (isVideoPlaying == false) {
            playVideo(secondVideo);
            console.log("Playing second video");
        }
    } 
    else {
        secondVideo.pause();
    }

    // if third video is within view and not playing - play video
    if (thirdVideo.getBoundingClientRect().bottom < 730 && thirdVideo.getBoundingClientRect().bottom > 0) {
        var isVideoPlaying = (thirdVideo.currentTime > 0 && !thirdVideo.paused && !thirdVideo.ended && thirdVideo.readyState > 2);
        console.log(isVideoPlaying);
        if (isVideoPlaying == false) {
            playVideo(thirdVideo);
            console.log("Playing third video");
        }
    } 
    else {
        thirdVideo.pause();
    }

    // if fourth video is within view and not playing - play video
    if (fourthVideo.getBoundingClientRect().bottom < 730 && fourthVideo.getBoundingClientRect().bottom > 0) {
        var isVideoPlaying = (fourthVideo.currentTime > 0 && !fourthVideo.paused && !fourthVideo.ended && fourthVideo.readyState > 2);
        console.log(isVideoPlaying);
        if (isVideoPlaying == false) {
            playVideo(fourthVideo);
            console.log("Playing fourth video");
        }
    } 
    else {
        fourthVideo.pause();
    }

    // if fifth video is within view and not playing - play video
    if (fifthVideo.getBoundingClientRect().bottom < 728 && fifthVideo.getBoundingClientRect().bottom > 0) {
        var isVideoPlaying = (fifthVideo.currentTime > 0 && !fifthVideo.paused && !fifthVideo.ended && fifthVideo.readyState > 2);
        console.log(isVideoPlaying);
        if (isVideoPlaying == false) {
            playVideo(fifthVideo);
            console.log("Playing fifth video");
        }
    } 
    else {
        fifthVideo.pause();
    }




    // triangle proof of concept
    /*
    || video.getBoundingClientRect().top > 250 )
    else 
    video.play();

     if (triangle.getBoundingClientRect().bottom < 200 || triangle.getBoundingClientRect().top > 10 )
     aud.pause();
     else 
     aud.play();*/
}


//Scroll functions - on click for arrows etc.
function scrollToFirstVideo() {
    scrollToVideo("videoOne");
}

function scrollToSecondVideo() {
    scrollToVideo("videoTwo")
}

function scrollToThirdVideo() {
    scrollToVideo("videoThree");
}

function scrollToFourthVideo() {
    scrollToVideo("videoFour")
}

function scrollToFifthVideo() {
    scrollToVideo("videoFive")
}

function scrollToVideo(videoElm) {
    document.getElementById(videoElm).scrollIntoView();
}
