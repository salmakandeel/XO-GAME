let turn ='x'
let square=[]
const title=document.querySelector('.title')
const game=(id)=>{
    let item=document.getElementById(id)
    if(turn=='x' && item.innerHTML=='')
       { item.innerHTML='x'
         turn='o'
        title.innerHTML='O'}
if(turn=='o' && item.innerHTML=='')
       { item.innerHTML='o'
          turn='x'
          title.innerHTML='X'}

   winner()
}
const reloadFunc=()=>{
    setInterval(()=>{title.innerHTML+='.'},1000)
     setTimeout(location.reload(),4000)
}
const winner=()=>{
   for(let i=1;i<10;i++)
 {  square[i]=document.getElementById('item'+i).innerHTML}

    if(square[1]===square[2]&& square[2] ==square[3]&& square[1]!=''){
        title.innerHTML=`${square[1]} winner`.replace(/\b\w/g, l => l.toUpperCase())
        reloadFunc()
    }
    if(square[4]===square[5]&& square[5] ==square[6]&& square[5]!=''){
        title.innerHTML=`${square[4]} winner`.replace(/\b\w/g, l => l.toUpperCase())
    }
    if(square[7]===square[8]&& square[8] ==square[9]&& square[7]!=''){
        title.innerHTML=`${square[7]} winner`.replace(/\b\w/g, l => l.toUpperCase())
        reloadFunc()

    }
    if(square[1]===square[4]&& square[4] ==square[7]&& square[1]!=''){
        title.innerHTML=`${square[1]} winner`.replace(/\b\w/g, l => l.toUpperCase())
        reloadFunc()
    }
    if(square[2]===square[5]&& square[5] ==square[8]&& square[2]!=''){
        title.innerHTML=`${square[2]} winner`.replace(/\b\w/g, l => l.toUpperCase())
        reloadFunc()

    }
    if(square[3]===square[6]&& square[6] ==square[9]&& square[3]!=''){
        title.innerHTML=`${square[3]} winner`.replace(/\b\w/g, l => l.toUpperCase())
        reloadFunc()

    }
    if(square[1]===square[5]&& square[5] ==square[9]&& square[1]!=''){
        title.innerHTML=`${square[1]} winner`.replace(/\b\w/g, l => l.toUpperCase())
        reloadFunc()

    }
    if(square[3]===square[5]&& square[5] ==square[7]&& square[3]!=''){
        title.innerHTML=`${square[3]} winner`.replace(/\b\w/g, l => l.toUpperCase())
        reloadFunc()

    }
  
}