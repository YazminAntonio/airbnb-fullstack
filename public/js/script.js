//
//const changePhoto = () => {
//     let imge = document.querySelector('#bigimg')
//     const display = photo => {
//         return (bigimg.src = photo.src)
//     }
// }
let bigimg = document.querySelector('#bigimg')
//console.log(main)
//let thumbnail = document.querySelectorAll('#thumbnail')
//console.log(thumbnail)
//let thumbnailLoop = thumbnail.forEach(photo => console.log(photo.innerHTML))

const changePhoto = photo => {
    return (bigimg.src = photo.src)
}
