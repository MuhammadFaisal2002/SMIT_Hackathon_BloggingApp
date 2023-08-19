import Form2 from "@/components/auth/form2";
import ProfileHeader from "@/components/profileHeader";
import { useState } from 'react';

import { signIn } from 'next-auth/react'
export default function SignIn() {
    const [verified, setVerified] = useState(false);
    const onSubmit = async (email, password) => {
        const dataResponse = await signIn('credentials', { redirect: false, email, password })
        if (dataResponse.ok) {
            setVerified(true)
            console.log("1");
        }
        else if(!dataResponse.ok){
            alert("Email or password is incorrect")
        }
    }
    return (
        <>
            {verified && <ProfileHeader />}
            <Form2 onFormSubmit={onSubmit} />

        </>
    )



};
