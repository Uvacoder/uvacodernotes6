# abort on errors
# set -e

# build
vuepress build

# navigate into the build output directory
cd /.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:polcius/coding-notes-vuepress.git master:gh-pages

cd - 

