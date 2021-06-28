import Grid from '@material-ui/core/Grid';
import HeaderSection from './components/HeaderSection'
import { CurrentSelections, Filter, Bar } from '@motor-js/core';

const App = () => {

  return (
     <Grid container spacing={3} >
        <Grid item xs={12}>
          <HeaderSection />
        </Grid>
        <Grid item xs={12}>
          <CurrentSelections />
        </Grid>
        <Grid item xs={12}>
          <Filter dimension={['Company Name']} label={'Company'} />
          <Filter dimension={['Category']} label={'Category'} />
        </Grid>
        <Grid item xs={12}>
          <Bar 
            height={550}
            cols={[
              { qField: 'Company Name', qLabel: 'Company' },
              { qField: '=Sum(Quantity)', qLabel: 'Quantity' },
            ]} 
          />
        </Grid>
      </Grid>
  )
}

export default App