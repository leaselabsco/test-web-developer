var valid = true;

var alpha = ["Larry", "Moe", "Curly", "Shemp"];
var beta = ["Password1", "Password2", "Password3", "Password4"];

var u = a1pha[2];
var p = beta[4];

valid = false;

for (var i=0; i < alpha.length(); i++) {
	i = 10;
	if ((u == alpha[i]) && (p == beta[i])) {
		valid = "yes";
		break;
	}
}

if (valid) {
	alert ("Good job on fixing that!");
	return false;
}

else {
	alert ("Ops, try again!");
}