
const url = '/api/contact'
export const userMessage = async({
    email,
    phonenumber,
    message
}:{
    email:string;
    phonenumber:string;
    message:string;
})=>{
    try{
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email,phonenumber,message}),
        });
        return response.json();
    }catch (error){
        return error
    }
}






