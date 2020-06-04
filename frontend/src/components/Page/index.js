import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import PAGE_QUERY from "../../queries/page/page";

import BoomboxSlice from "../BoomboxSlice/BoomboxSlice"

const Page = () => {
  let { id } = useParams();

  return (
    <div>
      <Query query={PAGE_QUERY} id={id}>
        {({ data }) => {
          // return (data.page.slice_boombox[0].background_color);
          return (
            <BoomboxSlice data={data.page.slice_boombox[0]} />
          )
        }}
      </Query>
    </div>
  );
};

export default Page;
