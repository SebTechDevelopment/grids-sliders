const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenions = item.getBoundingClientRect();
    let containerWidth = containerDimenions.width;


    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth; 
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth; 
    })
})