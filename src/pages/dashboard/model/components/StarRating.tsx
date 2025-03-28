import { Box, Rating } from '@mui/material';
import { FunctionComponent, createElement } from 'react';

export type RatingComponentType = {
  className?: string;
};

// Custom star SVG as a string - reduced size for medium stars
const starSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>`;

const RatingStars: FunctionComponent<RatingComponentType> = ({}) => {
  // Create icon elements with the desired colors
  const filledIcon = createElement('span', {
    dangerouslySetInnerHTML: {
      __html: starSvg.replace('<svg', '<svg fill="#FFB400"'),
    },
  });

  const emptyIcon = createElement('span', {
    dangerouslySetInnerHTML: {
      __html: starSvg.replace('<svg', '<svg fill="white"'),
    },
  });

  return (
    <Box
      className={`absolute top-[204px] left-[32px] mt-[15px] w-auto h-10 flex flex-row items-start justify-start gap-1`}
    >
      <Rating
        className="relative"
        size="medium" // Changed from large to medium
        name="simple-uncontrolled"
        defaultValue={8} // Updated default value, adjust as needed
        max={10} // Set maximum number of stars to 10
        icon={filledIcon}
        emptyIcon={emptyIcon}
        readOnly={true}
        sx={{
          fontSize: '34px', // Adjusted font size for medium stars
        }}
      />
    </Box>
  );
};

export default RatingStars;
