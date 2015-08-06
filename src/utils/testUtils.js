import React from 'react/addons'

export function renderShallowTree (tree) {
  const renderer = React.addons.TestUtils.createRenderer()
  renderer.render(tree)
  return {renderer, output: renderer.getRenderOutput()}
}
