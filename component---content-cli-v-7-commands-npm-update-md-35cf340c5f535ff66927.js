(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{O6H6:function(e,n,t){"use strict";var a=t("vOnD"),l=t("u9kb"),i=t("aOgs"),o=t("q1tI"),r=t.n(o),c=t("7ljp"),p=t("pD55"),b=t("8Aig"),s=t("ReZb"),m=t("GCVy"),d=t("+6vE");var u=function(e){var n=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},n))};var h=function(e){var n=e.children;return r.a.createElement("strong",null,n)},O=t("gnlW"),j=t("mwnC"),g=t("/Rw0"),f=t("dVM4"),N=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var n=e.items,t=e.depth;return r.a.createElement(N,{key:n,as:"ul",m:0,p:0},n.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:t>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(y,{items:e.items,depth:t+1}):null)})))}y.defaultProps={depth:0};var C=y,w=t("MfeC");function v(e){var n=w.a.getPath(e.location.pathname),t=w.a.getVariantAndPage(e.root,n);if(!t)return null;var a=w.a.getVariantsForPage(e.root,t.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},i)))}v.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=v,k=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),D=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,o=t.frontmatter,N=o.title,y=o.description,v=o.status,P=o.source,T=o.additionalContributors,G=void 0===T?[]:T,H=w.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:m.a,Prompt:u,PromptReply:h,Screenshot:O.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:N,description:y}),r.a.createElement(b.b,{location:a,isSearchEnabled:t.isSearchEnabled}),r.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(j.a,{editOnGitHub:t.themeOptions.editOnGitHub,pathPrefix:t.themeOptions.pathPrefix,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},N),y))),null!=H?r.a.createElement(I,null,r.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:a})):null),t.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(C,{items:t.tableOfContents.items})):null,r.a.createElement(D,null,v||P?r.a.createElement(l.k,{mb:3,alignItems:"center"},v?r.a.createElement(f.a,{status:v}):null,r.a.createElement(l.e,{mx:"auto"}),P?r.a.createElement(g.a,{href:P}):null):null,t.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var n=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},n?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(C,{items:t.tableOfContents.items})))}))):null,n,r.a.createElement(d.a,{editOnGitHub:t.themeOptions.editOnGitHub,editUrl:t.editUrl,contributors:t.contributors.concat(G.map((function(e){return{login:e}})))}))))))}},peLP:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t("zLVn"),l=(t("q1tI"),t("7ljp")),i=t("O6H6"),o={},r={_frontmatter:o},c=i.a;function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm update [-g] [<pkg>...]\n\naliases: up, upgrade\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This command will update all the packages listed to the latest version\n(specified by the ",Object(l.b)("inlineCode",{parentName:"p"},"tag")," config), respecting semver."),Object(l.b)("p",null,"It will also install missing packages. As with all commands that install\npackages, the ",Object(l.b)("inlineCode",{parentName:"p"},"--dev")," flag will cause ",Object(l.b)("inlineCode",{parentName:"p"},"devDependencies")," to be processed\nas well."),Object(l.b)("p",null,"If the ",Object(l.b)("inlineCode",{parentName:"p"},"-g")," flag is specified, this command will update globally installed\npackages."),Object(l.b)("p",null,"If no package name is specified, all packages in the specified location (global\nor local) will be updated."),Object(l.b)("h3",null,"Example"),Object(l.b)("p",null,"For the examples below, assume that the current package is ",Object(l.b)("inlineCode",{parentName:"p"},"app")," and it depends\non dependencies, ",Object(l.b)("inlineCode",{parentName:"p"},"dep1")," (",Object(l.b)("inlineCode",{parentName:"p"},"dep2"),", .. etc.).  The published versions of ",Object(l.b)("inlineCode",{parentName:"p"},"dep1"),"\nare:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "dist-tags": { "latest": "1.2.2" },\n  "versions": [\n    "1.2.2",\n    "1.2.1",\n    "1.2.0",\n    "1.1.2",\n    "1.1.1",\n    "1.0.0",\n    "0.4.1",\n    "0.4.0",\n    "0.2.0"\n  ]\n}\n')),Object(l.b)("h4",null,"Caret Dependencies"),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"app"),"'s ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," contains:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "dep1": "^1.1.1"\n}\n')),Object(l.b)("p",null,"Then ",Object(l.b)("inlineCode",{parentName:"p"},"npm update")," will install ",Object(l.b)("inlineCode",{parentName:"p"},"dep1@1.2.2"),", because ",Object(l.b)("inlineCode",{parentName:"p"},"1.2.2")," is ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," and\n",Object(l.b)("inlineCode",{parentName:"p"},"1.2.2")," satisfies ",Object(l.b)("inlineCode",{parentName:"p"},"^1.1.1"),"."),Object(l.b)("h4",null,"Tilde Dependencies"),Object(l.b)("p",null,"However, if ",Object(l.b)("inlineCode",{parentName:"p"},"app"),"'s ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," contains:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "dep1": "~1.1.1"\n}\n')),Object(l.b)("p",null,"In this case, running ",Object(l.b)("inlineCode",{parentName:"p"},"npm update")," will install ",Object(l.b)("inlineCode",{parentName:"p"},"dep1@1.1.2"),".  Even though the\n",Object(l.b)("inlineCode",{parentName:"p"},"latest")," tag points to ",Object(l.b)("inlineCode",{parentName:"p"},"1.2.2"),", this version do not satisfy ",Object(l.b)("inlineCode",{parentName:"p"},"~1.1.1"),", which is\nequivalent to ",Object(l.b)("inlineCode",{parentName:"p"},">=1.1.1 <1.2.0"),".  So the highest-sorting version that satisfies\n",Object(l.b)("inlineCode",{parentName:"p"},"~1.1.1")," is used, which is ",Object(l.b)("inlineCode",{parentName:"p"},"1.1.2"),"."),Object(l.b)("h4",null,"Caret Dependencies below 1.0.0"),Object(l.b)("p",null,"Suppose ",Object(l.b)("inlineCode",{parentName:"p"},"app")," has a caret dependency on a version below ",Object(l.b)("inlineCode",{parentName:"p"},"1.0.0"),", for example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "dep1": "^0.2.0"\n}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"npm update")," will install ",Object(l.b)("inlineCode",{parentName:"p"},"dep1@0.2.0"),", because there are no other\nversions which satisfy ",Object(l.b)("inlineCode",{parentName:"p"},"^0.2.0"),"."),Object(l.b)("p",null,"If the dependence were on ",Object(l.b)("inlineCode",{parentName:"p"},"^0.4.0"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "dep1": "^0.4.0"\n}\n')),Object(l.b)("p",null,"Then ",Object(l.b)("inlineCode",{parentName:"p"},"npm update")," will install ",Object(l.b)("inlineCode",{parentName:"p"},"dep1@0.4.1"),", because that is the highest-sorting\nversion that satisfies ",Object(l.b)("inlineCode",{parentName:"p"},"^0.4.0")," (",Object(l.b)("inlineCode",{parentName:"p"},">= 0.4.0 <0.5.0"),")"),Object(l.b)("h4",null,"Updating Globally-Installed Packages"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"npm update -g")," will apply the ",Object(l.b)("inlineCode",{parentName:"p"},"update")," action to each globally installed\npackage that is ",Object(l.b)("inlineCode",{parentName:"p"},"outdated")," -- that is, has a version that is different from\n",Object(l.b)("inlineCode",{parentName:"p"},"wanted"),"."),Object(l.b)("p",null,"Note: Globally installed packages are treated as if they are installed with a\ncaret semver range specified. So if you require to update to ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," you may\nneed to run ",Object(l.b)("inlineCode",{parentName:"p"},"npm install -g [<pkg>...]")),Object(l.b)("p",null,"NOTE: If a package has been upgraded to a version newer than ",Object(l.b)("inlineCode",{parentName:"p"},"latest"),", it will\nbe ",Object(l.b)("em",{parentName:"p"},"downgraded"),"."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-install"},"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-outdated"},"npm outdated")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-shrinkwrap"},"npm shrinkwrap")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/using-npm/registry"},"npm registry")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/folders"},"npm folders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-ls"},"npm ls"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-update-md-35cf340c5f535ff66927.js.map