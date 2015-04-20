var numaencontrardivisisores = 45530;
var conjuntodedivisores = [];
var elotro ;
var i;
/*debugger;*/


for (i = 1; i < Math.sqrt(numaencontrardivisisores) ; i = i+1) {
	if (numaencontrardivisisores % i === 0) {
		elotro = numaencontrardivisisores/i;
		conjuntodedivisores.push(i);
		conjuntodedivisores.push(elotro);
		
	}
}

/*console.log(conjuntodedivisores);*/
var estringdedivisores = conjuntodedivisores.join();
console.log(estringdedivisores);

