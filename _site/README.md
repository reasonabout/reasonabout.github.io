# reasonabout.github.io

## How do you contribute to this blog?

1. Clone the repo (as a member of this organization, you should have write privileges)
2. Open the `_posts` directory
3. Create a new .md file and name it like this: `YYYY-MM-DD-in-name-of-post`, where you replace "in" with your initials
3. Copy/paste YAML front matter from an existing post into your new file (meta info at the top of the file)
4. Update YAML front matter values
7. Write something interesting
8. At the bottom of your post, include a bio with a link to your personal site
9. cd into the reasonabout repo
10. `sudo gem install jekyll` (make sure you have ruby installed)
11. `jekyll serve` (This step is REQUIRED to transpile the markdown into markup)
12. Add, commit, and push to the master branch (this will publish your post and send out a tweet from @reasonabout_co)
 
## Adding images or documents to your post?

1. Create a directory inside of the "assets" directory and name it with your initials
2. Organize your files by year and month (see "ek" directory for an example)
3. Use absolute links to access your files:

    `/assets/ek/my-file.jpg`
