import React, { useState } from "react";
import Card from "../components/Card";

const Discount = () => {
  const [data, setData] = useState([
    {
      id: "1",
      name: "Display Unit - Lenovo 81LK017UIN (L340) Laptop (9th Gen Core i5 / 8GB RAM / 1TB HDD / 15.6 (39.62 cm) FHD Display / 3GB NVIDIA 1050 Graphics / Win 10)",
      price: "₹ 50,000",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/dba00a05-b5ad-433c-8974-dfa299617370_182x182.jpg",
    },
    {
      id: "2",
      name: "Acer Swift 3 SF314-511 NX.ABNSI.006 (11th gen Core i5 Processor / 16GB RAM/ 512GB SSD/14 (35.56cm)/Intel Iris Xe Graphics / Windows 11 / Office 2021)",
      price: "₹ 66,999",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/a4483ceb-82a9-453a-b6d6-a5645df5b9b321161403_182x182.jpg",
    },
    {
      id: "3",
      name: "Lenovo Yoga 6 13ALC6 82ND003PIN Laptop (AMD Ryzen 5 5500U / 16 GB RAM / 512 GB SSD / 13.3  FHD Touch Display / AMD Radeon Graphics / Win 10 / MSO 19 )",
      price: "₹ 77,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/8cfd09ec-1f6d-4617-bc25-6949d8214a0721231148_182x182.jpg",
    },
    {
      id: "4",
      name: "Display Unit - Mi Notebook 14 (IC) Laptop (10th Gen Intel Core i5 Processor / 8 GB RAM / 512 GB SSD / 14  FHD Display / 2 GB NVIDIA Graphics / Win 10 )",
      price: "₹ 50,000",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/944ea558-23af-4062-bc57-c471ebba28e8_182x182.jpg",
    },
    {
      id: "5",
      name: "Microsoft Surface Laptop 3 (Ryzen 5 / 8 GB RAM / 128 GB SSD / 15  (38.1 cm) Quad HD+ Display / Radeon Vega 9 Graphics / Windows 10 )",
      price: "₹ 1,05,000",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/a7fcf43a-b766-4474-ac8a-ec00759e1459_182x182.jpg",
    },
    {
      id: "6",
      name: "Lenovo Yoga 6 13ALC6 82ND00DNIN Laptop (AMD Ryzen 7 5700U / 16 GB RAM / 512 GB SSD / 13.3  FHD Touch Display / AMD Radeon Graphics / Win 11 / MSO 21 )",
      price: "₹ 86,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/053365cf-b737-4753-872d-f8c5ed70c39421261428_182x182.jpg",
    },
    {
      id: "7",
      name: "Lenovo Yoga 6 82ND004GIN Laptop (AMD Ryzen 7 / 16 GB RAM / 1 TB SSD / 13.3 inch (33.7cms) Touch Display / AMD Radeon Graphics / Win 10 / MSO)",
      price: "₹ 91,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/6a07406a-b6e0-428c-bac8-cac0df4dc51f21071217_182x182.jpg",
    },
    {
      id: "8",
      name: "Apple MGN63HN/A MacBook Air (Apple M1 Chip/ 8GB RAM/ 256GB SSD/ 13.3(33.78 cm) Display/ Integrated Graphics/ mac OS Big Sur/ Space Grey)",
      price: "₹ 85,900",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/b72b2403-3141-473a-8ed1-ca91b8009793_182x182.jpg",
    },
    {
      id: "9",
      name: "Apple MGN73HN/A MacBook Air (Apple M1 Chip/ 8GB RAM/ 512GB SSD/ 13.3(33.78 cm) Display/ Integrated Graphics/ mac OS Big Sur/ Space Grey)",
      price: "₹ 1,08,490",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/cda28fd3-2426-4f6a-a510-0de8a5582c66_182x182.jpg",
    },
    {
      id: "10",
      name: "Apple MYD82HN/A MacBook Pro (Apple M1 Chip/ 8GB RAM/ 256 GB SSD/ 13.3(33.78 cm) Display/ Integrated Graphics/ mac OS Big Sur/ Space Grey)",
      price: "₹ 1,10,490",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/01d65af7-4e77-465e-9949-8bb00ba9bead_182x182.jpg",
    },
    {
      id: "11",
      name: "Apple MYD92HN/A MacBook Pro (Apple M1 Chip/ 8GB RAM/ 512 GB SSD/ 13.3(33.78 cm) Display/ Integrated Graphics/ mac OS Big Sur/ Space Grey)",
      price: "₹ 1,30,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/b92e215b-0b1e-457d-9c5a-575bd59ba3a7_182x182.jpg",
    },
    {
      id: "12",
      name: "Microsoft Surface Laptop Go (10th Gen Core i5 / 8 GB RAM / 128 GB SSD / 12.4  Pixel Sense Display / Intel UHD Graphics / Windows 10 )",
      price: "₹ 69,999",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/ad83391d-00a5-4643-93af-3e83e091978a_182x182.jpg",
    },
    {
      id: "13",
      name: "Apple MacBook Pro 16 M1 Pro Chip MK183HN/A (16GB RAM/512 GB SSD/(16.2 Inch) 41.05 cm Liquid Retina XDR Display/16-core GPU /macOS Monterey/Space Grey)",
      price: "₹ 2,39,000",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/4e1278f6-d57b-46a7-b75e-3282cc6075b621211113_182x182.jpg",
    },
    {
      id: "14",
      name: "Lenovo IdeaPad 3 15ITL6 Laptop (11th Gen Core i5 Processor / 8 GB RAM / 256 GB SSD / 15.6  FHD IPS Display / Intel Iris Xe Graphics / Win 10/ MSO )",
      price: "₹ 59,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/9eba6243-a4be-4301-9dcd-9ca6b0da5f40_182x182.jpg",
    },
    {
      id: "15",
      name: "Asus TUF F15 FX506LH-HN258TS Gaming Laptop (10th Gen Intel Core i5 Processor /8 GB RAM / 512 GB SSD / 15.6  FHD Display /NVIDIA 4GB Graphics / Win 10 )",
      price: "₹ 64,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/e294abbb-eb8c-4ba2-aed1-2773d9221ebd_182x182.jpg",
    },
    {
      id: "16",
      name: "Lenovo IdeaPad 5 14ITL05 Laptop (11th Gen Core i5 Processor / 8 GB RAM / 512 GB SSD / 14  FHD IPS Display / Intel Iris Xe Graphics / Win 10/ MSO )",
      price: "₹ 66,490",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/132ee189-17d4-483c-aa49-75056f648e43202108280705568429_182x182.jpg",
    },
    {
      id: "17",
      name: "Microsoft Surface Pro 7 VDV-00015 (Core i5 10th Gen/8GB RAM/128GB SSD/12.3 (31.24 cm)/Windows 10 Home)",
      price: "₹ 90,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/6bc7bb01-4b69-4612-9cbe-7718719d526e_182x182.jpg",
    },
    {
      id: "18",
      name: "Microsoft Surface Laptop 3 VGY-00021 (Core i5 10th Gen/8GB RAM/128GB SSD/13.5 (34.29 cm)/Windows 10 Home)",
      price: "₹ 1,01,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/57cf5322-4981-462c-9671-70082107d10e_182x182.jpg",
    },
    {
      id: "19",
      name: "Display Unit - Lenovo IPG3-15 81Y400CTIN Laptop (Core i5, 10th Gen/8GB RAM/1TB HDD + 256GB SSD/4GB Graphics/15.6 (39.62 cm)/Win 10)",
      price: "₹ 67,000",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/c7a60a11-260d-4809-88fc-82961b56cc9c_182x182.jpg",
    },
    {
      id: "20",
      name: "Microsoft Surface PRO X MJX00024 (Microsoft SQ1 Octa Core Processor/8GB RAM/128GB SSD/13 (33.02 cm)/Windows 10 Home)",
      price: "₹ 1,01,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/106d16aa-5748-4245-afb1-d4d04135b2f3_182x182.jpg",
    },
    {
      id: "21",
      name: "Lenovo Legion 5i 82AU004KIN Laptop (Core i5 10th Gen/8GB RAM/1TB HDD + 256GB SSD/4GB Graphics/15.6 (39.62 cm)/Windows 10)",
      price: "₹ 84,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/88d27ff6-04a4-4109-a53c-cb47d84979f4_182x182.jpg",
    },
    {
      id: "22",
      name: "Display Unit - Lenovo 82AU004RIN LEGION5-15 Laptop(10thGen i7 /8 GB RAM/1TB HDD + 256GB SSD/ NVIDIA 1650 4GB Graphics/15.6(39.62cm) /Windows 10)",
      price: "₹ 80,000",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/1291f970-64e0-45a5-a73b-708dcb801c3b_182x182.jpg",
    },
    {
      id: "23",
      name: "Display Unit - Lenovo 81WJ002MIN (S340) Laptop (10th Gen Core i5 / 8GB RAM/ 1TB HDD + 256GB SSD /14 (35.56cm) FHD Display / 2GB Graphics /Win 10)",
      price: "₹ 55,000",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/7be519b1-5ceb-46cb-b18c-330723a2f0ae_182x182.jpg",
    },
    {
      id: "24",
      name: "HP 15S-DU1079TX Laptop (10th Gen Core i5/ 8GB RAM/ 1TB HDD/ 15.6 (39.62 cm) FHD Display/ Intel Integrated Graphics/ Windows 10)",
      price: "₹ 59,490",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/15cb0031-3322-4b78-ab48-27adf15a26cd_182x182.jpg",
    },
    {
      id: "25",
      name: "Asus Zenbook Flip UX371EA-HL701TS Laptop (11th Gen Core i7 / 16GB RAM / 1TB SSD / 13.3 (33.78 cm) FHD Display / Intel Iris Xe Graphics / Windows 10)",
      price: "₹ 1,23,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/e238f203-b47e-4a4c-9c25-1a25b6f926d6_182x182.jpg",
    },
    {
      id: "26",
      name: "Lenovo Ideapad 82FG00BPIN(SLIM5-15) Laptop Intel Core i5, 11th Gen /8 GB RAM/1TB HDD + 256GB SSD/AMD Radeon R4 Graphic/15.6(39.56cm)/Windows 10)",
      price: "₹ 67,299",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/be1642b0-fd06-4451-892c-5041bd114e7e_182x182.jpg",
    },
    {
      id: "27",
      name: "Asus Zenbook UX425EA-BM701TS Laptop (11th Gen Core i7/ 16GB RAM/ 512GB SSD/ 14(35.56 cm)FHD Display/ Integrated Graphics/ Windows 10/ MS Office)",
      price: "₹ 88,490",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/f5ff6b87-87cc-4fae-84c8-d3b525e26134_182x182.jpg",
    },
    {
      id: "28",
      name: "Microsoft Surface Laptop Go (10th Gen Core i5 / 8 GB RAM / 256 GB SSD / 12.4  Pixel Sense Display / Intel UHD Graphics / Windows 10 )",
      price: "₹ 86,999",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/513390e2-b23e-4df3-8cfc-8a654cba98e0_182x182.jpg",
    },
    {
      id: "29",
      name: "Microsoft Surface Pro 7 VNX-00028 (Core i7 10th Gen/16GB RAM/256GB SSD/12.3 (31.24 cm)/Intel Integrated Graphics/Windows 10 Home)",
      price: "₹ 1,46,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/dc2721b6-7e24-48b3-ad42-c59e56700dd1_182x182.jpg",
    },
    {
      id: "30",
      name: "Asus Vivobook Ultra 15 (11th Gen Intel Core i5 Processor / 8 GB RAM /1 TB HDD, 256 GB SSD / 15.6  FHD Display / Intel Iris X Graphics / Win 10 / MSO )",
      price: "₹ 59,699",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/0fa2639e-1784-4ce8-a0ee-669c60fe6000_182x182.jpg",
    },
    {
      id: "31",
      name: "Display Unit - Mi Notebook 14 Horizon Edition Laptop (10th Gen Intel Core i7 / 8 GB RAM /512 GB SSD / 14  FHD Display / 2 GB NVIDIA Graphics / Win 10 )",
      price: "₹ 57,000",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/67110d42-0bb5-498e-af98-433fd134d70d_182x182.jpg",
    },
    {
      id: "32",
      name: "Lenovo IdeaPad Slim 5 14ITL05 (11th Gen Intel Core i5 Processor/ 8 GB RAM / 512 GB SSD / 14  FHD Display / Intel Iris Xe Graphics / Win 10 / MSO )",
      price: "₹ 66,490",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/a81476b1-55a6-46cd-8bd8-4700d8974158_182x182.jpg",
    },
    {
      id: "33",
      name: "Asus ROG Flow X13 (2021) (AMD Ryzen 7 5800HS Processor/ 16 GB RAM / 1TB SSD / 13.4.  WUXGA Touch Display / 4GB NVIDIA GTX Graphics / Win 10 / MSO )",
      price: "₹ 1,09,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/e6cad234-1398-41fe-aa9c-7af24433f21a_182x182.jpg",
    },
    {
      id: "34",
      name: "Asus ROG Flow X13 (2021) (AMD Ryzen 9 5900HS Processor/ 16 GB RAM / 1 TB SSD / 13.4.  WQUXGA Touch Display / 4GB NVIDIA GTX Graphics / Win 10 / MSO )",
      price: "₹ 1,32,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/27fca41d-ac0e-490f-a859-0f1ce9dda478_182x182.jpg",
    },
    {
      id: "35",
      name: "HP Pavilion Gaming 15-ec1051AX (AMD Ryzen 5 4600H Processor/ 8 GB RAM / 512 GB SSD / 15.6  FHD Display / 4 GB NVIDIA Graphics / Win 10 / MSO )",
      price: "₹ 68,490",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/eaadcaaf-f0b4-4090-a723-a36fc1fc7e85_182x182.jpg",
    },
    {
      id: "36",
      name: "Acer Nitro 5 NH.QBZSI.003 Gaming Laptop (11th Gen Core i5 Processor / 8 GB RAM / 512 GB SSD / 15.6  FHD Display / 4 GB NVIDIA Graphics / Win 10 )",
      price: "₹ 70,999",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/e3957a66-b580-413d-85c7-9a5462a2af39_182x182.jpg",
    },
    {
      id: "37",
      name: "HP Laptop 15s-du3060TX (11th Gen Intel Core i5 Processor/ 8 GB RAM / 1 TB HDD / 15.6  FHD Display / 2 GB NVIDIA MX350 Graphics / Windows 10 / MSO )",
      price: "₹ 55,790",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/9a653c05-9018-4a9d-a449-6487858af7f7_182x182.jpg",
    },
    {
      id: "38",
      name: "Acer Aspire 5 A515-56 Laptop (11th Gen Intel Core i3 Processor / 4 GB RAM / 1 TB HDD / 15.6  FHD Display / Intel UHD Graphics / Win 10 / MSO )",
      price: "₹ 40,490",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/314272fe-9cf0-4d7d-bda9-4f034ee87b20_182x182.jpg",
    },
    {
      id: "39",
      name: "Lenovo IdeaPad 3 14ITL6 Laptop (11th Gen Core i3 Processor / 8 GB RAM / 256 GB SSD / 14  FHD IPS Display / Intel UHD Graphics / Win 10/ MSO )",
      price: "₹ 44,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/056104e7-bd95-4867-b9a9-c4e6b566cddf_182x182.jpg",
    },
    {
      id: "40",
      name: "ASUS ROG Zephyrus G14 (AMD Ryzen 7 Processor / 16 GB RAM / 1 TB SSD / 14  FHD 120Hz Display / 4 GB NVIDIA Graphics / Windows 10 / MS Office )",
      price: "₹ 1,07,490",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/0894c4ac-34bf-4066-a8aa-a569a20d0379_182x182.jpg",
    },
    {
      id: "41",
      name: "Lenovo IdeaPad 3 14ITL6 Laptop (11th Gen Core i5 Processor / 8 GB RAM / 512 GB SSD / 14  FHD IPS Display / Intel Iris Xe Graphics / Win 10/ MSO )",
      price: "₹ 63,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/159fdf11-15d3-4d9e-9c95-f66dd72bf661_182x182.jpg",
    },
    {
      id: "42",
      name: "Lenovo 81WA00GUIN (SLIM3-14) Laptop (10th Gen Core i3 / 8GB RAM / 256GB SSD / 14 (35.56 cm) FHD Display / Intel UHD Graphics / Windows 10)",
      price: "₹ 42,490",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/77712a63-e833-47a9-b6a6-5fd7ce769488_182x182.jpg",
    },
    {
      id: "43",
      name: "Lenovo IdeaPad 3 15IML05 81WB01 Laptop (10th Gen Core i3 Processor / 4 GB RAM / 256 GB SSD / 15.6  FHD IPS Display / Intel UHD Graphics / Win 10/ MSO )",
      price: "₹ 39,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/74c425f5-00e7-4f9f-8957-411d2968444e_182x182.jpg",
    },
    {
      id: "44",
      name: "Lenovo 14IML05 81WA00K6IN Laptop (10th Gen Core i3 / 8GB RAM / 256GB SSD / 14 (35.56 cm) FHD Display / Intel UHD Graphics / Windows 10)",
      price: "₹ 41,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/9d412b6a-d63f-479f-ad63-e87b77390020_182x182.jpg",
    },
    {
      id: "45",
      name: "Lenovo Legion 5 82AU00P2IN Gaming Laptop (10th Gen Intel Core i5 Processor / 8 GB RAM / 512 GB SSD / 15.6  FHD Display / 4GB NVIDIA Graphics / Win 10 )",
      price: "₹ 74,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/04ae2e63-62dd-4322-b9dd-622a5e804173_182x182.jpg",
    },
    {
      id: "46",
      name: "HP Pavilion Gaming 15-ec1023AX(AMD Ryzen 5 4600H Processor/ 8 GB RAM / 1 TB HDD +256 GB SSD / 15.6  FHD Display / 4 GB NVIDIA Graphics / Win 10 )",
      price: "₹ 63,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/7034294c-ef5c-4688-8791-fd582e1e7bda_182x182.jpg",
    },
    {
      id: "47",
      name: "HP Pavilion 15-DK1508TX Gaming Laptop (10th Gen Core i5/8 GB RAM/512 GB SSD + 32 GB Optane Memory/15.6  FHD Display /4 GB NVIDIA Graphics/Win 10 )",
      price: "₹ 68,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/d1436110-c89e-47eb-9a8b-89287df8fb13_182x182.jpg",
    },
    {
      id: "48",
      name: "Acer Nitro 5 NH.QBCSI.001 Gaming Laptop (AMD Ryzen 5 Processor / 16 GB RAM / 1TB HDD + 256 GB SSD / 15.6  FHD Display / 6 GB NVIDIA Graphics / Win 10 )",
      price: "₹ 1,00,690",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/9b60c14d-c5e2-497e-8456-8883c2a22a15_182x182.jpg",
    },
    {
      id: "49",
      name: "Lenovo IdeaPad Gaming 3 81Y4018DIN Laptop (10th Gen Intel Core i5 Processor / 8 GB RAM / 1 TB HDD / 15.6  FHD Display /4GB NVIDIA Graphics / Win 10 )",
      price: "₹ 58,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/0144f177-b897-48a3-8f79-116566e98eee_182x182.jpg",
    },
    {
      id: "50",
      name: "Lenovo IdeaPad 5 15ITL05 Laptop (11th Gen Core i5 / 16 GB RAM / 512 GB SSD / 15.6  FHD IPS Display / 2 GB NVIDIA Graphics / Win 10/ MSO )",
      price: "₹ 74,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/e85d1ef2-ae5d-4bde-8700-3fdb5ee8496c_182x182.jpg",
    },
    {
      id: "51",
      name: "Dell Inspiron 3501 D560413WIN9S (11th Gen Intel i5 Processor/4 GB RAM /1 TB HDD + 256 GB SSD / 15.6  FHD Display / Intel UHD Graphics / Win 10 / MSO )",
      price: "₹ 58,199",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/4d0fd4d1-0c31-46cd-b11d-f117524ea591_182x182.jpg",
    },
    {
      id: "52",
      name: "HP Laptop 14s-DQ2535TU (11th Gen Intel Core i5 Processor/ 8 GB RAM / 512 GB SSD / 14  HD Display / Intel Iris Xe Graphics / Windows 10 / MSO )",
      price: "₹ 55,790",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/a0a4d829-bbdf-4f1f-90c7-089dd05b47e8_182x182.jpg",
    },
    {
      id: "53",
      name: "Acer Spin 3 SP313-51 NXA9VSI004 Laptop (11th Gen Core i5 / 8 GB RAM / 512 GB SSD / 13.3  Multi - touch Display / Intel Iris Xe Graphics / Windows 10 )",
      price: "₹ 74,999",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/850702c6-9570-4801-b90a-3ba4d21480a0_182x182.jpg",
    },
    {
      id: "54",
      name: "ASUS X515EA-BQ312TS Laptop (Intel 11th Gen Core i3 / 8 GB RAM / 256 GB SSD / 15.6-inch FHD Display / Intel UHD Graphics / Windows 10 / MSO)",
      price: "₹ 39,090",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/39f5704d-c84e-4986-ac70-36a8dadca3a2_182x182.jpg",
    },
    {
      id: "55",
      name: "DELL G15 D560560WIN9BE Gaming Laptop (10th Gen Intel Core i5 Processor / 8 GB RAM / 512 GB SSD /15.6  FHD Display / 4 GB NVIDIA Graphics / Windows 10 )",
      price: "₹ 71,499",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/bb093b82-ecc9-4544-812b-547655f830d8202108300823430482_182x182.jpg",
    },
    {
      id: "56",
      name: "Dell Inspiron 3511 D560505WIN9S (11th Gen Intel i5 Processor/ 8 GB RAM / 1 TB HDD + 256 GB SSD / 15.6  FHD Display / NVIDIA Graphics / Win 10 / MSO )",
      price: "₹ 65,490",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/c1074a56-5f13-4470-8650-1fe597151dff_182x182.jpg",
    },
    {
      id: "57",
      name: "DELL G15 5510 D560537WIN9B Gaming Laptop (10th Gen Intel Core i5 Processor / 16 GB RAM / 512 GB SSD /15.6  FHD Display / 4 GB NVIDIA Graphics /WIN 10 )",
      price: "₹ 83,490",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/6c7099cc-cfe1-4f9d-b7a1-2c0e2d916c30202108310617598077_182x182.jpg",
    },
    {
      id: "58",
      name: "Acer Nitro 5 NH.QD8SI.002 Gaming Laptop (Intel Core i5 11th Gen / 8 GB RAM / 1TB HDD + 256 GB SSD / 15.6  FHD Display / 4 GB NVIDIA Graphics / Win 10 )",
      price: "₹ 75,689",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/a83e1654-d1df-43b4-918b-44eba8fee1d021060704_182x182.jpg",
    },
    {
      id: "59",
      name: "HP Pavilion Aero Laptop 13-be0030AU (AMD Ryzen 5 5600U Processor/ 16 GB RAM / 512 GB SSD / 13.3  Display /AMD Radeon™ Graphics / Win 10 / MSO )",
      price: "₹ 66,299",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/dad50342-8139-413d-be2f-6b857e04407e_182x182.jpg",
    },
    {
      id: "60",
      name: "Acer Swift X SFX14-41G Laptop (AMD Ryzen 5 5600U / 16 GB RAM/512 GB SSD/14' (35.56) Display/NVIDIA® GeForce® RTX 3050 4GB Graphics / Win10 / MSO)",
      price: "₹ 84,999",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/38b654a2-eb5d-4d1c-88b0-2e178b470f8621130911_182x182.jpg",
    },
    {
      id: "61",
      name: "HP Envy X360 13-ay0533AU Convertible Laptop (AMD Ryzen 5/16 GB/512 GB SSD/13.3 FHD Multi Touch enabled Display/AMD Radeon™ Graphics/Windows 11)",
      price: "₹ 76,999",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/afe37fe3-6029-4d41-aa3b-6613253c385421251439_182x182.jpg",
    },
    {
      id: "62",
      name: "HP Envy x360 Convertible 13-bd0521T (11th Gen Intel Core i7/16 GB RAM/512 GB SSD/13.3  FHD Touch Screen Display/Intel Iris Xe Graphics/Windows 11/MSO )",
      price: "₹ 98,490",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/7bef99db-fa3f-4899-931b-a972d5523c1321251414_182x182.jpg",
    },
    {
      id: "63",
      name: "HP Pavilion 15-eh1102AU Laptop (AMD Ryzen 5 / 8GB RAM/ 512 SSD/15.6 (39.62 cm)/ AMD Integrated Graphics/Win 11/MS Office)",
      price: "₹ 56,390",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/0eb7bd42-f83c-4cda-bb4b-0531a764ef3d21280806_182x182.jpg",
    },
    {
      id: "64",
      name: "Lenovo Legion 5 15ACH6 Laptop (AMD Ryzen 7 Processor / 8 GB RAM / 512 GB SSD / 15.6  FHD Display / 4 GB NVIDIA Graphics / Windows 10 / MSO )",
      price: "₹ 99,490",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/47579c0f-640f-463a-9a28-c6e7725376a521171004_182x182.png",
    },
    {
      id: "65",
      name: "Lenovo IdeaPad 1 11IGL05 81VT0071IN Laptop (Intel Celeron Processor / 4 GB RAM / 256 GB SSD / 11.6  HD Display / Intel UHD 600 Graphics / WIN 10 )",
      price: "₹ 30,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/5b0723b5-d0b3-4c78-9335-c2b552fd08ce21011331_182x182.jpg",
    },
    {
      id: "66",
      name: "ASUS X415JA-EB362TS Laptop (Intel 10th Gen i3 / 8 GB RAM / 512 GB SSD / 32GB Optane /14-inch FHD Display / Intel UHD Graphics / Windows 10 / MSO)",
      price: "₹ 40,290",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/1980135f-7ef6-4adf-b044-c832aa7f3ee121061019_182x182.jpg",
    },
    {
      id: "67",
      name: "Lenovo IdeaPad 3 15ITL6 82H801G0IN Laptop (11th i3 Processor / 8 GB RAM / 512 GB SSD / 15.6  FHD IPS Display / Intel UHD Graphics / Win 10/ MSO )",
      price: "₹ 46,490",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/7a836b51-ecf0-4081-9ea0-cb8dfe438eda21060624_182x182.jpg",
    },
    {
      id: "68",
      name: "Dell Inspiron 3511 D560570WIN9S (11th Gen Intel i3 Processor/ 8 GB RAM / 1 TB HDD + 256 GB SSD / 15.6  FHD Display / Integrate Graphics / Win 10 / MSO)",
      price: "₹ 47,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/9266f930-bcaa-4977-b85d-ecd0b08ffa5221211323_182x182.jpg",
    },
    {
      id: "69",
      name: "Lenovo IdeaPad 3 15ITL6 82H800U2IN Laptop (11th Gen Core i3 Processor / 8 GB RAM / 256 GB SSD / 15.6  FHD IPS Display / Intel UHD Graphics / Win 10 )",
      price: "₹ 44,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/e67cac80-c996-4a50-8eb2-dc57bf4db4d121290549_182x182.jpg",
    },
    {
      id: "70",
      name: "Dell Inspiron 3511 D560578WIN9SL (11th Gen Intel i5 Processor/ 8 GB RAM / 512 GB SSD / 15.6  FHD Display / NVIDIA 2GB Graphics / Win 10 / MSO )",
      price: "₹ 61,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/50537de0-09fc-4f39-b091-9bd2f3f244d121211256_182x182.jpg",
    },
    {
      id: "71",
      name: "Dell Inspiron 3511 D560568WIN9S (11th Gen Intel i3 Processor/ 8 GB RAM / 1 TB HDD / 15.6  FHD Display / Integrated Graphics / Win 10 / MSO )",
      price: "₹ 38,949",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/ca4b0663-64e0-47e6-a656-a809e1db470821211211_182x182.jpg",
    },
    {
      id: "72",
      name: "Lenovo IdeaPad 5 Pro 14ITL6 82L300A9IN Laptop (11th Gen Intel Core i5 / 16 GB RAM / 512GB SSD /14  FHD Display / Intel Iris Xe Graphics / Win 10 /MSO )",
      price: "₹ 72,999",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/c9e70141-f6ef-4a1d-9bd4-bbf5f5165f0121061403_182x182.jpg",
    },
    {
      id: "73",
      name: "Lenovo Yoga 7 Laptop (11th Gen Intel Core i5 Processor / 16 GB RAM / 512 GB SSD / 14  FHD Display / Intel Iris Xe Graphics / Windows 10 / MSO )",
      price: "₹ 85,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/7c57f72d-2269-4baa-bd09-f5ba9aab8bf021110829_182x182.jpg",
    },
    {
      id: "74",
      name: "Lenovo Legion 5 Pro LENOVO 11TH CI7 16G Gaming Laptop (11th Gen Intel Core i7 / 16 GB RAM / 1 TB SSD / 16  QHD Display / 6GB NVIDIA Graphics / Win 11 )",
      price: "₹ 1,51,399",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/54194063-c510-4b9c-8684-49575a79884021180726_182x182.jpg",
    },
    {
      id: "75",
      name: "Lenovo IdeaPad 5 Pro 14ITL6 82L300A8IN Laptop (11th Gen Intel Core i5 / 16 GB RAM / 512 GB SSD / 14  FHD Display / NVIDIA 2GB Graphics / Win 10 / MSO )",
      price: "₹ 80,990",
      imageurl:
        "https://d2xamzlzrdbdbn.cloudfront.net/products/f1a107f2-eb87-4f7f-a270-035c05bb149821040634_182x182.jpg",
    },
   
  ]);
  return (
    <div>
      <div className="p-6 m-6 text-center font-bold text-4xl text-indigo-600 shadow-xl rounded  ">
        
        Laptops
      </div>
      <div className="flex flex-row overflow-x-auto  flex-wrap justify-center">
        {data.map((value) => (
          <Card value={value} />
        ))}
      </div>
    </div>
  );
};

export default Discount;
