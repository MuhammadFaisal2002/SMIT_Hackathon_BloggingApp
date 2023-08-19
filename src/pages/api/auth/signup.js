// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAll, save } from "@/services/users"

export default function handler(req, res) {
  if(req.method !== 'POST'){
    res.status(404).send()
  }
  const {firstname,lastname,email,password,re_password} = req.body
  try{
    save(firstname,lastname,email,password,re_password)
    res.status(201).send()
}catch(err){
 
  res.status(400).json({message : err})
}
  }
  
