# NodeJS

# Package Symlink

- We can link a package to a local copy of it in our `node_modules` folder with `yarn link`. This is useful for making changes to packages and for package development. In VSCode, the symlinks are indicated by a small arrow next to the folder. The symlink will have effect on all branches and will only be removed if we explictely remove it or if we `rm rf` the `node_modules` folder.