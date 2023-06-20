# Nextjs13 Carousel Horizontal Slider with react_slick

- First of all create Nextjs app

```
    npx create-next-app@latest
```

- Install react-slick

```
    npm i react-slick
    npm install react-slick --save
    npm install slick-carousel
```

- After runing above command import CSS files in component where you'll use carousel

```
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
```

- import below library

```
    import Slider from "react-slick";
```

- Create setting varible in component where you want to use slider

```
     var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable:true,
        arrows:false,
      };
```

- Now add Slider tag in your component

```
    <Slider  {...settings} >
             <div >
             <Image alt="" src={pic1}/>
             </div>
             <div>
             <Image alt="" src={pic2}/>
             </div>
             <div>
             <Image alt="" src={pic3}/>
             </div>
    </Slider>
```

React Slick Slider is implemented but if you want to add Mouse Scroll effect on slider
then follow below instructions

- We'll use to React Hooks useEffect, useRef

```
    import { useEffect, useRef } from "react";
```

- Add below fcode snippet in your component before return

```
     const slider = useRef<Slider>(null);

      function scroll(e: WheelEvent){
          if (slider === null)
              return 0;
        if(slider.current){
            e.deltaY > 0 ? (
                slider.current.slickNext()
            ) : (
                slider.current.slickPrev()
            );
        }
      };
      useEffect(() => {
          window.addEventListener("wheel", scroll,true);
          return () => {
              window.removeEventListener("wheel", scroll, true);
          };
      }, []);
```

- In Slider tag you also have to add ref={slider}

```
    <Slider {...settings} ref={slider}>
     ...
     </Slider>

```

Now you can slide your items through mouse scroll wheel
