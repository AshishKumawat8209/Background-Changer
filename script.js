let color = ['black', 'white', 'pink', 'brown', 'skyblue', 'blue', 'purple', 'red', 'gold', 'cyan','gray','orange','magenta','lime'];
let stopper;

//first method
// let i = 0;
// const colorChanger = function(){
//     stopper = setInterval(function(){
//         if(i == color.length) i = 0;
//         console.log(color[i])
//         document.body.style.backgroundColor = color[i++];
//     }, 1000);
// }

//second method
const colorChanger = function(){
    stopper = setInterval(function(){
        const color = '0123456789ABCDEF'
        let x = '#';
        for(let i=0;i<6;i++){
            x += color[Math.floor(Math.random() * 16)];
        }
        console.log(x)
        document.body.style.backgroundColor = x;
    }, 1000);
}

document.querySelector('#start').addEventListener('click', colorChanger)

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(stopper);
})
