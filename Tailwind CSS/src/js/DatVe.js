function ChangeColor(){
    // document.getElementById('Datve').style.backgroundColor = 'cyan';
    let params = ' position=absolute,top=50%, left=80%,width=500,height=500, menubar=no, toolbar=no,location=no,status=no,resizable=no,scrollbars=no';
    open('https://tailwindcss.com/', 'test', params);

    // let newWindow = open('http://example.com/', 'example', 'width=300,height=300')
    // newWindow.onload = function() {
    // newWindow.close();
    // alert(newWindow.closed); // true
};
like =0;
dislike =0;
function btnLike_Click(){
    like++;
    document.getElementsByClassName("btnLike")
    document.getElementById("count-like").innerHTML  = like;
}
function btnDislike_Click(){
    dislike++;
    document.getElementById("count-dislike").innerHTML  = dislike;
}
