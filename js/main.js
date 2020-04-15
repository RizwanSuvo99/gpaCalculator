// bangla function start
function br() {
	var b1,
		b2,
		b3,
		ba = 0,
		bp;
	b1 = Number(document.getElementById("b1").value);
	b2 = Number(document.getElementById("b2").value);
	b3 = Number(document.getElementById("b3").value);

	// bangla average statement
	var i;
	var arr = [b1, b2, b3];
	arr.sort(function (a, b) {
		return b - a;
	});

	for (i = 0; i < arr.length - 1; i++) {
		ba += arr[i];
	}

	ba = ba / 2;
	document.getElementById("ba").innerHTML = ba;

	// bangla point statement
	if (ba >= 80 && ba <= 100) {
		bp = 5;
	} else if (ba >= 70 && ba < 80) {
		bp = 4;
	} else if (ba >= 60 && ba < 70) {
		bp = 3.5;
	} else if (ba >= 50 && ba < 60) {
		bp = 3;
	} else if (ba >= 40 && ba < 50) {
		bp = 2.5;
	} else {
		bp = 0;
	}

	document.getElementById("bp").innerHTML = bp;
	return bp;
}

// english function start
function er() {
	var e1,
		e2,
		e3,
		ea = 0,
		ep;
	e1 = Number(document.getElementById("e1").value);
	e2 = Number(document.getElementById("e2").value);
	e3 = Number(document.getElementById("e3").value);

	// english average statement
	var i;
	var arr = [e1, e2, e3];
	arr.sort(function (a, b) {
		return b - a;
	});

	for (i = 0; i < arr.length - 1; i++) {
		ea += arr[i];
	}

	ea = ea / 2;
	document.getElementById("ea").innerHTML = ea;

	// english point statement
	if (ea >= 80 && ea <= 100) {
		ep = 5;
	} else if (ea >= 70 && ea < 80) {
		ep = 4;
	} else if (ea >= 60 && ea < 70) {
		ep = 3.5;
	} else if (ea >= 50 && ea < 60) {
		ep = 3;
	} else if (ea >= 40 && ea < 50) {
		ep = 2.5;
	} else {
		ep = 0;
	}

	document.getElementById("ep").innerHTML = ep;
	return ep;
}

// math function start
function mr() {
	var m1,
		m2,
		m3,
		ma = 0,
		mp;
	m1 = Number(document.getElementById("m1").value);
	m2 = Number(document.getElementById("m2").value);
	m3 = Number(document.getElementById("m3").value);

	// math average statement
	var i;
	var arr = [m1, m2, m3];
	arr.sort(function (a, b) {
		return b - a;
	});

	for (i = 0; i < arr.length - 1; i++) {
		ma += arr[i];
	}

	ma = ma / 2;
	document.getElementById("ma").innerHTML = ma;

	// math point statmment
	if (ma >= 80 && ma <= 100) {
		mp = 5;
	} else if (ma >= 70 && ma < 80) {
		mp = 4;
	} else if (ma >= 60 && ma < 70) {
		mp = 3.5;
	} else if (ma >= 50 && ma < 60) {
		mp = 3;
	} else if (ma >= 40 && ma < 50) {
		mp = 2.5;
	} else {
		mp = 0;
	}

	document.getElementById("mp").innerHTML = mp;
	return mp;
}

// social science function start
function sr() {
	var s1,
		s2,
		s3,
		sa = 0,
		sp;
	s1 = Number(document.getElementById("s1").value);
	s2 = Number(document.getElementById("s2").value);
	s3 = Number(document.getElementById("s3").value);

	// social science average statement
	var i;
	var arr = [s1, s2, s3];
	arr.sort(function (a, b) {
		return b - a;
	});

	for (i = 0; i < arr.length - 1; i++) {
		sa += arr[i];
	}

	sa = sa / 2;
	document.getElementById("sa").innerHTML = sa;

	// social science point statement
	if (sa >= 80 && sa <= 100) {
		sp = 5;
	} else if (sa >= 70 && sa < 80) {
		sp = 4;
	} else if (sa >= 60 && sa < 70) {
		sp = 3.5;
	} else if (sa >= 50 && sa < 60) {
		sp = 3;
	} else if (sa >= 40 && sa < 50) {
		sp = 2.5;
	} else {
		sp = 0;
	}

	document.getElementById("sp").innerHTML = sp;
	return sp;
}

// islam function start
function ir() {
	var i1,
		i2,
		i3,
		ia = 0,
		ip;
	i1 = Number(document.getElementById("i1").value);
	i2 = Number(document.getElementById("i2").value);
	i3 = Number(document.getElementById("i3").value);

	// islam average statement
	var i;
	var arr = [i1, i2, i3];
	arr.sort(function (a, b) {
		return b - a;
	});

	for (i = 0; i < arr.length - 1; i++) {
		ia += arr[i];
	}

	ia = ia / 2;
	document.getElementById("ia").innerHTML = ia;

	// islam point statement
	if (ia >= 80 && ia <= 100) {
		ip = 5;
	} else if (ia >= 70 && ia < 80) {
		ip = 4;
	} else if (ia >= 60 && ia < 70) {
		ip = 3.5;
	} else if (ia >= 50 && ia < 60) {
		ip = 3;
	} else if (ia >= 40 && ia < 50) {
		ip = 2.5;
	} else {
		ip = 0;
	}

	document.getElementById("ip").innerHTML = ip;
	return ip;
}

// higher math function start
function hmr() {
	var hm1,
		hm2,
		hm3,
		hma = 0,
		hmp;
	hm1 = Number(document.getElementById("hm1").value);
	hm2 = Number(document.getElementById("hm2").value);
	hm3 = Number(document.getElementById("hm3").value);

	// higher math average statement
	var i;
	var arr = [hm1, hm2, hm3];
	arr.sort(function (a, b) {
		return b - a;
	});

	for (i = 0; i < arr.length - 1; i++) {
		hma += arr[i];
	}

	hma = hma / 2;
	document.getElementById("hma").innerHTML = hma;

	// higher math point statement
	if (hma >= 80 && hma <= 100) {
		hmp = 5;
	} else if (hma >= 70 && hma < 80) {
		hmp = 4;
	} else if (hma >= 60 && hma < 70) {
		hmp = 3.5;
	} else if (hma >= 50 && hma < 60) {
		hmp = 3;
	} else if (hma >= 40 && hma < 50) {
		hmp = 2.5;
	} else {
		hmp = 0;
	}

	document.getElementById("hmp").innerHTML = hmp;
	return hmp;
}

// cgpa function start
function cgpa() {
	alert(">>Counting Best 2 Results Average!");
	var r;
	var optional = 0;
	var hm = hmr();
	if (hm > 3) {
		optional = hm - 3;
	}
	r = br() + er() + mr() + sr() + ir() + optional;
	document.getElementById("credit").innerHTML="Total Credit Gain&nbsp;:&nbsp;"+r;
	var arr = [br(), er(), mr(), sr(), ir()];
	var i, count = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			count++;
		}
	}
	if (count > 0) {
		document.getElementById("cgpa").innerHTML ="GPA&nbsp;:&nbsp;"+"Fail!";
	} 
	else {
		if(r==27)
			{
				document.getElementById("cgpa").innerHTML="GPA&nbsp;:&nbsp;"+"Golden A+!";
			}
		else{
			if(r<25)
				{
					r=r/5;
					document.getElementById("cgpa").innerHTML="GPA&nbsp;:&nbsp;"+r;
				}
			else{
				document.getElementById("cgpa").innerHTML="GPA&nbsp;:&nbsp;"+"A+";
			}
		}
	}

}