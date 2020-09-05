import React, { useRef } from 'react';
import classes from './ShowMoreLess.module.scss';

const ShowMoreLess = props => {
  const excerpt = useRef();
  const showMoreCTA = useRef();

  const addClass = (theClass) => {
    excerpt.current.classList.add(theClass);
  };

  const removeClass = (theClass) => {
    excerpt.current.classList.remove(theClass);
  };

  const toggleShowMore = () => {
    const linkText = showMoreCTA.current.textContent.toLowerCase();
    let collapsed = excerpt.current.getAttribute('data-collapsed') === 'true';

    if (collapsed) {
      expandSection();
      excerpt.current.setAttribute('data-collapsed', 'false');
    } else {
      collapseSection();
    }

    if (linkText === 'show more +') {
      showMoreCTA.current.textContent = 'Show less -';
      removeClass(`${classes.Hidden}`);
      addClass(`${classes.Visible}`);
    } else {
      showMoreCTA.current.textContent = 'Show more +';
      removeClass(`${classes.Visible}`);
      addClass(`${classes.Hidden}`);
    }
  };

  const collapseSection = () => {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = excerpt.current.scrollHeight;
    
    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function() {
      excerpt.current.style.height = sectionHeight + 'px';
  
      // have the element transition to height: 0
      requestAnimationFrame(function() {
        excerpt.current.style.height = 5 + 'rem';
      });
    });
  
    // mark the section as "currently collapsed"
    excerpt.current.setAttribute('data-collapsed', 'true');
  };
  
  const expandSection = () => {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = excerpt.current.scrollHeight;
  
    // have the element transition to the height of its inner content
    excerpt.current.style.height = sectionHeight + 'px';
  
    // mark the section as "currently not collapsed"
    excerpt.current.setAttribute('data-collapsed', 'false');
  };
  
  return (
    <React.Fragment>
      <div>
        <div>
          <div 
            className={
              `${classes.Hidden} 
               ${props.isLargeExcerpt ? classes.LargeExcerpt : ''} 
               js-excerpt collapsible`
            }
            ref={excerpt}
            data-collapsed="true"
          >
            {props.children}
          </div>
        </div>
      </div>

      <button 
        className={classes.ShowMore}
        data-aos="fade-up" data-aos-delay="100"
        onClick={toggleShowMore}
        ref={showMoreCTA}
      >
        Show more +
      </button>
    </React.Fragment>
  );
};

export default ShowMoreLess;