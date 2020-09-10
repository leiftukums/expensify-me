//SET_TEXT_FILTER Action

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE Action
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SORT_BY_AMOUNT Action

export const sortByAmount = (amount) => ({
    type: 'SORT_BY_AMOUNT'
});

//SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});