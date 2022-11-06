# Hometask-integration-testing-on-FE

## 1st Hometask
This is the 1st hometask of QA Automation Bootcamp

## How to install the project and run the tests

Please follow the below instructions to run this project in your computer:

1. Clone this repository

   ```sh
   git clone https://github.com/nayma5/hometask-integration-testing-on-FE.git
   ```
2. Use below commands in your terminal to install all dependencies
    
   ```sh
   yarn install
   ```
   And
   ```sh
   yarn add --dev jest
   ```
   And
   ```sh
   yarn add --dev babel-jest @babel/core @babel/preset-env
   ```

3. Now update your package.json with:

    ```sh
    "scripts":
    {
    "test": "jest"
    },
    "jest": {
    "moduleFileExtensions": [
      "js"
    ]
    },
    "type": "module"
    ```

4. To see the test result, run below command in your terminal
   ```sh
   yarn test
   ``` 



    