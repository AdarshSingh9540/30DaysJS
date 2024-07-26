console.log("adarsh singh")

// const mess = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Hi guys")
//     },5000)
// })

// console.log(mess);
// mess.then(message => console.log(message));


// const mess = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("Something went wrong!"));
//     }, 2000);
// });

// console.log(mess); 

// mess
//     .then(message => console.log(message)) 
//     .catch(error => console.log("Error:", error.message)); 


    const firstPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("First promise resolved");
            resolve("First result");
        }, 1000);
    });
    
    const secondPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Second promise resolved");
            resolve("Second result");
        }, 3000);
    });
    
    const thirdPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Third promise resolved");
            reject("Third result");
        }, 2000);
    });
    

    // firstPromise.then(res =>{
    //     console.log(res)
    //     return thirdPromise;
    // })
    // .then((res)=>{
    //     console.log(res)
    //     return secondPromise
    // })
    // .then((res)=>{
    //     console.log(res)
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })


     

    // Promise.race([firstPromise, secondPromise, thirdPromise])
    // .then(results => {
    //     console.log('All promises resolved', results);
    // })
    // .catch(error => {
    //     console.error('Promise rejected with error:', error);
    // });

    // Promise.all([firstPromise, secondPromise, thirdPromise])
    // .then(results => {
    //     console.log('All promises resolved', results);
    // })
    // .catch(error => {
    //     console.error('Promise rejected with error:', error);
    // });

    async function handlePromises() {
        try {
            const firstResult = await firstPromise;
            console.log(firstResult);

            const secondResult = await secondPromise;
            console.log(secondResult);
    
            const thirdResult = await thirdPromise;
            console.log(thirdResult);
    
        } catch (error) {
            console.error('Promise rejected with error:', error);
        }
    }
    
    handlePromises();