# ThreeJS

- Good examples:
  - [FPP](https://www.fpp.net/)
- Render to a `canvas` element.
- Geometry + Material => Add to a mesh
- We always have:
  - Renderer
  - Camera: from where we will watch the scene.
  - Controls
  - Lights
  - Scene: we will add all the elements here, all the _actors_.
- Functions:

  - init(): we will set up our scene
  - animate(): to respond to changes. Usually will have two elements:

  ```js
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
  }
  ```

  - render(): just tells our renderer to render the scene.
  - onWindowResize(): we need to have a handler function for when the window is resized, otherwise it will break on resize.

- [Demo](https://codepen.io/sdras/collab/b33683af84df0f416da2ba0fd2f30472)
