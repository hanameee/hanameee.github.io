(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"ET/+":function(t,e,a){"use strict";a.r(e),a.d(e,"query",(function(){return p}));var n=a("q1tI"),c=a.n(n),s=(a("pJf4"),a("2A+t")),o=a("IYQP"),r=a("Wbzz"),u=a("Q3iF"),i=a("dq5L"),l=a("b+HC"),b=a("n/Q7"),g=a("GIzu"),m=function(t){var e=t.posts,a=t.pageContext,n=Object(i.a)(),c=n.tagsPath,m=n.basePath;return Object(s.c)(u.a,null,Object(s.c)(g.a,{title:"Tag: "+a.name}),Object(s.c)(o.c,{sx:{alignItems:"center",justifyContent:"space-between",flexFlow:"wrap"}},Object(s.c)(o.d,{variant:"styles.h2"},a.name),Object(s.c)(o.e,{as:r.Link,sx:{variant:"links.secondary"},to:Object(b.a)("/"+m+"/"+c)},"View all tags")),Object(s.c)(l.a,{posts:e,sx:{mt:[4,5]}}))};e.default=function(t){var e=t.data,a=t.pageContext,n=e.allPost;return c.a.createElement(m,{posts:n.nodes,pageContext:a})};var p="4062104895"},TI0m:function(t,e,a){"use strict";a("pJf4");var n=a("q1tI"),c=a.n(n),s=a("IYQP"),o=a("Wbzz"),r=a("dq5L"),u=a("n/Q7");e.a=function(t){var e=t.tags,a=Object(r.a)(),n=a.tagsPath,i=a.basePath;return c.a.createElement(c.a.Fragment,null,e.map((function(t,e){return c.a.createElement(c.a.Fragment,{key:t.slug},!!e&&", ",c.a.createElement(s.e,{as:o.Link,to:Object(u.a)("/"+i+"/"+n+"/"+t.slug)},t.name))})))}},"b+HC":function(t,e,a){"use strict";var n=a("2A+t"),c=a("q1tI"),s=a.n(c),o=a("IYQP"),r=a("Wbzz"),u=a("TI0m"),i=function(t){var e=t.post,a=t.showTags,c=void 0===a||a;return Object(n.c)(o.a,{mb:4},Object(n.c)(o.e,{as:r.Link,to:e.slug,sx:{fontSize:[1,2,3],color:"text"}},e.title),Object(n.c)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},Object(n.c)("time",null,e.date),e.tags&&c&&Object(n.c)(s.a.Fragment,null," — ",Object(n.c)(u.a,{tags:e.tags}))))};e.a=function(t){var e=t.posts,a=t.className,c=t.showTags,s=void 0===c||c;return Object(n.c)("section",{sx:{mb:[5,6,7]},className:a},e.map((function(t){return Object(n.c)(i,{key:t.slug,post:t,showTags:s})})))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-tag-query-tsx-faee247ce11d589048df.js.map