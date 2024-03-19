let allWainwrights;
const wainwrightList = document.querySelector('#wainwrights-list');

const getAllWainwrights = async ()=>{
    const response = await fetch(`https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json`)
    const jsonData = await response.json();
    // console.log(jsonData);
    allWainwrights = jsonData;
    // console.log(allWainwrights[0]); 
};



getAllWainwrights();



