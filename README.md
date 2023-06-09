# react-wiremap

![thumbnail](/thumb.png)

## Getting Started

1. Install dependency:

    ```bash
    npm i react-wiremap
    ```

2. Import the API:

    ```js
    import { wmAPI } from  "react-wiremap";
    ```

3. Access API results:

    ```js
    // . . .
    export  default  function  App() {
    const { entries, pages } = wmAPI(process.env.WIREMAP_API_KEY, null);
    for( let i = 0; i < pages.length, i++ ) {
        const elements = pages[i].elements;
    }
    // . . .
    }
    // . . .
    ```

## Learn More

You can learn more in the [API documentations](https://wirem.app/docs/api/).

## [License](/LICENSE)

This repository is open source. However, please note that this repository is unlicensed. Usage of the API falls under user account terms agreement. Please refer to <https://wirem.app/terms/>
