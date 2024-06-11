

  import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "@/components/logo";
import styles from '@/pages/home/styleHome.module.scss'
import React,{ useState } from "react";
import Card from "@/components/card";
import { headers } from "next/headers";
import head from "next/head";
import { GetStaticProps, PreviewData } from "next";
import { RequestData } from "next/dist/server/web/types";

const queryPath ={  query: `query ($id: ID!, $language: String!) {
    grid(id: $id, language: $language) {
      id
      name
      meta {
        key
        value
      }
      rows {
        meta {
          key
          value
        }
        columns {
          layout {
            rowspan
            colspan
          }
          meta {
            key
            value
          }
          itemType
          itemId
          item {
            id
            name
            language
            path
            components {
              name
              type
            }
          }
        }
      }
    }
  }

  `,
   variables: {
 
   language: "en",
   id: "648c1f26fef2c4542b5fe0cd"

  }
}
  
export  const  getStaticProps:GetStaticProps = async()=>{
    const headers = {
      'content-type': 'application/json',
    };
    
    
    const options = {
      
      method: 'POST',
      headers,
      body: JSON.stringify(queryPath)
    };
    const res =  await (await fetch("https://api.crystallize.com/alexanderaspmannu/catalogue", options)).json()
    const data = res
    console.log(data)
    
      return{
        props:{
        data
      }}
     }
export default  function QueryProjects<getStaticProps>({data}: any) {
        
        const [res,setRes] = useState(data.data)
        console.log(res)


          return (
          
          
          
          <main className={`flex min-h-screen `} style={{ backgroundColor: '#131418', width: '100%' }}>
        
      
          </main>)}