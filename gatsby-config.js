require(`dotenv`).config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        siteTitle: `hanameee.github.io`,
        siteTitleAlt: `hanameee.github.io`,
        siteHeadline: `dev blog for @hanameee`,
        siteUrl: `https://hanameee.github.io/`,
        siteDescription: `dev blog for @hanameee`,
        siteLanguage: `en`,
        siteImage: `/about-image.jpg`,
        author: `@hanameee`,
    },
    plugins: [
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            // See the theme's README for all available options
            options: {
                navigation: [
                    {
                        title: `Blog`,
                        slug: `/blog`,
                    },
                    {
                        title: `About`,
                        slug: `/about`,
                    },
                ],
                externalLinks: [
                    {
                        name: `Github`,
                        url: `https://github.com/hanameee`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
                short_name: `minimal-blog`,
                description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#6B46C1`,
                display: `standalone`,
                icons: [
                    {
                        src: `/android-icon-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Noto Sans KR`],
                display: "swap",
            },
        },
    ],
};
