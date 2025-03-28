import { FunctionComponent, useState, useRef, useEffect } from 'react';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import ArrowFullDown from '@/assets/images/ArrowDown.svg';

export type DropdownProps = {
  className?: string;
  iconArrowFullDown?: string;
  title?: string;
  options?: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
};

const Dropdown: FunctionComponent<DropdownProps> = ({
  className = '',
  iconArrowFullDown,
  title = '',
  options = ['все'],
  defaultValue = 'все',
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isLessThan1280 = useMediaQuery('(max-width:1279px)');
  const isTablet = useMediaQuery('(min-width:968px)');
  const isMobile = useMediaQuery('(min-width:480px)');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle window resize to close dropdown when resizing
  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <Box
      ref={dropdownRef}
      onClick={handleToggle}
      className={`relative rounded-3xs bg-[#1a111d] flex flex-row items-center justify-between cursor-pointer ${className}`}
      sx={{
        width: isLessThan1280 ? '280px' : '350px',
        height: '41px', // Fixed height to match original 41px
        px: { xs: 2, sm: 3, md: 4 },
        py: 0, // Removing padding-y to ensure exact height
        fontSize: { xs: '14px', md: '16px' },
        transition: 'all 0.3s ease',
      }}
    >
      <Box
        className="relative flex items-center"
        sx={{
          tracking: '-0.3px',
          lineHeight: '20px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: '90%',
        }}
      >
        <Typography
          variant="inherit"
          component="span"
          sx={{
            fontSize: 'inherit',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>
        <Typography
          className="text-white ml-1"
          variant="inherit"
          component="span"
          sx={{
            fontSize: 'inherit',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {selectedValue}
        </Typography>
      </Box>
      <img
        className={`relative overflow-hidden shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        style={{
          width: isMobile ? '13px' : '11px',
          height: isMobile ? '7.8px' : '6.6px',
        }}
        alt=""
        src={iconArrowFullDown || ArrowFullDown}
      />

      {isOpen && (
        <Box
          className="absolute z-50 left-0 top-full mt-1 bg-[#1a111d] border border-[#3A3D4F] rounded-lg"
          sx={{
            width: isLessThan1280 ? '280px' : '350px',
            maxHeight: { xs: '200px', md: '250px' },
            overflowY: 'auto',
          }}
        >
          {options.map((option, index) => (
            <Box
              key={index}
              className={`hover:bg-darkslategray cursor-pointer ${
                selectedValue === option
                  ? 'bg-darkslategray text-white'
                  : 'text-[#9DA7B1]'
              }`}
              sx={{
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 1.5, md: 2.5 },
                fontSize: { xs: '14px', md: '16px' },
                borderBottom:
                  index < options.length - 1
                    ? '1px solid rgba(58, 61, 79, 0.3)'
                    : 'none',
              }}
              onClick={e => {
                e.stopPropagation();
                handleSelect(option);
              }}
            >
              {option}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Dropdown;
