function FileExt(val) {
    let filename=document.querySelector(val).value;
    let extension=filename.split('.').pop()
    console.log(extension)
}