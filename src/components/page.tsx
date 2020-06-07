/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "./layout";
import SEO from "./seo";

type PageProps = {
    data: {
        page: {
            title: string;
            slug: string;
            excerpt: string;
            body: string;
        };
    };
};

const Page = ({ data: { page } }: PageProps) => (
    <Layout>
        <SEO title={page.title} description={page.excerpt} />
        <Heading variant="styles.h3">{page.title}</Heading>
        <section sx={{ my: 2 }}>
            <MDXRenderer>{page.body}</MDXRenderer>
        </section>
    </Layout>
);

export default Page;
