// function fetchTask(callback){
//     const tasks=["Study node","Create a ode Js Server"];
//     callback(tasks);
// }
// fetchTask(function(data){
//     console.log("Tasks: ",data);
// });

function placeOrder(orderID,callback){
    console.log("Order recived , preparing food");
    setTimeout(()=>{
        console.log("Food is ready for delivery for order id {orderID}");
        callback();
    },3000)
}
function notifyUser(){
 console.log("Fooooood is ready")
}
placeOrder(101,notifyUser)