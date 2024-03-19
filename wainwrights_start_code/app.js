let allWainwrights;
const wainwrightList = document.querySelector('#wainwrights-list');
const form = document.querySelector('form');


const getAllWainwrights = async ()=>{
    const response = await fetch(`https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json`)
    const jsonData = await response.json();
    // console.log(jsonData);
    allWainwrights = jsonData;
    renderWainwrights(allWainwrights);
    // console.log(allWainwrights[0]); 
};

//function that does wainwright populating + formatting for ALL of the wainwrights 
const renderWainwrights = (json) =>{
    for(let wainwright of json){
        // console.log(wainwright);
        formatWainwright(wainwright);
    }
};

//function that populates wainwright list with an li formatted with with the wainwright info
const formatWainwright = (wainwright) =>{
    //creating the HTML Elements
    const ListItem = document.createElement('li');
    const name = document.createElement('h2');
    const height = document.createElement('h3');
    const areaName = document.createElement('p');
    const areaAbout = document.createElement('p');

    //populating the HTML elements
    name.innerText = wainwright.name;
    height.innerText = 'height: ' + wainwright.heightMetres;
    areaName.innerText = 'In ' + wainwright.area.areaName;
    areaAbout.innerText = '(' + wainwright.area.about + ')';

    //appending HTML elements to the List item
    ListItem.appendChild(name);
    ListItem.appendChild(height);
    ListItem.appendChild(areaName);

    //appending List Item to the Main wainwright list element already in the HTML file
    wainwrightList.appendChild(ListItem);
    wainwrightList.appendChild(areaAbout);

}

// event listener for the form 
form.addEventListener("submit",(evt)=>{

    //Preventing reloads
    evt.preventDefault();
    //storing the input
    let writing = evt.target['input'].value;

    //emptying the list
    wainwrightList.innerHTML = '';

    //populating the list with only mountains that include the input 
    for(let wainwright of allWainwrights){
        if(wainwright.name.toLowerCase().includes(writing.toLowerCase())){
            formatWainwright(wainwright);
        };
    }

    // console.log(writing);
})

getAllWainwrights();



