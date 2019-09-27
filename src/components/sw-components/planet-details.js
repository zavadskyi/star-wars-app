import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helper';


const PlanetDetails = (props) => {
    return (
            <ItemDetails {...props}>
              <Record field='name' label='Name' />
              <Record field='population' label='Population' />
              <Record field='diameter' label='Diameter' />
            </ItemDetails>
          );
    }

  const mapMethodsToProps = (swapiService)=>({
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  })

  export default withSwapiService(mapMethodsToProps)(PlanetDetails);