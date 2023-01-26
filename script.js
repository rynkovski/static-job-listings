const mainBody = document.createElement("main");
document.body.appendChild(mainBody)

const containerElement = document.createElement("div");
containerElement.className = "container";
mainBody.appendChild(containerElement)

const barElement = document.createElement("div");
barElement.className = "bar";
containerElement.appendChild(barElement);

const logoElement = document.createElement("div");
logoElement.className = "logo";
containerElement.appendChild(logoElement);

const imgElement = document.createElement("img");
imgElement.src = "./images/photosnap.svg";
imgElement.alt = "logo";
logoElement.appendChild(imgElement);

const companyName = document.createElement("span");
companyName.className = "company-name";
containerElement.appendChild(companyName);

const linkElement = document.createElement("a");
linkElement.href = "#";
linkElement.innerHTML = "Photosnap";
companyName.appendChild(linkElement);

const newJob = document.createElement("span");
newJob.innerHTML = "NEW!";
newJob.className = "new-job";
containerElement.appendChild(newJob);

const featured = document.createElement("span");
featured.innerHTML = "FEATURED";
featured.className = "featured";
containerElement.appendChild(featured);





//     <div class="position-name">Senior Frontend Developer</div>
//     <div class="info">
//         <span class="date">1d ago</span>
//         <span class="contract"> Full Time</span>
//         <span class="location"> USA only</span>
//     </div>
//     <div class="items">
//         <div class="role">Frontend</div>
//         <div class="level">Senior</div>
//         <div class="language">HTML</div>
//         <div class="language">CSS</div>
//         <div class="language">JavaScript</div>
//     </div>
//