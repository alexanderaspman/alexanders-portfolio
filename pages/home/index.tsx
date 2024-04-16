import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "@/components/logo";
import styles from '@/pages/home/styleHome.module.scss'
import Link from "next/link";
import Transtion from 'react-transition-group/Transition'
import { AwaitedReactNode, Children, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import ModalDev from "@/components/modal";
import { GetStaticProps } from "next";

const queryPath ={  query:`
query ($language: String!, $path: String!) {
	catalogue(language: $language, path: $path) {
	  ...item
	  ...product
	  topics {
		path
		name
	  }
	}
  }
  
  fragment content on ComponentContent {
	...boolean
	...singleLine
	...richText
	...imageContent
	...paragraphCollection
	...itemRelations
	...gridRelations
	...location
	...propertiesTable
	...dateTime
	...videoContent
	...numeric
	...selection
	...file
  }
  
  fragment component on Component {
	id
	name
	type
	content {
	  ...content
	  ...componentChoice
	  ...contentChunk
	}
  }
  
  fragment dateTime on DatetimeContent {
	datetime
  }
	
  
  fragment imageContent on ImageContent {
	images {
	  ...image
	}
  }
  
  fragment image on Image {
	url
	altText
	key
	variants {
	  url
	  width
	  key
	}
  }
  
  fragment item on Item {
	id
	name
	type
	path
	components {
	  ...component
	}
  }
  
  fragment location on LocationContent {
	lat
	long
  }
  
  fragment paragraphCollection on ParagraphCollectionContent {
	paragraphs {
	  title {
		...singleLine
	  }
	  body {
		...richText
	  }
	  images {
		...image
	  }
	}
  }
  
  fragment product on Product {
	id
	name
	type
	language
	path
  
	components {
	  ...component
	}
  
	variants {
	  name
	  sku
	  components {
	   ...component
	  }
	  price
	  priceVariants {
		identifier
		name
		price
		currency
	  }
	  stockLocations {
		identifier
		name
		stock
	  }
	  isDefault
	  images {
		url
		altText
		key
  
		variants {
		  key
		  width
		  url
		}
	  }
  
	  subscriptionPlans {
		identifier
		name
		periods {
		  id
		  name
		  initial {
			priceVariants {
			  identifier
			  name
			  price
			  currency
			}
		  }
		  recurring {
			priceVariants {
			  identifier
			  name
			  price
			  currency
			}
		  }
		}
	  }
	}
  
	vatType {
	  name
	  percent
	}
  }
  
  fragment propertiesTable on PropertiesTableContent {
	sections {
	  ... on PropertiesTableSection {
		title
		properties {
		  key
		  value
		}
	  }
	}
  }
  
  fragment itemRelations on ItemRelationsContent {
	items {
	  id
	  name
	  path
	}
	productVariants {
	  sku
	  name
	}
  }
  
  fragment gridRelations on GridRelationsContent {
	grids {
	  id
	  name
	}
  }
  
  fragment richText on RichTextContent {
	json
	html
	plainText
  }
  
  fragment boolean on BooleanContent {
	value
  }
  
  fragment singleLine on SingleLineContent {
	text
  }
  
  fragment videoContent on VideoContent {
	videos {
	  ...video
	}
  }
  
  fragment video on Video {
	id
	playlists
	title
	thumbnails {
	  ...image
	}
  }
  
  fragment numeric on NumericContent {
	number
	unit
  }
  
  fragment componentChoice on ComponentChoiceContent {
	selectedComponent {
	  id
	  name
	  type
	  content {
		...content
	  }
	}
  }
  
  fragment contentChunk on ContentChunkContent {
	chunks {
	  id
	  name
	  type
	  content {
		...content
	  }
	}
  }
  
  fragment selection on SelectionContent {
	options {
	  key
	  value
	}
  }
  
  
  fragment file on FileContent {
	files {
	  url
	  key
	  title
	  size
	}
  }
  
  
`,

 variables:{
	language:"en",
	path:"/projects"
  }
}


export  const  getStaticProps:GetStaticProps = async(params:any)=>{
console.log()
    const headers = {
        'content-type': 'application/json',
      };
   
      
      const options = {
        
        method: 'POST',
        headers,
        body: JSON.stringify(queryPath)
      };
//const data =  await (await fetch("", options)).json()
console.log()


    return{
        props:{
     
    }
}
}

const imageLoader = ({ src}:any) => {
  return `https://app.crystallize.com/@alexanderaspmannu/en/assets/photo/alexanderaspmannu/24/3/14/1/${src}`
}
 
const HomePage=({}:any) =>{
  console.log()
  const [toggleAnimation,setToggleAnimation] =  useState<boolean|any|string[]>(false)
  const [showBlock, setShowBlock] = useState<boolean>()

const animationHandler = async (toggleAnimation:boolean) =>{
	if(toggleAnimation===false){
		setToggleAnimation(true)}
}

  useEffect(()=>{
     animationHandler(toggleAnimation)
  },[])
  /*
const defaultStyle={
  transtion:`opacity ${3000}ms ease-in-out`
}
const transitionStyle = {
  entering:{opacity:0},
  entered:{opacity:1}
}
  const Fade =({in:inProps, children}:any)=>{
   let state:any[]=[]
   console.log({state})

    return(
    <Transtion in={toggleAnimation} timeout={3000}>
      {(state: Event)=>(
        <div style={{
          ...defaultStyle,
        ...transitionStyle[state]}}>
          {children}

        </div>
      )}
    </Transtion>)
  }*/
  return (
    <main className="flex min-h-screen items-center justify-center" style={{ flex: 1 ,backgroundColor:'#131418',width:'100%'}}>
    <div style={{position:'absolute' ,width:'50%',height:'100%',backgroundColor:'#16191E',right:0}}>
   
    </div>
     <div className={styles.container}>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        </ul>
      <div style={{width:'auto',height:40,justifyContent:'flex-end',flex:1}}><p style={{height:'20px',width:'20px',right:0,backgroundColor:'gray',alignSelf:'flex-end'}}>-</p></div>
      <div style={{ display: 'flex', justifyContent: 'space-between',height:'auto'}}>
        <span style={{justifyContent:'space-between',width:'10%'}}>
          <div style={{alignContent:'start'}}>
          <Logo/>
          </div>
          <div style={{position:'absolute',paddingLeft:50}}>

          <div style={{}} className={styles.card}>
          <p style={{fontWeight:1,fontFamily:'roboto'}} className={styles.card__text_title}>FRONTEND DEVELOPER</p>
          <div style={{}}>
          <p  className={styles.card__text_center}>Alexander Aspman</p>
          </div>
          
          <p style={{fontSize:10}} className={styles.card__text_last}>

          I would love to contribute to your company!
           
              Please send me a message, I work hard and I do so with a smile.
            </p>
            <div style={{flexDirection:'row',justifyContent:'center',justifySelf:'end',alignContent:'end', width:'auto',paddingLeft:'55px',margin:30}}>
      { //   <a className={styles.card__btn} href="about"><Link href={'/about'}>About me</Link></a>
      }
            </div>
            </div><div>
          
          </div>
          </div>
          <div  style={{alignItems:'center',height:'60%'}}>
<hr/>
          </div>
<div className={styles.card__projects} style={{padding:'0 0 0 30px'}}>
      <p>See my projects</p>   
    <div style={{width:130,height:100,backgroundColor:'gray'}}></div>
          </div>
         
        </span>
        <div>
        
        
  
  
  <ModalDev children={<Image 
          src="https://media.crystallize.com/alexanderaspmannu/24/3/14/1/@1024/portfoliohomescreenimage.avif"
          alt="Picture of the author"
          width={1100}
          height={1100}
          style={{margin:'auto'}}
        />} 
        duration={4000} 
        showBlock={toggleAnimation}>
      
    
</ModalDev>
       
        </div>
        <span>
        <p className={styles.text_quote} style={{}}>"I always learn the newest frameworks, becouse I like to chalange my self and evolve</p>
          <p className={styles.text_link} style={{ writingMode: 'vertical-rl',marginTop:100}}>Link to my github</p>
          <p className={styles.text_link}  style={{ writingMode: 'vertical-rl',marginTop:40}}>Link to my linkedIn</p>
        
        </span>
      </div>
      </div>
      
    </main>
  );
}

export default HomePage