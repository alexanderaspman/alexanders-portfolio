
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react';
type Uri={
  url:string
}
const client = new ApolloClient<Uri>({
  uri: 'https://api.crystallize.com/alexanderaspmannu/catalogue',
  cache:  new InMemoryCache(),
   // replace with your API URL
});

const QUERY = gql`
  query Catalogue($language: String!, $path: String!) {
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
      ...LevelThreePieceContent
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

  # ... (rest of the fragments)
`;

function Catalogue() {
  const { loading, error, data } = useQuery(QUERY, {
    variables: {
      language: 'en',
      path: '/apps/home/home',
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const catalogueData = data.catalogue;

  // Use the fetched data to render your React components
  return (
    <div>
      {/* Render the catalogue data */}
      {catalogueData.topics.map((topic: { path: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
        <h2 key={topic.path}>{topic.name}</h2>
      ))}
      {/* Render the components */}
      {catalogueData.components.map((component: { id: Key | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
        <div key={component.id}>
          {/* Render the component content */}
          {component.content}
        </div>
      ))}
    </div>
  );
}

export default Catalogue;