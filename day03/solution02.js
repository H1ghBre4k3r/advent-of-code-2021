document.querySelector("pre").innerText.split("\n").reduce((p,_,j,a)=>j!=1?p:[...p].reduce(([o,d],_,i)=>[o.length>1&&((n=o.reduce((f=(p,c)=>p+=Math.pow(-1,+c[i])),0))||!n)?o.filter(v=>n<=0?v[i]==1:v[i]==0):o,d.length>1&&((n=d.reduce(f,0))||!n)?d.filter(v=>n<=0?v[i]==0:v[i]==1):d],[a,a])).reduce((p,[c])=>p*parseInt(c,2),1)
