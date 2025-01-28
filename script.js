const qrText = document.getElementById('qr-text');
const dimensions = document.getElementById('dimensions');
const generateBtn =document.getElementById('generateBtn');
const downloadBtn =document.getElementById('downloadBtn');

const qrContainer = document.querySelector('.qr-body');

let dimension = parseInt(dimensions.value); 

generateBtn.addEventListener(
    'click',(e)=>{
        e.preventDefault();
        isEmpty();
    }
);
dimensions.addEventListener('change',
    (e)=>{
        dimension = parseInt(e.target.value);
        // isEmpty();
    }   
)

function isEmpty(){
    qrText.value.length > 0 ? 
    generateQrCode() : 
    qrContainer.textContent = "Enter a text or URL to Generate your QRcode"
}  

downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');
    if(img !==null){
        let imgAttribute =img.getAttribute('src');
        downloadBtn.setAttribute('href',imgAttribute);
    }
})


function generateQrCode(){
    qrContainer.innerHTML ="";
    new QRCode(qrContainer,{
        text: qrText.value,
        height: dimension,
        width: dimension,
        colorLight: "green",
        colorDark: "#4A001F",
    })
};