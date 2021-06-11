function getAndupdate() {
    let title= document.getElementById("title").value;
    let description=document.getElementById("Description").value;
    // alert("title is"+ title +"description is" +  description);
    if(localStorage.getItem('ItemsJson')==null)
    {
        itemJsonarray=[];
        itemJsonarray.push([title,description]);
        localStorage.setItem('ItemsJson',JSON.stringify(itemJsonarray));
    }
    else{
        str=localStorage.getItem('ItemsJson');
        itemJsonarray = JSON.parse(str);
        itemJsonarray.push([title,description]);
         localStorage.setItem('ItemsJson',JSON.stringify(itemJsonarray));
    }
    update();
}
function update(){
    if(localStorage.getItem('ItemsJson')==null)
    {
        itemJsonarray=[];
       
        localStorage.setItem('ItemsJson',JSON.stringify(itemJsonarray));
    }
    else{
        str=localStorage.getItem('ItemsJson');
        itemJsonarray = JSON.parse(str);
      
    }
    let tablebody=document.getElementById("tablebody");
    let str1="";
    itemJsonarray.forEach((element,index) => {
        str1+=` 
        <tr>
        <td>${index + 1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td> <input type="button" onclick="deletee(${index})" value="Delete"></td>
    </tr>`;
    });
    tablebody.innerHTML=str1;
}
add=document.getElementById("add");
add.addEventListener('click',getAndupdate);
update();

function deletee(item){
    console.log("delete",item);
    str=localStorage.getItem('ItemsJson');
    itemJsonarray = JSON.parse(str);
    itemJsonarray.splice(item,1);
    localStorage.setItem('ItemsJson',JSON.stringify(itemJsonarray));
    update();
}
function clearr(){
    str=localStorage.getItem('ItemsJson');
    array=JSON.parse(str);
    array.splice(0,array.length);
   // console.log("hello")
   // console.log(array);
    localStorage.setItem('ItemsJson',JSON.stringify(array));
    update();
}