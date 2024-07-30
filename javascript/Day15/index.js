function outerFunction(x) {
    return function() {
      console.log(x);
    };
  }
  
  const innerFunc = outerFunction(5);
  innerFunc(); 

  function createCounter() {
    let count = 0;
    return {
      increment: function() {
        count++;
      },
      getValue: function() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  counter.increment();
  counter.increment();
  counter.increment();
  counter.increment();
  console.log(counter.getValue()); 

  function createIdGenerator() {
    let lastId = 0;
    return function() {
      lastId++;
      return lastId;
    };
  }
  
//   const generateId = createIdGenerator();
//   console.log(generateId()); 
//   console.log(generateId()); 

//   function createGreeter(name) {
//     return function() {
//       console.log(`Hello, ${name}!`);
//     };
//   }
  
//   const greetAlice = createGreeter("adarsh");
//   greetAlice(); 

  function createGreeter(name) {
    return function() {
      console.log(`Hello, ${name}!`);
    };
  }
  
  const greetAlice = createGreeter("Alice");
  greetAlice(); 


  function createFunctions() {
    const functions = [];
  
    for (let i = 0; i < 5; i++) {
      functions.push(function() {
        console.log(i);
      });
    }
  
    return functions;
  }
  
  const funcArray = createFunctions();
  funcArray[0](); 
  funcArray[3](); 


  const itemManager = (function() {
    const items = [];
  
    return {
      addItem: function(item) {
        items.push(item);
      },
      removeItem: function(item) {
        const index = items.indexOf(item);
        if (index > -1) {
          items.splice(index, 1);
        }
      },
      listItems: function() {
        return [...items];
      }
    };
  })();
  
  itemManager.addItem("apple");
  itemManager.addItem("banana");
  console.log(itemManager.listItems())
  itemManager.removeItem("apple");
  console.log(itemManager.listItems()); 

