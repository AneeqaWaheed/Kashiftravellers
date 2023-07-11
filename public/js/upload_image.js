var selectImage=document.querySelector('.select-image');
var inputFile=document.querySelector('#file');
let imgArea=document.querySelector('.image-area');

selectImage.addEventListener('click',function(){
    inputFile.click();
});
inputFile.addEventListener('change',function(){
    
    var image=this.files[0];
    console.log(image);
    var reader=new FileReader();
    reader.onload=()=>{
        const imgURL= reader.result;
        const img=document.createElement('img');
        img.src= imgURL;
        imgArea.appendChild(img);
        imgArea.classList.add('.active');
    }
    reader.readAsDataURL(image);
});
            