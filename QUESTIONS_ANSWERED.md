## Please answer the following questions once you finish codding:

A) Describe the strategy used to consume the API endpoints and the data management.

- API was consumed in the simplest way. First of all I queried the first API (Cocktail_glass) the get the main
  information, then I requested the details for each of the cocktails using the Id.

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?

- The library I used for routing is named `react-navigation` [check here](https://reactnavigation.org/). This library is easy to use and quite straight forward to setup also is highly used and have great support, other than that is what `React Native docs` recommends. I would use it for large applications without any complication.

C) Have you used any strategy to optimize the performance of the list generated for the first feature?

- The first strategy I used was implemeting `FlatList` over `ScrollView` due to `FlatList` component gives a better render performance when rendering lists, other than that, I implemented `getItemLayout`property to enhance a bit more the performance by allowing skipping the measurement of each Card rendered inside the `FlatList`.

D) Would you like to add any further comments or observations?

- Interesting challenge full of tricks by how API is designed.
