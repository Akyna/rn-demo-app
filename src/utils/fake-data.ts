import {faker} from '@faker-js/faker';

import {IListItem} from '../screens/list';

//
//

const LIST_DATA: IListItem[] = [];

for (let index = 0; index < 1500; index++) {
  const price = faker.commerce.price();
  const priceInt = parseFloat(faker.commerce.price());

  LIST_DATA.push({
    id: index.toString(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: price,
    salePrice: faker.helpers.maybe(
      () => faker.commerce.price(priceInt * 0.5, priceInt * 0.9),
      {probability: 0.1},
    ),
    brand: faker.company.name(),
  });
}

export default LIST_DATA;
