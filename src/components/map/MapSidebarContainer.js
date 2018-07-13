import Sidebar from 'components/Sidebar/Sidebar'
import {searchNearby} from '../../utils/googleApiHelpers'

export class MapSidebarContainer extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      places: [],
      pagination: null
    }
  }
	onReady(mapProps, map) {
    const {google} = this.props;
    const opts = {
      location: map.center,
      radius: '500',
      types: ['taco star']
    }
    searchNearby(google, map, opts)
      .then((results, pagination) => {
        this.setState({
          places: results,
          pagination
        })
      }).catch((status, result) => {
        // There was an error
      })
  }
  render() {
    return (
			<div>
        <Map
          visible={false}
          className={styles.wrapper}>
          <Header />
          <Sidebar
            title={'Restaurants'}
            places={this.state.places}
            />
          {/* contents */}
        </Map>
      </div>
    )
  }
}