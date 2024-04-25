<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      fill="url(#pattern0_825_498)"
    />
    <defs>
      <pattern
        id="pattern0_825_498"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlink:href="#image0_825_498"
          transform="scale(0.0416667)"
        />
      </pattern>
      <image
        id="image0_825_498"
        width="24"
        height="24"
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAC0SURBVEiJ7dWxCkFRAIfx7950B5llvQvlHRgMeASLVzF5QAZSZjKSwWD4DBRuWM65pfiPZ/h9dTp14Oem5upcXaqt2Hiqrr1vEzWiZurB50WPDNVT2ZH+i8hObceMDH4jkqhTYAQkAZ0GUC2cbYFeop6BSgD+aasUsCQcuF7RBBgDaYBTB2qFsy3QCzCvUzvqsZSX9Mff4d0y8UzdF/CN2gzGb4FXH04c/CGSqzN1ER3/yl0ATTCRVV25kfwAAAAASUVORK5CYII="
      />
    </defs>
</svg>

</template>

<script>
export default {
  props: {
    size: { type: [String, Number], default: 19 },
    color: { type: String, default: '#373737' },
    colorHover: { type: String },
  },
};
</script>
