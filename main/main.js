const div$$ = document.querySelectorAll('.sector');
const p$$ = document.querySelectorAll('p');
const button$$ = document.querySelector('.btn-add');
const input$$ = document.querySelector('input');
const divNew$$ = document.querySelector('#div1');
const noClassified$$ = document.querySelector('.new');
const emptyDiv$$ = document.querySelector('empty');
const complete$$ = document.querySelector('.complete');
const eliminar$$ = document.querySelectorAll('.delet');

button$$.addEventListener('click', () => add())
const add = () => { 
    //Con esta función creamos un nuevo elemento desde el input
    if(input$$.value !== ""){
    let newElement = document.createElement('p');
    newElement.setAttribute('draggable','true');
    newElement.id = `id-${p$$.length + 1}`;
    newElement.innerText = input$$.value;
    newElement.addEventListener('dragstart', e => {
            e.dataTransfer.setData('id',newElement.id)
        
        })
    
        noClassified$$.appendChild(newElement);
    }
}

p$$.forEach(p => { //Con este bucle recorremos la lista y añadimos un escuchador a cada elemento
    p.addEventListener("dragstart" , e => {
        e.dataTransfer.setData('id',p.id)
    })

})


div$$.forEach(sector => { //Con este bucle añadimos escuchador a todos los div
    sector.addEventListener("drop", e => {
        const id = e.dataTransfer.getData('id')
        const element = document.querySelector(`#${id}`)
        sector.appendChild(element)

    })
    sector.addEventListener("dragover", e => { 
        e.preventDefault()
    })

})

eliminar$$.forEach(trash => {
    trash.addEventListener("drop", e => {
        const id = e.dataTransfer.getData('id')
        const element = document.querySelector(`#${id}`)
        element.remove(element)
    })
    trash.addEventListener('dragover', e => {
        e.preventDefault()
    })
})


function initMap() { //Con esta función creamos un mapa haciendo uso de la API de Google
    const schoolPosition = { 
        lat: 40.45871300,
        lng:  -3.69469500
    }

    const map = new google.maps.Map(document.querySelector('#map'), {
        zoom:12,
        center:schoolPosition
    })

    

    const marker = new google.maps.Marker({ //Aquí le estamos dando una posicion a nuestro marcador
        position : schoolPosition,
        map,
        tittle: "Upgrade Hub"
    })
}







