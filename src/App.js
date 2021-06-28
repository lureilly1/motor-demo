import Grid from '@material-ui/core/Grid';
import HeaderSection from './components/HeaderSection'
import FilterSection from './components/FilterSection'
import { CurrentSelections, Bar } from '@motor-js/core';

const App = () => {

  return (
     <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeaderSection />
        </Grid>
        <Grid item xs={12}>
          <CurrentSelections maxHeight={'45px'} minHeight={'45px'}/>
        </Grid>
        <Grid item xs={12}>
            <FilterSection />
        </Grid>
        <Grid item xs={12}>
        <Bar
          height={550}
          cols={[
            { qField: 'Company Name', qLabel: 'Company' },
            { qField: '=Sum(Quantity)', qLabel: 'Quantity'},
          ]}
        />
        </Grid>
      </Grid>
  )
}

export default App