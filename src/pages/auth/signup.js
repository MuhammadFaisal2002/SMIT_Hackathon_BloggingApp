import Form from "@/components/auth/form";

export default function SignUp () {
    const onSubmit = async (firstname,lastname,email,password,rePasword) => {
        try{
           const response = await fetch("/api/auth/signup", {
            method : "POST",
            body : JSON.stringify(firstname,lastname,email,password,rePasword),
            headers :{
                "Content-type" : "application/json"
            }
        }) 
        if (response.ok){
            alert("Signup SuccessFul")
        }
        }catch(err){
            
            console.error(err)
        }
        
    }
    return <Form signin={false} onFormSubmit = {onSubmit} />
};