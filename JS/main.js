
let shop = []

// $(document).ready(function () {
//     $("#blog").click(function () {
//         $("#blogdropdown").toggleClass('visible');
//     });

// });

// $('.blog').mouseenter(function () {
//     $(this).find('.bloghover').slideDown(300);
// });

// $('.blog').mouseleave(function () {
//     $(this).find('.bloghover').slideUp(100);
// });







$(document).ready(function() {
    $("#blog").hover(
        function() {
            $('#blogdropdown').stop(true, true).slideDown(300);
        },
        function() {
            $('#blogdropdown').stop(true, true).slideUp(1000);
        
    });
});






// $(document).ready(function () {
//     $("#blogdropdown").hover(function () {
//         $("#blogdropdown").show();
//     });

// });

// $(document).ready(function(){
//     $("#hover2").hover(function(){
//         $("#mainbackground").css('background-image', 'url("../img/hoverbg.png")',
//         'height', '630px',
//  'background-repeat', 'no-repeat',
//     'background-size',' cover',)
//     },
//     function(){
//         $("#mainbackground").css('background-image', 'url("../img/large\ back.png');
//     });
// });






$('.hover2').on('mousein', function(){
    $('#mainbackground2').show()
 });
 $('.hover2').on('mouseout', function(){
   $('#mainbackground2').hide();
 });



// $("#hover2").mouseover (function() {
//     $("#mainbackground").style.backgroundImage = "url(../img/large\ back.png)";
//   }, false);
//  $("mainbackground").mouseout (function() {
//     $("#mainbackground").style.backgroundImage = 'url("../img/hoverbg.png")';
//   }, false);



// $(document).ready(function () {
//     $("#hover2").hover(function () {
//         $("#mainbackground").css('background-image', 'url("../img/hoverbg.png")');
//     });

// });

let register =$("#register");
let  emailtxt =$("#emailtxt");
let  passwordtxt =$("#passwordtxt"); 
let  emailregtxt =$("#emailregtxt");
let  passwordregtxt =$("#passwordregtxt");                  
let validateEmail=$("#validateEmail");
let validatepsswd=$("#validatepsswd");
let login =$("#login");
let cartGrid =$("#cartGrid");
let validateregisterEmail =$("#validateregisterEmail");
let validateregisterpsswd =$("#validateregisterpsswd");
let cart=[];

//login
login.click(  function () {

    loginvalidation();
})

register.click(  function () {

registerValidation ();
})

//validation
function loginvalidation() {
    
if (emailtxt.val()=="") {
    validateEmail.html("Empty field")
    
}
else if (passwordtxt.val()=="") {
    validatepsswd.html("Empty Field")
    
}

else{addData();}
}

function addData() {
   
   let userData= {
    
    
    "email": emailtxt.val(),
    "password": passwordtxt.val()
            }
       
    
    $.ajax({
        type: "POST",
        url: "http://206.189.124.254:9000/login",
        data: userData,
        success: function (res) {
            console.log(res)
            if (res.error) {
                $('.loginstatus').html("Error: email or password does not exist")
            } else {
                $('.loginstatus').html(` your registration is successful`)
                
                
            }
        },
        error: function (err) {
            console.log(err)
            validatepsswd.html(err.responseText)
        }

    })

    
}

function registerValidation() {
    
    if (emailregtxt.val()=="") {
        validateregisterEmail.html("Empty field")
        
    }
    else if (passwordregtxt.val()=="") {
        validatregisterpsswd.html("Empty Field")
        
    }
    
    else{registerdata();}
    }




function registerdata() {
   
    let userData= {
     
     
     "email": emailtxt.val(),
     "password": passwordtxt.val()
             }
        
     
     $.ajax({
         type: "POST",
         url: "http://206.189.124.254:9000/register",
         data: userData,
         success: function (res) {
             console.log(res)
             if (res.error) {
                 $('.registerstatus').html("Error: User exists")
             } else {
                 $('.registerstatus').html(` your registration is successful`)
                 
                 
             }
         },
         error: function (err) {
             console.log(err)
             $('.registerstatus').html(err.responseText)
         }
 
     })
 
     
 }
 


    
function loadproductData() {

    $.ajax({
        type: "GET",
         url: "http://206.189.124.254:9000/products",
      
        success: function (res) {
            shop = res;
            shop =shop.reverse()
           

            let productgrid = ""
            for (let i = 0; i < 18; i++) {
               
                productgrid += ` 
        

            <div class="card">
        
        <a href="cart.html" class="innerimg">
        <img src="http://206.189.124.254:9000${shop[i].image}" alt="">
            </a>
           

            <a href="cart.html">
                <img src= "http://206.189.124.254:9000${shop[i].image}"class="img-top alt="">
                </a>
                <br>
       <p class="dressname" style="font-weight:600;">  ${shop[i].name}</p> <br>
       <p class="shopPrice"style="color: #848486;"> £${shop[i].price}</p>
    
         </div>

           
            </div>
         
          
                 
        
    </div>
            `
                }
            
            console.log(productgrid)
            $("#gridsimgscol").html(productgrid);
            
        },
        error: function (err) {

            console.log(err)
console.log(err.responseText + " " + err.statusText)
        }
    })

    
         
}
loadproductData();


 
$("#addToCartbtn").click(function () {
    loadgrid();
})
function loadgrid() {
    
    let cartload = ""
            for (let i = 0; i < array.cart; i++) {
            
                
            
                cartload += ` 
        

            <div class="card">
        
        <a href="cart.html" class="innerimg">
        <img src="http://206.189.124.254:9000${shop[i].image}" alt="">
            </a>
           

            <a href="">
                <img src="http://206.189.124.254:9000${shop[i].image}" class="img-top alt="">
                </a>
                <br>
       <p class="dressname" style="font-weight:600;">  ${shop[i].name}</p> <br>
       <p class="shopPrice"style="color: #848486;"> £${shop[i].price}</p>
    
         </div>

           
            </div>
         
          
                 
        
    </div>
            `
            $("#cartGrid").html(cartload)

            }
        }