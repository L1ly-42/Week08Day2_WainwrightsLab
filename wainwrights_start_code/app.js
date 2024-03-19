
const getAllWainwrights = async ()=>{
    const response = await fetch(`https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json`)
    const jsonData = await response.json();
    return jsonData;
};