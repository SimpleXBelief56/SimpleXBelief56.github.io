// Coded and Programmed By SimpleXTeam
// No Plug-Ins Used
// Built from the ground - up
// Copyright 2019 SimpleXTeam

// Delay next execution
function Delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Scroll Animation | ChromeOS Not Working Fix Coming Soon!
if(window.location.pathname == "/main.html"){
    window.onload = function(){
        window.addEventListener('wheel', function(e){
            var ScrollAxisPosition = Math.sign(e.deltaY)
            ConsoleLog(ScrollAxisPosition, null)
            function ScrollStartEndPosition()
            {
                $(document).ready(function(){
                    $("#ios-pwa").mouseenter(function(){
                        $("#IP7").removeClass("iPhone7Plus-svg")
                        $("#IP7").addClass("iPhone7Plus-svg-Showcasing")
                    })
                    $("#ios-pwa").mouseleave(function(){
                        $("#IP7").removeClass("iPhone7Plus-svg-Showcasing")
                        $("#IP7").addClass("iPhone7Plus-svg")
                    })
                })
                if(ScrollAxisPosition === 1){
                    console.log("[+] Mouse Wheel Scroll Down Detected")
                    $(document).ready(function() {
                        $('html, body').animate({scrollTop: $('#mainpan').offset().top}, 1600)
                    })
                    if(ScrollAxisPosition == 937){
                        $('html, body').stop(true, false)
                        // ScrollEndStartPosition()
                    }
                }
                if(ScrollAxisPosition === -1){
                    console.log("[+] Mouse Wheel Scroll Up Detected")
                    $('html, body').animate({scrollTop: $('.nav-bar').offset().top}, 2000);
                    if(ScrollAxisPosition == 7){
                        $('html, body').stop(true)
                    }
                }
            }
            ScrollStartEndPosition()
        })    
    }
}

if(window.location.pathname == "/about.html"){
    window.onload = function(){
        $(document).ready(function(){
            $(".ceo-title").animate({
                opacity: 0
            }, 1)
            $(".ceo-image").animate({
                opacity: 0
            }, 1)
            $(".right-skills").animate({
                opacity: 0
            }, 1).promise().done(function(){
                ConsoleLog("[+] DOM Element Hidden",null)
            })
        })
        window.addEventListener('wheel', function(wheelEvent){
            var ScrollXAxisPosition = Math.sign(wheelEvent.deltaY);
            function ScrollDownHandler(){
                if(ScrollXAxisPosition === 1){
                    $(document).ready(function(){
                        // When scrolling down, hide the top section, and show the ceo section
                        $(".aboutTitle").animate({
                            opacity: 0
                        }, 100)
                        $(".Logo").animate({
                            opacity: 0
                        }, 230)
                        $(".SimpleXTeam-Information").animate({
                            opacity: 0
                        }, 340)
                        $(".right-panel").animate({
                            height: 0
                        }, 600).promise().done(async function(){
                            await Delay(200)
                            // Just wait
                        })
                        $('html, body').animate({scrollTop: $('.ceo-section').offset().top}, 1600).promise().done(function(){
                            // Check if ceo section is visible
                            // Animate elements one by one using the promise().done(function(){}) --> function
                            if($(".ceo-section").is(":visible")){
                                $(".ceo-title").animate({
                                    opacity: 1
                                }, 1100).promise().done(function(){
                                    $(".ceo-image").animate({
                                        opacity: 1
                                    }, 800).promise().done(function(){
                                        $(".right-skills").animate({
                                            opacity: 1
                                        }, 800)
                                    })
                                })
                            }
                        });                        
                    })
                    if(ScrollXAxisPosition == 937){
                        $('html, body').stop(true, false).promise().done(function(){
                            // Avoid Hang on CallBack Stack, Don't hold the listener
                            return
                        })
                    }
                }
                if(ScrollXAxisPosition === -1){                         
                    $(document).ready(function(){
                        $(".ceo-image").animate({
                            opacity: 0
                        }, 200)
                        $(".right-skills").animate({
                            opacity: 0
                        }, 400)
                        $(".ceo-title").animate({
                            opacity: 0
                        }, 800).promise().done(function(){
                            console.log("JQUERY Animation Complete")
                        })
                        $('html, body').animate({scrollTop: $('.nav-bar').offset().top}, 1600).promise().done(function(){
                            if($(".nav-bar").is(":visible")){
                                $(".right-panel").animate({
                                    height: 732
                                }, 400)
                                $(".Logo").animate({
                                    opacity: 1
                                }, 1200)
                                $(".SimpleXTeam-Information").animate({
                                    opacity: 1
                                }, 1500)
                                $(".aboutTitle").animate({
                                    opacity: 1
                                }, 1090).promise().done(function(){
                                    // return                            
                                    // $('html, body').animate({scrollTop: $('.ceo-section').offset().top}, 2100); // 1600
                                })                                
                            }
                        })                        
                    })                 
                    if(ScrollXAxisPosition === 7){
                        $('html, body').stop(true).promise().done(function(eventArgs){
                            ConsoleLog(eventArgs + " Stopped")
                        })
                    }
                }
            }
            // Call the Handler
            ScrollDownHandler()
        })
    }
}

// If the user is using a Desktop, please display the error window,
// telling them, that Desktops are not supported. 
if(window.location.pathname == "/SimpleXWebkit.html"){
    if(!/iPhone/i.test(navigator.userAgent)){
        $(document).ready(function(){
            $(".error-title").animate({
                opacity: 1
            }, 600).promise().done(function(){
                $(".error-message").animate({
                    opacity: 1
                }, 800)
            })
        })
    }
}


/////

function DetectBrowser(){
    var agentParser = new UAParser();
    var agentParserResult = parser.getResult()

    if(agentParserResult.engine.name == "EdgeHTML"){
        // Block from accessing website, Broswer is not supported
        ConsoleLog("IE is not supported for now, support coming soon.", true)
        alert("IE is not supported for now, support coming soon.");
        window.location.href = "about:blank";
    }
}

// ConsoleLog Function
function ConsoleLog(msg, err){
    if(err == true){
        console.error("SimpleXError: " + msg)
        return 
    } else {
        console.log("SimpleXLogging: " + msg)
        return
    }
}

function PageLeaveTransition(){
    // PageLeaveTransition() function enables a faster and smoother
    // page leave transition, without having to use any plugins from 
    // the web. this function takes the main {id} elements from the
    // page that the user is currently in, and waits for click in 
    // the navigation bar. Once the user clicked the navigation bar
    // the animation will play, and once finished, the user will be 
    // redirected to the requested page.

    var currentPath = window.location.pathname;
    

    if(currentPath == '/main.html'){
        $("#main").on("click", function(){
            // Main Loaded, redirect back
            return;
        })
        $("#webkit").on("click", function(event){
            console.log(event)
            $(".mainTitle").animate({
                opacity: 0, 
                marginRight: 900
            }, 370)
            $(".background-picture, .scroll-icon, .scroll-down-text").animate({
                opacity: 0
            }, 200).promise().done(function() {
                setTimeout(function(){
                    window.location.href = "/SimpleXWebkit.html"
                }, 470)
            })
        })
        $("#device").on("click", function(event){
            console.log(event)
            $(".mainTitle").animate({
                opacity: 0, 
                marginRight: 900
            }, 370)
            $(".background-picture, .scroll-icon, .scroll-down-text").animate({
                opacity: 0
            }, 200).promise().done(function() {
                setTimeout(function(){
                    window.location.href = "/device.html"
                }, 470)
            })
        })
        $("#special").on("click", function(event){
            console.log(event)
            $(".mainTitle").animate({
                opacity: 0, 
                marginRight: 900
            }, 370)
            $(".background-picture, .scroll-icon, .scroll-down-text").animate({
                opacity: 0
            }, 200).promise().done(function() {
                setTimeout(function(){
                    window.location.href = "/simplexapplication.html"
                }, 470)
            })
        })
        $("#about").on("click", function(event){
            console.log(event)
            $(".mainTitle").animate({
                opacity: 0, 
                marginRight: 900
            }, 370)
            $(".background-picture, .scroll-icon, .scroll-down-text").animate({
                opacity: 0
            }, 200).promise().done(function() {
                setTimeout(function(){
                    window.location.href = "/about.html"
                }, 470)
            })
        })
    }

    if(currentPath == '/about.html'){
        $("#main").on('click', function(){
            $(".aboutBody").css('overflow', 'hidden')
            $(".aboutTitle").animate({
                opacity: 0
            }, 100)
            $(".Logo").animate({
                opacity: 0
            }, 230)
            $(".SimpleXTeam-Information").animate({
                marginLeft: 300,
                opacity: 0,
            }, 330)
            $(".right-panel").animate({
                height: 0
            }, 700).promise().done(function(){
                $(".aboutTitle").animate({
                    marginBottom: 950
                }, 340, "swing").promise().done(function(){
                    setTimeout(function(){
                        window.location.href = "/main.html"
                    }, 470)
                })

            })
        })
        $("#webkit").on('click', function(){
            $(".aboutBody").css('overflow', 'hidden')
            $(".aboutTitle").animate({
                opacity: 0
            }, 100)
            $(".Logo").animate({
                opacity: 0
            }, 230)
            $(".SimpleXTeam-Information").animate({
                marginLeft: 300,
                opacity: 0,
            }, 330)
            $(".right-panel").animate({
                height: 0
            }, 700).promise().done(function(){
                $(".aboutTitle").animate({
                    marginBottom: 950
                }, 340, "swing").promise().done(function(){
                    setTimeout(function(){
                        window.location.href = "/SimpleXWebkit.html"
                    }, 470)
                })

            })
        })
        $("#device").on('click', function(){
            $(".aboutBody").css('overflow', 'hidden')
            $(".aboutTitle").animate({
                opacity: 0
            }, 100)
            $(".Logo").animate({
                opacity: 0
            }, 230)
            $(".SimpleXTeam-Information").animate({
                marginLeft: 300,
                opacity: 0,
            }, 330)
            $(".right-panel").animate({
                height: 0
            }, 700).promise().done(function(){
                $(".aboutTitle").animate({
                    marginBottom: 950
                }, 340, "swing").promise().done(function(){
                    setTimeout(function(){
                        window.location.href = "/device.html"
                    }, 470)
                })

            })
        })
        $("#special").on('click', function(){
            $(".aboutBody").css('overflow', 'hidden')
            $(".aboutTitle").animate({
                opacity: 0
            }, 100)
            $(".Logo").animate({
                opacity: 0
            }, 230)
            $(".SimpleXTeam-Information").animate({
                marginLeft: 300,
                opacity: 0,
            }, 330)
            $(".right-panel").animate({
                height: 0
            }, 700).promise().done(function(){
                $(".aboutTitle").animate({
                    marginBottom: 950
                }, 340, "swing").promise().done(function(){
                    setTimeout(function(){
                        window.location.href = "/simplexapplication.html"
                    }, 470)
                })

            })
        })
        $("#about").on("click", function(){
            return;
        })
    }

    if(currentPath == "/device.html"){
        $("#main").on('click', function(){
            $(".device-infobox").animate({
                marginTop: 0,
                opacity: 0
            }, 300).promise().done(function(){
                window.location.href = "/main.html"
            })
        })
        $("#webkit").on('click', function(){
            $(".device-infobox").animate({
                marginTop: 0,
                opacity: 0
            }, 300).promise().done(function(){
                window.location.href = "/SimpleXWebkit.html"
            })
        })
        $("#device").on('click', function(){
            $(".device-infobox").animate({
                marginTop: 0,
                opacity: 0
            }, 300).promise().done(function(){
                window.location.href = "/device.html"
            })
        })
        $("#special").on('click', function(){
            $(".device-infobox").animate({
                marginTop: 0,
                opacity: 0
            }, 300).promise().done(function(){
                window.location.href = "/simplexapplication.html"
            })
        })
        $("#about").on('click', function(){
            $(".device-infobox").animate({
                marginTop: 0,
                opacity: 0
            }, 300).promise().done(function(){
                window.location.href = "/about.html"
            })
        })
    }

    if(currentPath == "/simplexapplication.html"){
        $("#main").on('click', function(){
            $(".coming-title, .details, .supported, .supported-list").animate({
                opacity: 0
            }, 100)
            $(".left-panel-simplexapplication").animate({
                // marginBottom: 120
                height: 0,
                opacity: 0
            }, 600)
            $(".LoginUI").animate({
                marginLeft: 90,
                opacity: 0
            }, 300).promise().done(function(){
                // console.log("called")
                setTimeout(function(){
                    window.location.href = "/main.html"
                }, 470)
            })
        })
        $("#webkit").on('click', function(){
            $(".coming-title, .details, .supported, .supported-list").animate({
                opacity: 0
            }, 100)
            $(".left-panel-simplexapplication").animate({
                // marginBottom: 120
                height: 0,
                opacity: 0
            }, 600)
            $(".LoginUI").animate({
                marginLeft: 90,
                opacity: 0
            }, 300).promise().done(function(){
                setTimeout(function(){
                    window.location.href = "/SimpleXWebkit.html"
                }, 470)
            })
        })
        $("#device").on('click', function(){
            $(".coming-title, .details, .supported, .supported-list").animate({
                opacity: 0
            }, 100)
            $(".left-panel-simplexapplication").animate({
                // marginBottom: 120
                height: 0,
                opacity: 0
            }, 600)
            $(".LoginUI").animate({
                marginLeft: 90,
                opacity: 0
            }, 300).promise().done(function(){
                setTimeout(function(){
                    window.location.href = "/device.html"
                }, 470)
            })
        })
        $("#special").on('click', function(){
            $(".coming-title, .details, .supported, .supported-list").animate({
                opacity: 0
            }, 100)
            $(".left-panel-simplexapplication").animate({
                // marginBottom: 120
                height: 0,
                opacity: 0
            }, 600)
            $(".LoginUI").animate({
                marginLeft: 90,
                opacity: 0
            }, 300).promise().done(function(){
                // Avoid Listener Hanging, when clicking on the current path
                return;
            })
        })
        $("#about").on('click', function(){
            $(".coming-title, .details, .supported, .supported-list").animate({
                opacity: 0
            }, 100)
            $(".left-panel-simplexapplication").animate({
                // marginBottom: 120
                height: 0,
                opacity: 0
            }, 600)
            $(".LoginUI").animate({
                marginLeft: 90,
                opacity: 0
            }, 300).promise().done(function(){
                // console.log("called")
                setTimeout(function(){
                    window.location.href = "/about.html"
                }, 470)
            })
        })
    }

    if(currentPath == "/SimpleXWebkit.html"){
        $("#main").on('click', function(){
            if(!/iPhone/i.test(navigator.userAgent)){
                $(".error-title").animate({
                    opacity: 0
                }, 400).promise().done(function(){
                    $(".error-message").animate({
                        opacity: 0
                    }, 400).promise().done(function(){
                        window.location.href = "/main.html"
                    })
                })
            }
        })
        $("#webkit").on('click', function(){
            if(!/iPhone/i.test(navigator.userAgent)){
                $(".error-title").animate({
                    opacity: 0
                }, 400).promise().done(function(){
                    $(".error-message").animate({
                        opacity: 0
                    }, 400).promise().done(function(){
                        return
                    })
                })
            }
        })
        $("#device").on('click', function(){
            if(!/iPhone/i.test(navigator.userAgent)){
                $(".error-title").animate({
                    opacity: 0
                }, 400).promise().done(function(){
                    $(".error-message").animate({
                        opacity: 0
                    }, 400).promise().done(function(){
                        window.location.href = "/device.html"
                    })
                })
            }
        })
        $("#special").on('click', function(){
            if(!/iPhone/i.test(navigator.userAgent)){
                $(".error-title").animate({
                    opacity: 0
                }, 400).promise().done(function(){
                    $(".error-message").animate({
                        opacity: 0
                    }, 400).promise().done(function(){
                        window.location.href = "/simplexapplication.html"
                    })
                })
            }
        })
        $("#about").on('click', function(){
            if(!/iPhone/i.test(navigator.userAgent)){
                $(".error-title").animate({
                    opacity: 0
                }, 400).promise().done(function(){
                    $(".error-message").animate({
                        opacity: 0
                    }, 400).promise().done(function(){
                        window.location.href = "/about.html"
                    })
                })
            }
        })
    }
}

function Delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function SwtichImage(){
    var imgsrc = document.getElementById("mainFrame");
    while(true){
        $(".LoginUI").animate({opacity: 1}, 200)
        await Delay(4000)
        $(".LoginUI").animate({opacity: 0}, 200)
        console.log(imgsrc.src)
        await Delay(1000)
        if(imgsrc.getAttribute("src") == "login.png"){
            console.log("[+]Login.png located")
            imgsrc.src = "usb.png"
        } else {
            imgsrc.src = "login.png"
        }
        // await Delay(400) 
    }
    
    // await Delay(2000)
    
}

if (window.location.pathname == "/simplexapplication.html"){
    window.onload = async function(){
        await Delay(1200);
        this.SwtichImage()       
    }
}

async function progressBarFunction(amountLoad){
    // Handles the progressbar in the loading.html

    var ProgressBarElement = document.getElementById("Pr");
    var Status = document.getElementById("Status_Section")
    ProgressBarElement.value = amountLoad;
    var LoadingSpeed = 50;
    amountLoad++;
    var startCount = setTimeout("progressBarFunction("+amountLoad+")", LoadingSpeed);

    if(amountLoad == 2){
        Status.innerHTML = "Status: Importing Server Files"
    }

    if(amountLoad == 25){
        Status.innerHTML = "Status: Loading iOS Configurations"
    }

    if(amountLoad == 35){
        Status.innerHTML = "Status: Getting Device Info"
    }

    if(amountLoad == 55){
        if(/iPhone/i.test(navigator.userAgent)){
            Status.innerHTML = "Status: iPhone Detected: Loading Configurations"
        } else if(/iPad/i.test(navigator.userAgent)){
            Status.innerHTML = "Status: iPad Detected: Loading Configurations"
        } else if(/Android/i.test(navigator.userAgent)){
            Status.innerHTML = "Status: Android Detected: Loading Configurations"
        } else if(/Linux/i.test(navigator.userAgent)){
            Status.innerHTML = "Status: Linux OS Detected: Loading Configurations"            
        } else if(/Windows/i.test(navigator.userAgent)){
            Status.innerHTML = "Status: Windows OS Detected: Loading Configurations"            
        } else {
            Status.innerHTML = "Status: Unknown Device: Loading Default Configs"
        }
    }

    if(amountLoad == 75){
        Status.innerHTML = "Status: Optimizing Server";
    }

    if(amountLoad == 100){
        ProgressBarElement.value = 100;
        clearTimeout(startCount);
        Status.innerHTML = "Status: Done";
        $(".LoadingProgressBar, .StatusSection, .LoadingStatus").fadeOut('slow')
        await Delay(700)
        document.getElementById('Loading_Status').innerHTML = "Welcome"
        $(".LoadingStatus").css('font-size', 60)
        $(".LoadingStatus").css("text-align","center")
        $(".LoadingStatus").fadeIn('slow')
        await Delay(1400)
        $(".LoadingStatus").fadeOut('slow')
        await Delay(1200)

        window.location.href = "/main.html"
        
    }

}

if(window.location.pathname == "/"){
    window.onload = function () {
        progressBarFunction(1)
    }
}
