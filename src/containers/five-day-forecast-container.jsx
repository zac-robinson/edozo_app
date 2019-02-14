import { connect } from 'react-redux';

import ExpandedForecast from '../components/expanded-forecast-component';

export const mapStateToProps = ({
  selectedCity,
  forecastDataByCity,
  dateIndex
}) => {
  return {
    dateIndex,
    expandedForecast: forecastDataByCity[selectedCity],
    isLoading: forecastDataByCity.isLoading
  };
};

export default connect(mapStateToProps)(ExpandedForecast);
