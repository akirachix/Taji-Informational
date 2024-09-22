export async function POST(request:Request) {
    const baseUrl = process.env.BASE_URL
    const {email,phonenumber, message}= await request.json();
    if (!email && !phonenumber && !message){
        return new Response('Email,Message and Phone Number are missing',{
            status:400,
        })
    }
    try {
        const response = await fetch(`${baseUrl}`,{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({email,phonenumber, message})
        });
        const result = await response.json();
        return new Response(JSON.stringify (result),{
                status:201,
                statusText: "Message sent successfully!"
        })
    }catch(error){
        return new Response((error as Error).message,{
            status:500
        })
    }
}
  