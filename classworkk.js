let database=[
    {
        name:"damos",
        password:"12345",

    },

    {
        name:"Abdulsamad",
        password:"23456",

    },

    {   
        name:"Abdul",
        password:"11111",
    },
    
];

let newsFeeds=[
    {
        name:"Abdulsamad",
        timeline:'welcome MR abdul samad you like eba',

    },

    {
        name:"damos",
        timeline:"welcome MR damos you like fufu",

    },

    {   
        name:"Abdul",
        timeline:"welcome MR abdul you like rice",
    },
    
];



var uname=document.getElementById("username")
var pword=document.getElementById("password")
let form = document.querySelector('.bruh')


form.addEventListener("submit",function(event){

    let answer = {
        username:'',
        found:false
    }

    if(uname.value !== "" && pword.value !== ""){ 
        for (var i=0; i <database.length; i++){
            if(uname.value===database[i].name && pword.value===database[i].password){

                answer.username = uname.value
                answer.found = true
                break

            }else{
                answer.found = false
            }
        }

        if(answer.found == true){
            
            alert('login sucessful welcome my ' + answer.username)

            for(let i = 0; i< newsFeeds.length; i++){
                if(answer.username === newsFeeds[i].name){
                    alert(newsFeeds[i].timeline)
                }
            }

        }else{
            alert("Login unsucessful")
        }
        

    }else{
        alert("input username or password details")
    }


    uname.value = ''
    pword.value = ''
        
    
    event.preventDefault()

})













// var news={
//         timeline:"daniel is available"
//     }


// function start(enteredUser,enteredPass){
//     var online = false;

    // for (var i = 0; i < database.length;  i++){
    //     if(database[i].name === enteredUser && database[i].password === enteredPass){
    //         online = true
    //         break
    //     }else{
    //         online = false
    //     }
    // }
    
    // var i = 0
    // while(i < database.length){
    //     if(database[i].name === enteredUser && database[i].password === enteredPass){
    //         online = true
    //         break
    //     }else{
    //         online = false
    //     }
    //     i++
    // }
    // online ? console.log(news.timeline) : console.log("wrong user detected")
    
    // if(online){
    //     console.log(news.timeline)
    // }else{
    //     console.log("wrong user detected")
    // }
// }
