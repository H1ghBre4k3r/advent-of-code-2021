document.querySelector("pre").innerText.split("\n").map(n=>+n).reduce((p,c,i,a)=>p+(i>2&&c>a[i-3]),0)
