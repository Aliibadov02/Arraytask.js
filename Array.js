let products = [
  ["Lenovo IdeaPad 5 Laptop", 799.99, "Ultrabook with AMD Ryzen 5 and 15.6\" display", 2023],
  ["Samsung Galaxy S24 Smartphone", 999.99, "Flagship phone with AMOLED display and triple camera", 2024],
  ["Sony WH-1000XM5 Headphones", 349.99, "Wireless noise-canceling headphones", 2023],
  ["LG OLED C3 TV", 1299.00, "55-inch 4K OLED smart TV", 2024],
  ["PlayStation 5 Console", 499.99, "Next-generation gaming console from Sony", 2020],
  ["Apple iPad Air Tablet", 599.00, "Slim tablet with M1 chip and Retina display", 2022],
  ["Garmin Venu 3 Smartwatch", 399.99, "Fitness smartwatch with GPS and heart rate monitor", 2023],
  ["Xiaomi Band 8 Fitness Tracker", 49.99, "Affordable activity tracker with AMOLED screen", 2023],
  ["Canon EOS R6 Camera", 2299.00, "Mirrorless camera with 20-MP sensor", 2021],
  ["Logitech G502 HERO Gaming Mouse", 89.99, "Wired mouse with adjustable DPI and RGB lighting", 2022]
];

while (true) {
  let action = prompt("(ADD, DELETE, SHOW, SORTPRICE, SORTYEAR, CHANGEPRICE, EXIT):").toUpperCase();

  if (action === "ADD") {
    let name = prompt("Məhsul adı:");
    let price = parseFloat(prompt("Qiyməti:"));
    let desc = prompt("Təsvir:");
    let year = parseInt(prompt("İl:"));
    products.push([name, price, desc, year]);
    alert(`${name} əlavə olundu!`);

  } else if (action === "DELETE") {
    let name = prompt("Silinəcək məhsulun adını yaz:");
    products = products.filter(p => p[0].toLowerCase() !== name.toLowerCase());
    alert(`${name} silindi!`);

  } else if (action === "SHOW") {
    alert(products.map(p => `${p[0]} - $${p[1]} (${p[3]})`).join("\n"));

  } else if (action === "SORTPRICE") {
    products.sort((a, b) => a[1] - b[1]);
    alert("Qiymətə görə sıralandı!");

  } else if (action === "SORTYEAR") {
    products.sort((a, b) => a[3] - b[3]);
    alert("İllərə görə sıralandı!");

  } else if (action === "CHANGEPRICE") {
    let name = prompt("Qiyməti dəyişmək istədiyin məhsulun adını yaz:");
    let index = products.findIndex(p => p[0].toLowerCase() === name.toLowerCase());
    if (index !== -1) {
      let newPrice = parseFloat(prompt("Yeni qiyməti yaz:"));
      products[index][1] = newPrice;
      alert(`${name} məhsulunun yeni qiyməti: $${newPrice}`);
    } else {
      alert("Bu adda məhsul tapılmadı!");
    }

  } else if (action === "EXIT") {
    alert("Proqram bitdi!");
    break;

  } else {
    alert("Yanlış əməliyyat!");
  }
}
