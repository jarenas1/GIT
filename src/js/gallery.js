const data = [
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Luna", age: 2 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Max", age: 4 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Bella", age: 3 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Rocky", age: 5 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Coco", age: 1 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Milo", age: 3 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Simba", age: 2 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Nala", age: 4 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Toby", age: 6 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Daisy", age: 2 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Charlie", age: 5 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Bruno", age: 3 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Oreo", age: 1 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Zeus", age: 4 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Lola", age: 3 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Rex", age: 2 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Chester", age: 5 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Bobby", age: 3 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Shadow", age: 6 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hlmMJGK0QxhFLCPChakDzerC-FMgi6Z2tA&s", name: "Maggie", age: 2 }
];

console.log("El script gallery.js está corriendo 🚀");

const section = document.querySelector("section");

const articles = data.map(({ url, name, age }) => {
    const article = document.createElement('article');
    article.className = 'card-container';

    const img = document.createElement('img');
    img.className = "img";
    img.src = url;
    img.alt = name;

    const h2 = document.createElement('h2');
    h2.textContent = name;

    const p = document.createElement('p');
    p.textContent = `Edad: ${age} años`;

    const textContainer = document.createElement('div')
    textContainer.append(h2, p)

    textContainer.className = 'text-container';

    article.appendChild(img);
    article.appendChild(textContainer);

    return article;
});

if (section) {
    articles.forEach(article => section.appendChild(article));
}
