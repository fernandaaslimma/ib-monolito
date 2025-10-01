import { DateUtils } from "react-day-picker";

export default () => ({
  setProps: (state, filter, currentRoute) => {
    if (state.filter && state.filter.currentRoute === currentRoute) {
      return {
        filter: {
          ...state.filter
        }
      };
    } else {
      const { from, range, selectedOption } = filter;
      return {
        filter: {
          ...state.filter,
          from,
          range,
          selectedOption,
          currentRoute
        }
      };
    }
  },
  onChangeOption: (state, selectedOption) => ({
    filter: {
      ...state.filter,
      selectedOption,
      from: "",
      range: {
        from: "",
        to: ""
      }
    }
  }),
  onChangeDateFrom: (state, from) => ({
    filter: {
      ...state.filter,
      from
    }
  }),
  onChangeDateRange: (state, day) => {
    const currentRange = {
      from: state.filter.range.from,
      to: state.filter.range.to
    };
    const range = DateUtils.addDayToRange(day, currentRange);
    return {
      filter: {
        ...state.filter,
        range
      }
    };
  }
});
