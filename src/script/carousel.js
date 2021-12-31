var slider = tns({
  container: ".my-slider",
  items: 1,
  gutter: 20,
  slideBy: 1,
  center:true,
  swipeAngle:false,
  speed:400,
  controlsPosition: "bottom",
  loop:true,
  navPosition: "bottom",
  mouseDrag: true,
  autoHeight:true,
  autoplay: true,
  autoplayButtonOutput: false,
  controlsContainer: "#custom-control",
  responsive: {
      0: {
          items: 1,
      },
      768: {
          items: 2,
      },
      1440: {
          items: 2,
      }
  },
});