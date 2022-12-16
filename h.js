const posts = [
    {title:'POST ONE', body:'this is my first post'} ,
    {title:'POST TWO', body:'this is my first post'} 
    ];


function getpost(){
    setTimeout(()=>{
        let outpu='';
        posts.forEach((post,index) => {
            outpu+=`<li>${post.title}</li>`;
            
        });
        document.body.innerHTML=outpu;

    },1000);
    
    
}

function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        posts.push(post);
        const error=false;
        if (!error){
            resolve();
        }
        else{
            reject("error");

        }
    },2000);
    });
    
}








createpost({title:'POST THREE',body:'this is post three'}).then(getpost);
createpost({title:'POST FOUR',body:'this is post three'}).then(getpost);


function deletepost(){
    setTimeout(()=>{
        posts.pop();
        document.body.innerHTML='deleted ALL post';

    },4000);
    
}
deletepost();
