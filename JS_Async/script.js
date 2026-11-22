// console.log("1");
// setTimeout(() => console.log("2",0));
// Promise.resolve().then(()=>console.log("3"));
// console.log("4");


const wait = (ms) => new Promise (res => setTimeout(res,ms));
async function run(){
    await wait(1000);
    console.log("Waited 1 second!");
}
run();