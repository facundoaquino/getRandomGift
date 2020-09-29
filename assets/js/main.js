//referencia html al container
const $giftContainer=document.querySelector('.giftContainer')
const $btnGetGift =document.querySelector('.btnMain')


const apiKey = 'ge8ywqidok7RY7xe6SAkFnOefCLLxfs1'
const urlApi= `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
// console.log(peticion)


const getGift = async ()=>{
    
    const respuesta = await fetch (urlApi).then(resp=>resp.json())
    const {data: dataG}=await respuesta   
    console.log(dataG)
    const {url:urlGift} = dataG.images.original
    console.log(urlGift)


    const img = document.createElement('img')
    img.className='img__gift'
    img.setAttribute('src', urlGift)
    $giftContainer.appendChild(img)


}

$btnGetGift.addEventListener('click',getGift)
// getGift()