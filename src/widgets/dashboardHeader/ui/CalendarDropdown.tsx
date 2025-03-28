import { FunctionComponent, useState, useRef, useEffect } from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import ArrowFullDown from '@/assets/images/ArrowDown.svg';

export type DateRangePickerProps = {
  className?: string;
  iconArrowFullDown?: string;
  title?: string;
  onChange?: (startDate: string, endDate: string) => void;
};

const DateRangePicker: FunctionComponent<DateRangePickerProps> = ({
  className = '',
  iconArrowFullDown,
  title = 'Период:',
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isLessThan1280 = useMediaQuery('(max-width:1279px)');
  const isMobile = useMediaQuery('(min-width:480px)');

  // Helper function to format date in Russian format (DD.MM.YYYY)
  const formatRussianDate = (date: Date): string => {
    return format(date, 'dd.MM.yyyy', { locale: ru });
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start && end && onChange) {
      const formattedStartDate = formatRussianDate(start);
      const formattedEndDate = formatRussianDate(end);
      onChange(formattedStartDate, formattedEndDate);
      setIsOpen(false);
    }
  };

  const getDisplayText = () => {
    if (startDate && endDate) {
      return `${formatRussianDate(startDate)} - ${formatRussianDate(endDate)}`;
    } else if (startDate) {
      return `${formatRussianDate(startDate)} - ...`;
    } else {
      return 'Выберите диапазон дат';
    }
  };

  // Custom header for the DatePicker with Russian month names
  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => {
    // Capitalize first letter for Russian month
    const formattedDate = format(date, 'LLLL yyyy', { locale: ru });
    const capitalizedMonth =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    return (
      <div className="flex items-center justify-between px-2 py-2">
        <button
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
          type="button"
          className="inline-flex p-1 text-white hover:text-gray-300 focus:outline-none bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <h2 className="text-white font-medium">{capitalizedMonth}</h2>

        <button
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
          type="button"
          className="inline-flex p-1 text-white hover:text-gray-300 focus:outline-none bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    );
  };

  // Helper for translating day names to Russian
  const formatWeekDay = (dayName: string) => {
    const russianDayMap = {
      Mo: 'Пн',
      Tu: 'Вт',
      We: 'Ср',
      Th: 'Чт',
      Fr: 'Пт',
      Sa: 'Сб',
      Su: 'Вс',
    };

    // Get first two letters and check in map
    const shortDay = dayName.substring(0, 2);
    return russianDayMap[shortDay] || dayName.substring(0, 1).toUpperCase();
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

  const customStyles = `
    .react-datepicker {
      background-color: #1a111d;
      border: 1px solid #3A3D4F;
      border-radius: 0.5rem;
      font-family: inherit;
      width: 280px;
      max-width: 100%;
    }
    
    .react-datepicker__month-container {
      width: 100%;
    }
    
    .react-datepicker__header {
      background-color: #1a111d;
      border-bottom: 1px solid #3A3D4F;
      padding-top: 8px;
    }
    
    .react-datepicker__day-names {
      display: flex;
      justify-content: space-around;
      margin-top: 8px;
    }
    
    .react-datepicker__day-name {
      color: #9DA7B1;
      width: 30px;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-size: 12px;
    }
    
    .react-datepicker__month {
      margin: 0;
      padding: 0;
    }
    
    .react-datepicker__week {
      display: flex;
      justify-content: space-around;
    }
    
    .react-datepicker__day {
      color: white;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      font-size: 13px;
    }
    
    .react-datepicker__day:hover {
      background-color: rgba(58, 61, 79, 0.7);
      border-radius: 50%;
    }
    
    .react-datepicker__day--selected,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-range {
      background-color: #3A3D4F;
      color: white;
    }
    
    .react-datepicker__day--keyboard-selected {
      background-color: #3A3D4F;
    }
    
    .react-datepicker__triangle {
      display: none;
    }
    
    .react-datepicker__navigation-icon {
      display: none;
    }
    
    .react-datepicker__navigation:hover *::before {
      border-color: transparent;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <Box
        ref={dropdownRef}
        className={`relative rounded-3xs bg-[#1a111d] flex flex-row items-center justify-between cursor-pointer ${className}`}
        sx={{
          width: isLessThan1280 ? '280px' : '350px',
          height: '41px',
          px: { xs: 2, sm: 3, md: 4 },
          py: 0,
          fontSize: { xs: '14px', md: '16px' },
          transition: 'all 0.3s ease',
        }}
        onClick={handleToggle}
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
            {getDisplayText()}
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
            className="absolute z-50 left-0 top-full mt-1"
            sx={{
              width: 'auto',
              maxWidth: isLessThan1280 ? '280px' : '300px',
            }}
            onClick={e => e.stopPropagation()}
          >
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              locale={ru}
              renderCustomHeader={renderCustomHeader}
              monthsShown={1}
              showWeekNumbers={false}
              fixedHeight
              formatWeekDay={nameOfDay => formatWeekDay(nameOfDay)}
              calendarClassName="full-width-calendar"
              dateFormat="dd.MM.yyyy"
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default DateRangePicker;
