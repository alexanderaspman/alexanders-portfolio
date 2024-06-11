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