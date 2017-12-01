import React from 'react'

const Link = ({
  color = '#444',
  height = 24,
  width = 24,
}) => (
  <svg viewBox="0 0 24 24" width={width} height={height}>
    <g className="nc-icon-wrapper" fill={color}>
      <path d="M11.864 16.378a3.914 3.914 0 0 1-1.124 2.468l-2 2a3.956 3.956 0 0 1-5.586 0 3.954 3.954 0 0 1 0-5.586l2-2a3.916 3.916 0 0 1 2.468-1.124l1.816-1.816c-1.974-.51-4.155-.017-5.698 1.527l-2 2a5.956 5.956 0 0 0 0 8.414C2.9 23.42 4.424 24 5.947 24s3.047-.58 4.207-1.74l2-2c1.543-1.543 2.036-3.724 1.527-5.698l-1.817 1.816zM16.378 11.864a3.914 3.914 0 0 0 2.468-1.124l2-2a3.956 3.956 0 0 0 0-5.586 3.954 3.954 0 0 0-5.586 0l-2 2a3.916 3.916 0 0 0-1.124 2.468L10.32 9.438c-.51-1.974-.017-4.155 1.527-5.698l2-2a5.956 5.956 0 0 1 8.414 0C23.42 2.9 24 4.424 24 5.947s-.58 3.047-1.74 4.207l-2 2c-1.543 1.543-3.724 2.036-5.698 1.527l1.816-1.817z" />
      <path data-color="color-2" d="M7.586 15l7.413-7.414L16.414 9 9 16.415z" />
    </g>
  </svg>

)

export default Link
