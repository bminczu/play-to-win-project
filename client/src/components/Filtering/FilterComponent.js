import react from 'react';
import { DataGrid} from '@material-ui/core'
import { useSelector } from 'react-redux';


const FilterContainer = () => {


return(
<div>

<DataGrid
  filterModel={{
    items: [{ columnField: 'commodity', operatorValue: 'contains', value: 'rice' }],
  }}
/>
    
    </div>
)
    
}

export default FilterContainer