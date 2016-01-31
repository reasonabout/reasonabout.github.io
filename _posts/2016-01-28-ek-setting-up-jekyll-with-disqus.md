---
layout: post
title:  "Jekyll Blog"
comments: true
date:   2016-01-28 08:15:23 -0700
author: Elana Kopelevich
categories: jekyll
tags: jekyll
---

Creating this blog led me to learn a few things about how to set up a site with Jekyll. It only makes sense that I get meta with my first proper contribution and tell you how I did it.

In this post, I'll cover:

* Installing Jekyll and starting a project
* Navigating around a Jekyll project
* Adding a post


### Getting Started with Jekyll

Here are all five of the steps to setting up a local Jekyll site:

1. If you don't have Ruby installed, install Ruby: `brew install ruby` (OSX)
2. Install Jekyll: `gem install jekyll`
3. Create a Jekyll project locally: `jekyll new my-awesome-site`
4. Navigate into your new project: `cd my-awesome-site`
5. Serve your project locally: `jekyll serve`

You will find your site running at: `http://localhost:4000`.

[Source](https://jekyllrb.com/)

*I'm hosting this site on GitHub pages and redirecting to a custom domain. I'm not going to cover that today, but I will in a future post.*


### Navigating around Jekyll

This is what your project might look like:

![Jekyll Site Structure](/assets/ek/2016/01/jekyll-structure.png)

Keep three things in mind as you start working in your Jekyll project:

1. _Do not edit anything in the \_site directory_
2. _Do not edit anything in the \_site directory_
3. _Do not edit anything in the \_site directory_

The \_site directory is your generated public directory. You generally don't want to mess with generated files.

Okay, now for the rest of the project...

The site generator creates a few very useful directories and files for you:

* \_config.yml - This file contains basic info about your site. Open it up and fill in the blanks. You won't need to edit this one often.
* \_posts directory - This is where you add your posts as markup files. I'll cover that in more detail in the next section
* about.md - This is what is sounds like. Fill this page in with the content for your about page.


### Adding a Post

If you're used to blogging with a rich text editor, you will need to shift your workflow a bit. If you feel uncomfortable whenever you have to leave your text editor or terminal, then this is the platform for you. Jekyll posts are just markup. I'm using markdown, so I'll focus on that, but you can use also HTML or textile (with the proper extensions).

Writing a blog on a Jekyll site is as easy as adding a markup file to the \_posts directory.

A couple things to keep in mind:

* _Your file name matters!_ Start with the date in kebab case (YYYY-MM-DD) and continue with the file name, also connected with dashes. It should look like this:

  `YEAR-MONTH-DAY-title.MARKUP`

  For example:

  `2016-01-27-ek-welcome-to-reason-about.md`

* Also, I'm not sure if I mentioned this before, but you should definitely, never ever edit anything in the \_site directory


#### Inside the file:

The first thing in every one of your posts will be "YAML front matter". This is the metadata about the post and it's really important. This post's front matter looks like this:

![YAML front matter](/assets/ek/2016/01/yaml-front-matter.png)

When you create a new post, make sure to include this section with the appropriate data.


#### Adding images and documents:

When you set up a file, you won't have a default place to store images and files, but the Jekyll docs recommend creating an assets folder. You will need to manually create a file structure inside of it to keep things organized. Our assest folder is organized by contributor, then year, then month.

![YAML front matter](/assets/ek/2016/01/asset-folder.png)

#### Markdown:

As I've mentioned, Jekyll pages and posts are written in markup. If you choose to use markdown to write your markup, you will find a billion resources out there on the internets to help you get started. My personal go-to is [Daring Fireball](https://daringfireball.net/projects/markdown/syntax), but I'll summarize some syntax that is particularly useful for blogging here:

* _Headers_ - Add a hash symbol before your header. The more hashes, the smaller the header...

  * `# This is an H1`
  * `## This is an H2`
  * `### This is an H3`
  * `#### This is an H4`
  <br><br>

* _Lists_ - An asterisk, pluse or hyphen denotes an unordered list item and number denotes an ordered list item...

  * `* something`
  * `* something else`

  1. `1. first thing`
  2. `2. second thing`
  <br><br>

* _Blockquotes_ - Put a ">" before the block of text...   

    `> This is a blockquote. Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.`
    <br><br>

* _Code Blocks_ - Indent every line of the block by at least 4 spaces or 1 tab...

      This is a normal paragraph.

        This is a code block.

<br>

* _Inline Code_ - Wrap inline code with backtick quotes ( \` )...

  <code>`<p>Hello World!</p>`</code>
  <br><br>

* _Links_ - Name the link in single square brackets, adjacent to that, include the href in parentheses...

  `[source](https://jekyllrb.com/)`
  <br><br>

* _Images_ - Add images just like this...   

  `![Alt text](/path/to/img.jpg)`
  <br><br>


Also note that you can escape characters just as you would in HTML. Sometimes you want an underscore to be an underscore. You can also include regular HTML tags if you need to.

[Source](http://jekyllrb.com/docs/posts/)

In summary, do not edit anything in the \_site directory. Also, Jekyll is quite easy to use and pretty cool.


By [Elana Kopelevich](https://github.com/ekopelevich)
