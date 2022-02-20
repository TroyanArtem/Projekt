const start = document.querySelector('#start'),
    progress = document.querySelector('#progress'),
    previews = document.querySelectorAll('.preview');

start.addEventListener('clik', work);

function work(){
    let counter = 0;

    const id = setInterval (() => {
        progress.value += 100/previews.length;
        previews [counter].classList.toggle ('ready');
        counter++;

        if (counter === previews.length){
            clearInterval(id);
        }
    }, 500);
}
