import React, {useRef, useEffect} from 'react';

type Props = {
  windowHeight: number,
  img: string
}

const Section:React.FC<Props> = ({windowHeight, img}):JSX.Element => {

  const getPageYOffset = ():number => window.pageYOffset;
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const onScroll = () => {
      if (ref.current !== null) {
        const pageY = getPageYOffset();
        const offsetTop = ref.current.offsetTop;
        const scrollY = offsetTop - windowHeight;
        const bgYStart = (pageY > scrollY) ? `${(pageY - offsetTop) * 0.25 }px` : 'top';
        ref.current.style.backgroundPositionY = bgYStart;
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  const style = {
    height: '800px',
    width: '100%',  
    backgroundPositionX: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${img})`
  };

  return (
    <section style={style} ref={ref}>
    </section>
  );
};

export default Section;

