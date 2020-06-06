import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import styled from "styled-components";

const SiteTitle = styled.h1`
    font-family: "Noto Sans KR";
`;

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <SiteTitle>Almost before we knew it</SiteTitle>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
);

export default IndexPage;
