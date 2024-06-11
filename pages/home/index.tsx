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
const queryPath ={  query: `query ($language: String!, $path: String!) {
  catalogue(language: $language, path: $path) {
    ...item
    topics {
      path
      name
    }
  }
}

fragment item on Item {
  id
  name
  type
  path
  components {
    ...Component
  }
}

fragment Component on Component {
  ...BaseComponentDefinition
  content {
    ...BaseComponentContent

    ... on ComponentChoiceContent {
      selectedComponent {
        ...BaseComponentDefinition
        content {
          ...BaseComponentContent
          ...LevelThreePieceContent
        }
      }
    }

    ... on ContentChunkContent {
      chunks {
        ...BaseComponentDefinition
        content {
          ...BaseComponentContent
          ...LevelThreePieceContent
        }
      }
    }

    ... on ComponentMultipleChoiceContent {
      selectedComponents {
        ...BaseComponentDefinition
        content {
          ...BaseComponentContent
          ...LevelThreePieceContent
        }
      }
    }

    ... on PieceContent {
      components {
        ...BaseComponentDefinition
        content {
          ...BaseComponentContent
          ...LevelThreePieceContent

          ... on ComponentChoiceContent {
            selectedComponent {
              ...BaseComponentDefinition
              content {
                ...BaseComponentContent
                ...LevelTwoPieceContent
              }
            }
          }

          ... on ContentChunkContent {
            chunks {
              ...BaseComponentDefinition
              content {
                ...BaseComponentContent
                ...LevelTwoPieceContent
              }
            }
          }

          ... on ComponentMultipleChoiceContent {
            selectedComponents {
              ...BaseComponentDefinition
              content {
                ...BaseComponentContent
                ...LevelTwoPieceContent
              }
            }
          }
        }
      }
    }
  }
}

fragment BaseComponentContent on ComponentContent {
  ...Boolean
  ...SingleLine
  ...RichText
  ...ImageContent
  ...ParagraphCollection
  ...ItemRelations
  ...GridRelations
  ...Location
  ...PropertiesTable
  ...DateTime
  ...VideoContent
  ...Numeric
  ...Selection
  ...File
}

fragment BaseComponentDefinition on Component {
  id
  name
  type
}

fragment Boolean on BooleanContent {
  value
}

fragment Image on Image {
  url
  altText
  key
  variants {
    url
    width
    key
  }
}

fragment ImageContent on ImageContent {
  images {
    ...Image
  }
}

fragment SingleLine on SingleLineContent {
  text
}

fragment RichText on RichTextContent {
  json
  html
  plainText
}

fragment ParagraphCollection on ParagraphCollectionContent {
  paragraphs {
    title {
      ...SingleLine
    }
    body {
      ...RichText
    }
    images {
      ...Image
    }
  }
}

fragment PropertiesTable on PropertiesTableContent {
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

fragment ItemRelations on ItemRelationsContent {
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

fragment GridRelations on GridRelationsContent {
  grids {
    id
    name
  }
}

fragment Location on LocationContent {
  lat
  long
}

fragment DateTime on DatetimeContent {
  datetime
}

fragment Video on Video {
  id
  playlists
  title
  thumbnails {
    ...Image
  }
}

fragment VideoContent on VideoContent {
  videos {
    ...Video
  }
}

fragment Numeric on NumericContent {
  number
  unit
}

fragment Selection on SelectionContent {
  options {
    key
    value
  }
}

fragment File on FileContent {
  files {
    url
    key
    title
    size
  }
}

fragment LevelOnePieceContent on PieceContent {
  components {
    ...BaseComponentDefinition
    content {
      ...BaseComponentContent
    }
  }
}

fragment LevelTwoPieceContent on PieceContent {
  components {
    ...BaseComponentDefinition
    content {
      ...BaseComponentContent
      ...LevelOnePieceContent

      ... on ComponentChoiceContent {
        selectedComponent {
          ...BaseComponentDefinition
          content {
            ...BaseComponentContent
          }
        }
      }

      ... on ContentChunkContent {
        chunks {
          ...BaseComponentDefinition
          content {
            ...BaseComponentContent
          }
        }
      }

      ... on ComponentMultipleChoiceContent {
        selectedComponents {
          ...BaseComponentDefinition
          content {
            ...BaseComponentContent
          }
        }
      }
    }
  }
}

fragment LevelThreePieceContent on PieceContent {
  components {
    ...BaseComponentDefinition
    content {
      ...BaseComponentContent
      ...LevelTwoPieceContent

      ... on ComponentChoiceContent {
        selectedComponent {
          ...BaseComponentDefinition
          content {
            ...BaseComponentContent
            ...LevelOnePieceContent
          }
        }
      }

      ... on ContentChunkContent {
        chunks {
          ...BaseComponentDefinition
          content {
            ...BaseComponentContent
            ...LevelOnePieceContent
          }
        }
      }

      ... on ComponentMultipleChoiceContent {
        selectedComponents {
          ...BaseComponentDefinition
          content {
            ...BaseComponentContent
            ...LevelOnePieceContent
          }
        }
      }
    }
  }
}

`,
 variables: {
  language: "en",
  path: "/apps/home/home",
}
}
type T ={

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
const imageLoader = ({ src}:any) => {
  return `https://app.crystallize.com/@alexanderaspmannu/en/assets/photo/alexanderaspmannu/24/3/14/1/${src}`
}
 
function HomePage<getStaticProps>({data}: any) {
console.log(data)

const [res,setRes] = useState(data)

console.log(res)

  const [flipCard, setFlipCard] = useState<boolean>(false);
  return (
    <main className={`flex min-h-screen `} style={{ backgroundColor: '#131418', width: '100%' }}>
      <div style={{ position: 'absolute', width: '50%', height: '100%', backgroundColor: '#16191E', right: 0 }}>

      </div>
      <div style={{ /*width: '100%', backgroundColor: '#23282E', zIndex:1,maxWidth:'1380px',margin:'auto'*/ }} className={styles.container}>
        <ul>{/*
              <li>Home</li>
              <li>About</li>
        <li>Skills</li>
        items-center justify-center
        */}
        </ul>
        <div style={{ width: 'auto', height: 40 }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', height: 'auto' }}>
          <span style={{ justifyContent: 'space-between', width: '10%' }}>
            <div style={{ alignContent: 'start' }}>
              <Logo />
            </div>
            <div style={{ position: 'absolute', paddingLeft: 50 }}>
              <div style={{}} className={styles.card}>
                <p style={{ fontWeight: 1, fontFamily: 'roboto' }} className={styles.card__text_jobdescription}>FRONTEND DEVELOPER</p>
                <div style={{}}>
                  <p className={styles.card__text_name}>Alexander Aspman</p>
                </div>
                <p style={{ fontSize: 10 }} className={styles.card__text_quote}>
                  I would love to contribute to your company!

                  I work hard and I willingly do so with a smile, send me a message
                </p>
              </div><div>

              </div>
            </div>
            <div style={{ alignItems: 'center', height: '100%' }}>
              <hr />
            </div>


          </span>
          <div className={styles.container__body}>



            <Image
              src="https://media.crystallize.com/alexanderaspmannu/24/3/14/1/@1024/portfoliohomescreenimage.avif"
              alt="Picture of the author"
              width={1000}
              height={1000}
              className={styles.picture__creator} />
          </div>
          <Card />
          <div className={styles.card__flip}
          ><div className={styles.flip_card}>
              <div className={styles.flip_card_inner}>
                <div className={styles.flip_card_front}>
                  See my projects
                  <div className={styles.flip_card_front} style={{ width: 130, height: 100, backgroundColor: 'gray' }}></div>

                </div>
                <div className={styles.flip_card_back}>
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>

          </div>
          <span className={styles.card_text_vertial}>
            <p style={{}}>"I always learn the newest frameworks, becouse I like to chalange my self and evolve</p>
            <p style={{ writingMode: 'vertical-rl', marginTop: 240, position: 'absolute', right: 0 }} className={styles.link__right}>Link to my github</p>
            <p style={{ writingMode: 'vertical-rl', marginTop: 40, position: 'absolute', right: 0 }} className={styles.link__right}>Link to my linkedIn</p>

          </span>


        </div>
      </div>

    </main>
  );
}

export default HomePage