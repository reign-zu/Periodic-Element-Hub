const btn = document.getElementById("btn");
const search = document.getElementById("searchid");
const info = document.getElementById("info");
const name = document.getElementById("name");
const photo = document.getElementById("photo");

btn.addEventListener('click', () =>{
  
  let value = search.value.toLowerCase();
  
  fetch('periodtb.json')
  .then(res => res.json())
  .then(data => {
    
    data.elements.forEach(element => {
      
    let result = element.name.toLowerCase().includes(value);
    
      if(result){
        info.textContent ="";
        name.textContent = element.name;
        photo.src = element.spectral_img;
        
        info.appendChild(document.createElement("p")).textContent = element.summary;
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Discovered by: </b>"+ element.discovered_by;
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Category: </b>" + element.category;
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Appearance: </b>" + element.appearance;
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Symbol: </b>" + element.symbol;
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Phase: </b>" + element.phase;
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Number: </b>" + element.number;
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Period: </b>" + element.period;
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Atomic Mass: </b>" + element.atomic_mass + "<b> u</b>";
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Density: </b>" + element.density;
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Melting Point: </b>" + element.melt + "<b> K</b>";
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Boiling Point: </b>" + element.boil + "<b> K</b>";
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Molar Heat: </b>" + element.molar_heat + "<b> J</b>";
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Electron Configuration: </b>" + element.electron_configuration;
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Electron Configuration Semantic: </b>" + element.electron_configuration_semantic;
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Shells: </b>" + element.shells;
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Electron Affinity: </b>" + element.electron_affinity;
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Electron Negativity: </b>" + element.electronegativity_pauling;
        
        info.appendChild(document.createElement("p")).innerHTML = "<b>Ionization Energies: </b>" + element.ionization_energies;
        
      }
      
    });
  })
  .catch(error => console.error('JSON Error: ', error));
});
