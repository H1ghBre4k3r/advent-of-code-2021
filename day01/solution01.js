document.querySelector("pre").innerText.split("\n").map(n=>parseInt(n,10)).reduce((p,c,i,a)=>p+(i>0&&c>a[i-1]),0)
