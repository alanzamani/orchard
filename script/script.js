window.onload=function () {

    /*getting the images*/
    var address1 = $("#red")[0];
    var address2 = $("#green")[0];
    var address3 = $("#white")[0];

    address1.onclick = function () {
        console.log(this.alt);
    }
    address2.onclick = function () {
        console.log(this.alt);
    }
    address3.onclick = function () {
        console.log(this.alt);
    }
}





