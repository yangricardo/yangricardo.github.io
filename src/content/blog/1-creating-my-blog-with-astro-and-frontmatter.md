---
layout: ../../components/BlogPostLayout.astro
title: 1.Creating my blog with Astro and FrontMatter
pubDate: 2024-06-26T18:10:07.145Z
type: default
slug: 1-creating-blog-astro-frontmatter
---

# Starting my professional page and blog with Astro and FrontMatter

Hi, i'm [Yang](https://www.linkedin.com/in/yangricardo/) and i'm a Software Developer at [ECOA PUC-Rio](https://www.linkedin.com/company/ecoapucrio/mycompany/), and i'd like to share my thoughts and knowledge with you.

The idea of this whole page is to present you a little bit of my experience with software development, my process and technical skills and some of technology i used in my daily life as a Full Stack developer and blockchain researches and other side or freelancing projects.

In this first post i'll show you how to create a blog with Astro and FrontMatter, that will be the base of this current page and i'll be using it as a template for future posts.

## What i'll do

First of all, the idea is to create simple static page that could be deployed in a GitHub Page, looking for some frontend frameworks, i discovered [Astro](https://astro.build/), that disposes from interesting capabilities as its . As a frontend developer, i usually use [React](https://pt-br.react.dev/) and [Next.js](https://nextjs.org/), but i want to explore Astro to see what i can do with it and reduce some complexity that React frontend applications have.

As previous technologies learned, i'll use [Typescript](https://www.typescriptlang.org/), [TailwindCSS](https://tailwindcss.com/) and i'ts superset plugin [DaisyUI](https://daisyui.com/), that i'll use to create my pages.

To handle the content creation, i had some experiences with [Strapi](https://strapi.io/) and [KeystoneCMS](https://keystonejs.com/) as CMS platforms, i also could go to use other headless solutions as exposed at [Astro CMS integration page](https://docs.astro.build/en/guides/cms/) suggests, but i wanted to have a little bit of experience with [FrontMatter](https://frontmatter.codes/). There is two main reasons to it:

1. Price: I don't want to pay for a CMS solution or hosting a server, like Strapi and Keystone, or even a Wordpress.
2. Markdown Documentation: I have already the habit to document my projects with [Markdown](https://www.markdownguide.com/).

With it, FrontMatter emerges as a way to create a simple structure for my blog posts to complement the Astro ecosystem, as it already has support for markdown files, but with FrontMatter, i also have a well known flow for create and VSCode plugin to help me with the markdown files creation.

Also, with this combo of technologies, i'll be able to create a web blog that will not have a common visual identity, giving me free to create a system design and enabling to improve this aspect of my frontend and UI design skills. Note that other posts may note focus on frontend, i'll also share with you some of my projects and approaches i adopted as backend and blockchain developer, and sometimes, infrastructure and cloud and solutions architectures technics in general.

```json
{
  "teste": "yoo"
}
```

```java
class Teste {
  public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}
```

```typescript
class Teste {
  constructor(name: string) {
    this.name = name;
  }
}
```

> This is a blockquote

- This is a list item
- This is a list item

## Thanks for reading

If you liked this post, i'd like to thank you for reading my blog, i'm still working on it, and i'll be updating `this post with` new information and new approaches.
