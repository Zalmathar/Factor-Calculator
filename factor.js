function Factor() {
    var awnser = document.getElementById("Awnserbox");
    var A = document.getElementById("EquA").value;
    var B = document.getElementById("EquB").value;
    var C = document.getElementById("EquC").value;
    var op1 = document.getElementById("AOS1").value;
    var op2 = document.getElementById("AOS2").value;
    var negB = - + B;
    if (op2 === "-") {
        var CC = - + C;
    } else {
        var CC = C
    }
    var Bpwr = Math.pow(B, 2); // takes B and squares it
    var fac = 4 * A * CC; // take 4 times a times true c
    var tosqr = Bpwr - fac;  // takes sqare of b and minuses it from 4 * A * C
    var equsqr = Math.sqrt(tosqr); // takes the square root of b^2-4ac
    var sqrAdd = negB + equsqr; // takes -b and adds it to the sqrt of b^2-4ac 
    var sqrSub = negB - equsqr; // takes -b and subracts it from sqrt of b^2-4ac
    var Adddev = sqrAdd / 2; // devides the addition by 2
    var Subdev = sqrSub / 2; // devides the subraction by 2
    var AddInv = Adddev * -1; //inverses the equation
    var SubInv = Subdev * -1; //inverses the equation
    console.log(AddInv);
    console.log(SubInv);
    awnser.value = "(" + A + "x+" + AddInv + ")" + "(" + A + "x+" + SubInv + ")";
}

function Reset() {
    var awnser = document.getElementById("Awnserbox");
    var equa = document.getElementById("EquA");
    var equb = document.getElementById("EquB");
    var equc = document.getElementById("EquC");
    equa.value = "";
    equb.value = "";
    equc.value = "";
    awnser.value = "";
}