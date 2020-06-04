import gql from "graphql-tag";

const PAGE_QUERY = gql`
  query Pages($id: ID!) {
    page(id: $id) {
      slice_boombox {
        id
        background_color
        title
        copy
        button_text
        background_image {
            url
        }
      }
    }
  }
`;

export default PAGE_QUERY;
