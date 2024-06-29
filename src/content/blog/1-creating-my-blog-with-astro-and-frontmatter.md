---
layout: ../../components/BlogPostLayout.astro
title: 1. Embarking on a Developer's Blog Journey
pubDate: 2024-06-29T18:44:41.825Z
type: default
slug: 1-embarking-developer-blog-journey
description: Embarking on a Developer's Journey with Astro, FrontMatter and more
heroImage: /favicon.svg
---

Hello World! I am [Yang](https://www.linkedin.com/in/yangricardo/), a Software Developer currently refining my expertise at [ECOA PUC-Rio](https://www.linkedin.com/company/ecoapucrio/mycompany/). It's a pleasure to have you join me on this adventure, where I'll be sharing valuable insights and knowledge I've accumulated throughout my career.

This platform is designed as a glimpse into my professional journey within the software development industry. I will reveal the strategies I implement, exhibit my technical capabilities, and delve into the essential technologies that are integral to my role as a Full Stack Developer. Additionally, I'll explore my ventures into blockchain technology and recount my experiences with various independent and freelance projects.

In our inaugural post, I'm eager to guide you through the setup of a blog using Astro and FrontMatter. This blog serves not only as the foundation of this website but also as a framework for the content I aim to deliver in upcoming posts.

## Journey Purpose

The goal is to develop a straightforward static page suitable for deployment on GitHub Pages. During the search for suitable frontend frameworks, I discovered [Astro](https://astro.build/), which offers intriguing features. Although I typically work with [React](https://pt-br.react.dev/) and [Next.js](https://nextjs.org/), I'm keen to delve into Astro to potentially simplify the complexities often encountered in React-based frontend applications.

For this project, I plan to utilize [Typescript](https://www.typescriptlang.org/), [TailwindCSS](https://tailwindcss.com/), and its superset plugin [DaisyUI](https://daisyui.com/) for page creation.

In terms of content management, my experience includes platforms like [Strapi](https://strapi.io/) and [KeystoneCMS](https://keystonejs.com/). However, I'm inclined to explore other headless CMS options as recommended on the [Astro CMS integration page](https://docs.astro.build/en/guides/cms/), with a particular interest in [FrontMatter](https://frontmatter.codes/) for two main reasons:

1. **Cost-Effectiveness**: My preference is to avoid the expenses associated with CMS solutions or server hosting, as required by Strapi, Keystone, or WordPress.
2. **Familiar Documentation Process**: I'm accustomed to documenting my projects using [Markdown](https://www.markdownguide.com/).

FrontMatter provides a streamlined structure for blog posts within the Astro and VSCode ecosystem, enhancing markdown file support. This integration facilitates a recognized workflow for creation, augmented by a VSCode plugin for markdown file management.

Leveraging this technology blend, I can craft a unique web blog, unbound by common visual identities. This freedom allows for the development of a distinctive system design, fostering the enhancement of my frontend and UI design skills. While the focus may shift from frontend topics, I will also delve into my experiences as a backend and blockchain developer. Additionally, I pretend to explore various techniques in infrastructure, cloud solutions, and general architectural designs.

## Exploring Astro and first impressions

<img src="/icons/astro.svg" class='w-24'  />

[Astro](https://astro.build/) is an denominates itself as the web framework for content-driven websites, like blogs, e-commerce, and more, in it's home page.

> To see how you start with astro, [check this out](https://docs.astro.build/en/install-and-setup/)

Also, plus it's own Astro template engine, it provides integration with other well known web [UI libraries](https://docs.astro.build/en/guides/integrations-guide/#official-integrations:~:text=maintained%20by%20Astro.-,UI%20Frameworks,-%40astrojs/alpinejs), like [React](https://react.dev/) and [Vue](https://vuejs.org/), that are well know to have a ecosystem of libraries to build up complex interface, as also [Markdown](https://www.markdownguide.com/) support to render and generate html pages, like this [whole page](https://yang.dev.br) you are reading right know.

> For the markdown usage you may want to check the [Markdoc](https://docs.astro.build/en/guides/integrations-guide/markdoc/) and [MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/) integration guides.

Also, it's gives some support for dynamic routing when you want, or need, but it's need to be deployed with a server, and for now, i'll not go with it, as i pretend to deploy it in the [GitHub Pages](https://pages.github.com/) infrastructure, and for this, it's must to be setup with the `output: 'static'` as [shown in the docs](https://docs.astro.build/en/reference/configuration-reference/#output). The other options are the `server` and `hybrid` output targets, that seems to be good if you what to deploy and use the dynamic routing mechanism, as well described in the `Rendering Modes` section.

> You may want to check the [SSR adapters](https://docs.astro.build/en/guides/integrations-guide/#official-integrations:~:text=%40astrojs/vue-,SSR%20Adapters,-%40astrojs/cloudflare) to start to use [dynamic routes](https://docs.astro.build/en/guides/routing/#dynamic-routes) and server side integration.

Another amazing out of the box integration _"not so skilled"_ frontend developers like me, but likes to implement well presented UI interfaces, is the [TailwindCSS](https://tailwindcss.com/). It's a utility-first CSS framework that turns easier to turn your HTML beauty. Different from old well known CSS Frameworks like [Materialize UI](https://materializecss.com/) and [Bootstrap](https://getbootstrap.com/), it not give us the prepared components, it give us some class aliases to a lot of lines of CSS the we should write.

The cool part, at least for me, is that it should be defined directly in the `class` attribute of your HTML tag, or `className` of your JSX component if you use React.

> Check this steps if you want to enable [Tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

With freedom, sometimes it give us work, so for this blog i will use the TailwindCSS plugin called [DaisyUI](https://daisyui.com/), a project that helped me a lot when i started to right my firsts [NextJS](https://nextjs.org/) apps and when some UI complexities were not needed. For this blog, i am using the `forest` theme, that easily gives me a beautiful components out of the box to use and adapt with Tailwind classes.

## Writting my experiences with FrontMatter

As said earlier, i want to write my articles using a easy and well know notation, like Markdown, and Astro already gives me some support.

> There are a lot of options, many of them paid or server side needed. You can check the [CMS Guides](https://docs.astro.build/en/guides/cms/) to check what suits you more.

But some functionalities, like taxonomy definitions and define a blog structure is also need if you want to provide a well experience for your user. Looking [on the guides](https://docs.astro.build/en/guides/cms/frontmatter-cms/) i discovered the [Front Matter CMS](https://frontmatter.codes/), another out of the box good integration that at this firsts moments i like. It's provides me a [VSCode](https://code.visualstudio.com/) plugin that provides many resources to write and organize my posts.

Also, Astro has the concept of [Content Collections](https://docs.astro.build/en/guides/content-collections/), and Front Matter integrates very well with it.

> The author of this framework provides a well explanation about how to use it in the [Getting Started](https://frontmatter.codes/docs/getting-started#overview)

## Styling my Journey's Blog

As said earlier, the base of my styling for this blog are the [TailwindCSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/). But here are some interesting resources i discovered to share with you:

> Some of logo images becomes from [HeroIcons](https://heroicons.com/), a project from the makers of TailwindCSS.

> The circuit pattern becomes from [HeroPatterns](https://heropatterns.com/), also from TailwindCSS makers

> The gradient colors were build with support of [Hypercolor](https://hypercolor.dev/)

By end, logotype concept where build with some help of the [Microsoft Edge Copilot](https://www.microsoft.com/en-us/edge/features/copilot?form=MA13FJ), and where improved manually using [Inkscape](https://inkscape.org/).

[<img src="/favicon.svg" class='w-24 h-24' />](favicon.svg)

As fonts, i am using the [Google Fonts](https://fonts.google.com/) i found the i thought passes some impressions of a Developer person, and little kidding reference with my name =P

## Launching it to the skies with GitHub Pages

The first deployment were using the tutorial for the [GitHub Pages](https://pages.github.com/) exposes, by defining the [yangricardo.github.io](https://github.com/yangricardo/yangricardo.github.io) repository to test how it works, that were before i adopted Astro. When i adopted astro i had to adopt the [GitHub Actions](https://github.com/features/actions) by following the [Astro Github deployment documentation](https://docs.astro.build/en/guides/deploy/github/)

Also, as i am using my custom domain for <https://yang.dev.br> acquired and managed with [Registro BR](https://registro.br/), i needed to follow some steps, as described in the [docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site):

1. [Verifying my custom domain for github pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
2. [Managin my custom domain for the github pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

> The great part of this, is the HTTPS is self configured by GitHUB pages. I'll show you how to setup this in some moment with [Docker](https://www.docker.com/) and [Traefik](https://doc.traefik.io/traefik/)
