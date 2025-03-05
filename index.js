
let qrcode=new QRCode(
    document.querySelector('.qrcode')
);

qrcode.makeCode("Why do you scan me ?");


function generateQr(){
    let qrText=document.querySelector("input").value;
    let downloadbtn=document.getElementById("downloadbtn");

    if(qrText==="" || qrText===" "){
        alert("Please enter a value");
        downloadbtn.style.display = "none";
    }
    else{
        qrcode.makeCode(qrText);
        downloadbtn.style.display = "block";
    }

}

function downloadQr(){
    let qrImage=document.querySelector(".qrcode img");

    if(qrImage){
        let link=document.createElement("a");
        link.href=qrImage.src;
        link.download="QRCode.png";
        link.click();
    }
    else{
        alert("Please generate a QR code first");
    }
}

