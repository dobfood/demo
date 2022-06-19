function change(){
    let srcImage;
    let valueDataId
    let nameDataID= document.getElementById('xeko').getAttribute('data-id');
    switch (nameDataID) {
        case 'xeko' :
            srcImage = 'image/jaen1.png'
            valueDataId = 'jaen'
            break;
        case 'jaen':
            srcImage = 'image/doraemon1.png'
            valueDataId = 'doraemon'
            break;
        case 'doraemon':
            srcImage = 'image/xeko1.png'
            valueDataId = 'xeko'
            break;
    }
    document.getElementById('xeko').setAttribute('src',srcImage);
    document.getElementById('xeko').setAttribute('data-id',valueDataId)
    checkWin()
}
function change2(){
    let srcImage;
    let valueDataId
    let nameDataID= document.getElementById('jaen').getAttribute('data-id');
    switch (nameDataID) {
        case 'jaen' :
            srcImage = 'image/xeko2.png'
            valueDataId = 'xeko'
            break;
        case 'xeko':
            srcImage = 'image/doraemon2.png'
            valueDataId = 'doraemon'
            break;
        case 'doraemon':
            srcImage = 'image/jaen2.png'
            valueDataId = 'jaen'
            break;
    }
    document.getElementById('jaen').setAttribute('src',srcImage);
    document.getElementById('jaen').setAttribute('data-id',valueDataId)
    checkWin()
}
function change3(){
    let srcImage;
    let valueDataId
    let nameDataID= document.getElementById('doraemon').getAttribute('data-id');
    switch (nameDataID) {
        case 'doraemon' :
            srcImage = 'image/jaen3.png'
            valueDataId = 'jaen'
            break;
        case 'xeko':
            srcImage = 'image/doraemon3.png'
            valueDataId = 'doraemon'
            break;
        case 'jaen':
            srcImage = 'image/xeko3.png'
            valueDataId = 'xeko'
            break;
    }
    document.getElementById('doraemon').setAttribute('src',srcImage);
    document.getElementById('doraemon').setAttribute('data-id',valueDataId)
    checkWin()
}
function checkWin() {
    let nameDataID1 = document.getElementById('xeko').getAttribute('data-id')
    let nameDataID2 = document.getElementById('jaen').getAttribute('data-id')
    let nameDataID3 = document.getElementById('doraemon').getAttribute('data-id')
    if(nameDataID1 === nameDataID2 && nameDataID2=== nameDataID3){
        document.getElementById('xeko').style.border=' 3px solid brown';
        document.getElementById('jaen').style.border=' 3px solid pink';
        document.getElementById('doraemon').style.border=' 3px solid blue';
    } else{
        document.getElementById('xeko').style.border = '';
        document.getElementById('jaen').style.border = '';
        document.getElementById('doraemon').style.border = '';
    }
}





