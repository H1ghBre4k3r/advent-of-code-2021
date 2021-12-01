document.querySelector("pre").innerText.split("\n").map(n=>n-0).reduce((p,c,i,a)=>p+(i>0&&c>a[i-1]),0)
