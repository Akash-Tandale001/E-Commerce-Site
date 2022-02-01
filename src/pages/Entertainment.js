import React, { useState } from 'react';

import Card from "../components/Card";

const Entertainment = () => {
    const [data, setData] = useState(
        [
            {
              id: "1",
              name: "Sony HT-Z9F Cinematic 3.1Ch Soundbar with Dolby Atmos",
              price: "₹ 79,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/a91d5cba-8afe-47a5-b892-63100127f9d0_182x182.jpg"
            },
            {
              id: "2",
              name: "Samsung UA32T4600 32(80 cm) HD Ready Smart (2021 Model Edition)",
              price: "₹ 23,490",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/2121956e-7ece-468c-8c94-543d04a13058_182x182.jpg"
            },
            {
              id: "3",
              name: "Sony KD32W830 32 (80 cm) HD Ready Smart LED TV",
              price: "₹ 30,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/f0f58524-a7f3-4ece-8d43-9a19de73acfb_182x182.jpg"
            },
            {
              id: "4",
              name: "Sony KD43X80J 43(108 cm) Ultra HD (4K) Smart Android (2021 Model Edition)",
              price: "₹ 69,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/5a3ecebd-5d4f-4f89-8d84-0130ff8756d321280554_182x182.jpg"
            },
            {
              id: "5",
              name: "Sony KD43X75 43(108 cm) Ultra HD (4K) Smart Android (2021 Model Edition)",
              price: "₹ 56,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/a6793e47-775f-4876-ab8b-e252030372a021270635_182x182.jpg"
            },
            {
              id: "6",
              name: "Sony KD-50X75 50 (126 cm) Smart Android Ultra HD LED TV",
              price: "₹ 74,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/cae3f650-84cd-43d3-9ed1-826cfb5d671021270650_182x182.jpg"
            },
            {
              id: "7",
              name: "Sony XR65X90J 65(164 cm) Ultra HD (4K) Smart Android (2021 Model Edition)",
              price: "₹ 1,61,490",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/470cffdc-cdcd-46d8-a4eb-fb79b1ea309a_182x182.jpg"
            },
            {
              id: "8",
              name: "Sony Ultra HD (4K) Smart Android OLED 65 inch(164 cm) XR65A80J (2021 Model Edition)",
              price: "₹ 2,56,490",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/a8139e0c-6746-4bab-ad6f-4a78aa57cb15_182x182.jpg"
            },
            {
              id: "9",
              name: "Sony XR55X90J 55(139 cm) Ultra HD (4K) Android (2021 Model Edition)",
              price: "₹ 1,19,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/60a7505a-fc77-4435-8c76-8554afc5a484_182x182.jpg"
            },
            {
              id: "10",
              name: "Sony KD65X80J 65(164 cm) Ultra HD (4K) Smart Android (2021 Model Edition)",
              price: "₹ 1,09,240",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/2d33c11d-697a-4156-bdce-bce7732b809d21270701_182x182.jpg"
            },
            {
              id: "11",
              name: "Sony KD50X80J 50 (126 cm) 4K Ultra HD Smart Android LED TV",
              price: "₹ 77,890",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/67391dab-840a-42fb-a8da-6195284c4247_182x182.jpg"
            },
            {
              id: "12",
              name: "Sony KD55X80J 55(139 cm) Ultra HD (4K) Smart Android (2021 Model Edition)",
              price: "₹ 84,540",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/150f6dc3-47c0-4110-9a76-cbc770d9c91621280650_182x182.jpg"
            },
            {
              id: "13",
              name: "Sony KD65X85J 65(164 cm) Ultra HD (4K) Smart Android (2021 Model Edition)",
              price: "₹ 1,28,240",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/bbcf2b4a-58fc-4307-8eb2-ed204166a35e_182x182.jpg"
            },
            {
              id: "14",
              name: "Sony KD75X80J 75(189 cm) Ultra HD (4K) Smart Android (2021 Model Edition)",
              price: "₹ 1,80,490",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/9d364842-2d2e-4d30-8d6c-3ec2e49af77a21280637_182x182.jpg"
            },
            {
              id: "15",
              name: "Sony KD55X85J 55(139 cm) Ultra HD (4K) Smart Android (2021 Model Edition)",
              price: "₹ 99,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/7f17f6af-df41-4e3d-a685-e5777cb8163d_182x182.jpg"
            },
            {
              id: "16",
              name: "Sony KD85X85J 85(216 cm) Ultra HD (4K) Smart Anroid (2021 Model Edition)",
              price: "₹ 4,49,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/37b8b98f-162d-4792-b4cb-2eff0f8320d821160959_182x182.jpg"
            },
            {
              id: "17",
              name: "Sony Ultra HD (4K) Smart Android OLED 77 inch(195 cm) XR77A80J (2021 Model Edition)",
              price: "₹ 5,49,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/3f1370ff-27e5-4269-9600-1e6fd56e3bee21011059_182x182.jpg"
            },
            {
              id: "18",
              name: "LG OLED55G1PTZ 55(139 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 1,62,800",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/889e4c6d-529a-44c2-b515-d6d62efe46b821251016_182x182.jpg"
            },
            {
              id: "19",
              name: "LG OLED65G1PTZ 65(164 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 2,57,000",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/3fe69a9d-dcef-4183-b9af-13b819cf925621250519_182x182.jpg"
            },
            {
              id: "20",
              name: "Panasonic TH43JX750DX 43 (108cm) 4K Ultra HD Smart LED TV",
              price: "₹ 46,788",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/b81aebd1-9e7a-4fa8-90df-8167d8dbd9e9_182x182.jpg"
            },
            {
              id: "21",
              name: "Panasonic TH55JX750DX 55 (139cm) 4K Ultra HD Smart LED TV",
              price: "₹ 65,090",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/06c90dae-8f5c-4718-b0f2-b5f56c8ebb88_182x182.jpg"
            },
            {
              id: "22",
              name: "Panasonic TH65JX750DX 65 (165 cm) 4K Ultra HD Smart LED TV",
              price: "₹ 89,250",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/18f15bd7-655a-4fd8-a193-130355fdd717_182x182.jpg"
            },
            {
              id: "23",
              name: "Samsung Crystal UA50AU7700 50(125 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 58,480",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/53dc3d9b-a126-4887-84b2-01c100e8faee_182x182.jpg"
            },
            {
              id: "24",
              name: "Samsung UA32T4900 32(80 cm) HD Ready Tizen™ (2021 Model Edition)",
              price: "₹ 25,490",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/cc766645-e2ff-437f-a41e-d396021372e8_182x182.jpg"
            },
            {
              id: "25",
              name: "Panasonic TH-43JX660DX 43(108 cm) Ultra HD 4K LED Android Smart TV",
              price: "₹ 43,250",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/2c63d002-3b4f-4fbc-8a6f-efd16a1e9a6e_182x182.jpg"
            },
            {
              id: "26",
              name: "Samsung HD 32 inch (80 cm) LED UA32T4050",
              price: "₹ 16,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/d274339e-2452-4f2b-8acf-8650f506fba521250729_182x182.jpg"
            },
            {
              id: "27",
              name: "Samsung Smart HD 32 Inch (80 Cm) LED UA32T4450",
              price: "₹ 22,190",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/c3270031-f31e-4a9d-b756-511ee3d19d5121250705_182x182.jpg"
            },
            {
              id: "28",
              name: "Samsung The Frame QA55LS03AA 55(139 cm) Ultra HD (4K) Tizen™ (2021 Model Edition)",
              price: "₹ 89,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/909b67cd-9f65-422f-94b7-b8f9a81269f421091332_182x182.jpg"
            },
            {
              id: "29",
              name: "LG 43LM5620PTA 43(108 cm) Full HD Smart (2021 Model Edition)",
              price: "₹ 34,999",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/400c7bea-f1c4-4364-985b-43089df7e6e121200705_182x182.jpg"
            },
            {
              id: "30",
              name: "Sony XR75X90J 75(189 cm) Ultra HD (4K) Smart Android (2021 Model Edition)",
              price: "₹ 2,75,490",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/dd740e7e-a81c-4bd0-9829-74c94f945595_182x182.jpg"
            },
            {
              id: "31",
              name: "Samsung Neo 9 QA65QN90A 65(164 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 2,34,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/55dbbd57-791c-43fe-80d9-684012c1df15_182x182.jpg"
            },
            {
              id: "32",
              name: "Samsung Crystal UA85AU8000 85(216 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 4,19,989",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/a000a3c4-e1c3-4205-a940-29e93e127dcc_182x182.jpg"
            },
            {
              id: "33",
              name: "Samsung UA75AU8000 75 (189 cm) Crystal 4K UHD Smart TV (2021 Model Edition)",
              price: "₹ 1,69,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/860ef054-857a-4123-b41d-80eb8681657b_182x182.jpg"
            },
            {
              id: "34",
              name: "Samsung Crystal UA70AU7700 70(178 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 1,22,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/dbf7031b-9891-496f-94a5-b4cc238ba6d4_182x182.jpg"
            },
            {
              id: "35",
              name: "Samsung Crystal UA65AU9070 65(163 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 1,14,590",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/2f71c998-0c3b-4737-af33-3ec4f504c6d8_182x182.jpg"
            },
            {
              id: "36",
              name: "Samsung Crystal UA65AU8000 65(163 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 1,07,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/2a739bad-eed6-4b67-85e0-271dd0113612_182x182.jpg"
            },
            {
              id: "37",
              name: "Samsung Crystal UA55AU8000 55(138 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 70,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/061428ce-59b7-45c2-93a9-ba0fc36d38af_182x182.jpg"
            },
            {
              id: "38",
              name: "Samsung Crystal UA55AU7700 55(138 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 65,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/6caec8f4-9d0b-4495-b43d-657f9c74c90a_182x182.jpg"
            },
            {
              id: "39",
              name: "Samsung Crystal UA43AU9070 43(108 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 51,390",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/5bf34c96-0dae-411b-80d0-2314643f1a53_182x182.jpg"
            },
            {
              id: "40",
              name: "Samsung Crystal UA43AU7700 43(108 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 45,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/5520e570-2db2-483b-9575-09ea5907fda6_182x182.jpg"
            },
            {
              id: "41",
              name: "Samsung QA65Q80A 65(163 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 1,89,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/b10eab99-9327-48ed-90b7-947783656754_182x182.jpg"
            },
            {
              id: "42",
              name: "Samsung QA43Q60A 43(108 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 56,999",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/60d00883-4294-441b-b64f-4d7f3071ac3f_182x182.jpg"
            },
            {
              id: "43",
              name: "Samsung QA55Q70A 55(138 cm) Ultra HD (4K) Tizen™ (2021 Model Edition)",
              price: "₹ 1,19,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/e2817ea9-110c-4efb-984b-587f35f178f3_182x182.jpg"
            },
            {
              id: "44",
              name: "LG C1 55(139 cm) Ultra HD 4K OLED Smart TV (Voice Assistant Supported, OLED55C1XTZ, Black)",
              price: "₹ 1,41,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/49264c98-3dfc-4184-b280-6eddc4de2688_182x182.jpg"
            },
            {
              id: "45",
              name: "LG C1 OLED65C1XTZ 65(164 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 2,19,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/c3ed2a24-62a3-42cd-ac4d-c04a10efea21_182x182.jpg"
            },
            {
              id: "46",
              name: "LG 43UP7750PTZ 43(109.22 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 42,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/79685294-c0ec-43e4-9c14-ea3c6b4a6c52_182x182.jpg"
            },
            {
              id: "47",
              name: "Samsung UA55AU9070 55(138 cm) Ultra HD (4K) Tizen™ (2021 Model Edition)",
              price: "₹ 74,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/8e0f61be-989f-44d4-9cb6-f2f8d1aa1325_182x182.jpg"
            },
            {
              id: "48",
              name: "LG 43UP7550PTZ 43(109.22 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 41,490",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/430ef202-a316-4b08-bf08-1509a4bf4b6d21091132_182x182.jpg"
            },
            {
              id: "49",
              name: "LG Ultra HD (4K) Smart LED 43 inch(109.22 cm) 43UM7790PTA (2021 Model)",
              price: "₹ 46,790",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/35fd1c17-cb17-4a40-ae12-7b0b57e2f045202108280600437432_182x182.jpg"
            },
            {
              id: "50",
              name: "LG 43NANO75TPZ 43(109.22 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 48,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/c6cbf94d-7d00-48eb-95c5-d192f06c96d121181235_182x182.jpg"
            },
            {
              id: "51",
              name: "LG 50NANO75TPZ 50(127 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 60,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/4267b8b8-fbb6-4a9d-b79f-62b82f37bf3421181306_182x182.jpg"
            },
            {
              id: "52",
              name: "LG 50NANO80TPZ 50(127 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 63,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/e0c3cb6d-f8cb-4157-86f4-80739e311ab221181308_182x182.jpg"
            },
            {
              id: "53",
              name: "LG 55NANO83TPZ 55(139 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 88,680",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/ea34f934-dd74-4769-a1d5-6d3817e4ef8a21190532_182x182.jpg"
            },
            {
              id: "54",
              name: "LG 70UP7750PTZ 70(178 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 1,10,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/92b4f6bd-9e6e-4e47-a114-6c27b8815e7721181252_182x182.jpg"
            },
            {
              id: "55",
              name: "LGC1 OLED48C1XTZ 48(122 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 1,04,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/0e33ee2a-dc93-479f-874a-a25530a8d73c21181300_182x182.jpg"
            },
            {
              id: "56",
              name: "Samsung Ultra HD 4K Smart QLED 55 inch(138 cm) QA55Q80A",
              price: "₹ 1,20,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/4685bdfb-2357-4299-91a8-b4d81190436021170713_182x182.jpg"
            },
            {
              id: "57",
              name: "Samsung Neo 8 QA55QN85A 55(138 cm) Ultra HD (4K) Tizen™ (2021 Model Edition)",
              price: "₹ 1,45,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/d100d591-a608-46de-b1e6-0050cc5f55d4_182x182.jpg"
            },
            {
              id: "58",
              name: "Samsung QA65QN85A 65(163 cm) Ultra HD (4K) Tizen™ (2021 Model Edition)",
              price: "₹ 2,14,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/fbecb846-4e4a-4c8c-9091-7cb211437b4721171234_182x182.jpg"
            },
            {
              id: "59",
              name: "LG 65UP7750PTZ 65(164 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 94,490",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/1ef2882a-bbc3-4984-9673-d29a4ae243eb21151231_182x182.jpg"
            },
            {
              id: "60",
              name: "Sony KLV43W672G 43(108 cm) Full HD Smart Android (2019 Model Edition)",
              price: "₹ 52,240",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/588c0c97-3ecc-4071-a6e4-b84d2e1d4c73_182x182.jpg"
            },
            {
              id: "61",
              name: "Panasonic TH55HX635DX 55 (139cm) 4K Ultra HD Smart LED TV",
              price: "₹ 56,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/1e88385a-29e5-46b1-b688-003c7b4a4ba1_182x182.jpg"
            },
            {
              id: "62",
              name: "LG 3.1 ch High Res Audio Sound Bar GX with Dolby Atmos",
              price: "₹ 44,900",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/9e2ad5d3-0440-4ed5-abd8-26e281c1cf2c_182x182.jpg"
            },
            {
              id: "63",
              name: "Sony XR85Z9J 85(216 cm) Ultra HD (8K) Smart Android (2021 Model Edition)",
              price: "₹ 10,44,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/f58b5627-50a9-4b0f-832e-4fbae08faedf21080816_182x182.jpg"
            },
            {
              id: "64",
              name: "Amstrad AM32HSV4D 32(80 cm) HD Ready Smart LED",
              price: "₹ 15,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/de72795d-f23e-4bd2-b51c-a54adff3d5f6_182x182.jpg"
            },
            {
              id: "65",
              name: "Sansui JSW32ASHD 32 (80 cm) HD Ready LED Smart Android TV",
              price: "₹ 15,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/416514a8-b01c-4a74-97cd-a8fa178508bf_182x182.jpg"
            },
            {
              id: "66",
              name: "Sansui JSW43ASUHD 43 (109 cm ) 4K Ultra HD LED Smart Android TV",
              price: "₹ 28,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/0bcecfa3-2a1d-45ac-934e-da31a8093fb2_182x182.jpg"
            },
            {
              id: "67",
              name: "Mi 4A Pro ELA4638IN-L32M5-AL 80 cm (32) Smart Android LED TV",
              price: "₹ 16,999",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/6e41ac29-5c5a-4f55-ab07-b49030714f7f_182x182.jpg"
            },
            {
              id: "68",
              name: "Sony KLV50W672G 50(126 cm) Full HD Smart (2019 Model Edition)",
              price: "₹ 63,640",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/6ea7078c-7cd9-4b82-8c19-33eaebad2c84_182x182.jpg"
            },
            {
              id: "69",
              name: "Sony KDL43W6600 43(108 cm) Full HD Smart (2020 Model Edition)",
              price: "₹ 46,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/01d8d431-9fcf-443d-b35a-ed8cba09c419_182x182.jpg"
            },
            {
              id: "70",
              name: "LG 43LM6360PTB 43(108 cm) Full HD Smart (2019 Model Edition)",
              price: "₹ 38,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/b41fcdb1-b3ff-4ef1-98f6-c39212b3c63f_182x182.jpg"
            },
            {
              id: "71",
              name: "Haier HD Ready Smart Android LED 32 inch(80 cm) LE32K6600GA (2020 Model Edition)",
              price: "₹ 18,800",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/d4a5cb58-4a42-4aba-8577-d4f123e10e5921180657_182x182.jpg"
            },
            {
              id: "72",
              name: "Haier Full HD Smart Android LED 43 inch(108 cm) LE43K6600GA (2020 Model Edition)",
              price: "₹ 28,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/afb37dfe-97b3-4cc5-9945-59cdc8155d6521190513_182x182.jpg"
            },
            {
              id: "73",
              name: "Sansui JSW55ASUHD 55 (140 cm) 4K Ultra HD LED Smart Android TV",
              price: "₹ 39,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/1d6b504a-d4f5-42aa-b797-f741456d8a1121200528_182x182.jpg"
            },
            {
              id: "74",
              name: "Panasonic TH-32JS660DX 32 (80cm) HD Ready Smart LED TV",
              price: "₹ 20,340",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/8c8ebf6c-b8cd-43e3-a76a-4d542965da8521190646_182x182.jpg"
            },
            {
              id: "75",
              name: "Mi 4X ELA4303IN-L50M5-5AIN 50 (125.7cm) 4K HDR Smart Android TV",
              price: "₹ 38,999",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/b1be65a6-9627-407b-96d1-f573cc352c61_182x182.jpg"
            },
            {
              id: "76",
              name: "Mi 4A ELA4548IN-L43M6-EI Horizon Edition 108 cm (43) Full HD LED Smart Android TV",
              price: "₹ 26,999",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/a3c5a066-b5ac-4d1c-a8a7-402224cb7736_182x182.jpg"
            },
            {
              id: "77",
              name: "Mi 4X ELA4426IN-L55M5-5XIN 55 (138.8cm) 4K HDR Smart Android LED TV",
              price: "₹ 44,999",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/9487e140-145c-4a34-89b8-492c7855629d_182x182.jpg"
            },
            {
              id: "78",
              name: "Sansui JSW43ASFHD 43 (108 cm) Full HD LED Smart Android TV",
              price: "₹ 27,499",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/898cb1e5-a040-4207-8085-034050caaf8421181303_182x182.jpg"
            },
            {
              id: "79",
              name: "Panasonic TH-42JS660DX 42 (105 cm) HD Smart LED TV",
              price: "₹ 35,149",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/41f86bfb-cf98-46ce-87b3-94a8cbf0fb6021190525_182x182.jpg"
            },
            {
              id: "80",
              name: "SANSUI HD Ready Smart LED 32 inch(80 cm) JSVT32SKHD",
              price: "₹ 13,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/2987424e-8f40-421f-aaa7-0f1d2959bb1521280744_182x182.jpg"
            },
            {
              id: "81",
              name: "VISE HD Ready Smart LED 32 inch(80 cm) VS32HSA4D (2021 Model Edition)",
              price: "₹ 12,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/32d6e1f7-54de-4f6e-bcb5-68fcd80dda3022140833_182x182.jpg"
            },
            {
              id: "82",
              name: "SANSUI HD Ready Smart LED 32 inch(80 cm) JST32SKHD (2021 Model Edition)",
              price: "₹ 13,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/051bc697-431a-483d-890c-3ef2a28ecd5e21280746_182x182.jpg"
            },
            {
              id: "83",
              name: "MI Ultra HD 4K QLED Smart Android LED 75 inch ELA4606IN-L75M6-ESG",
              price: "₹ 1,27,999",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/22a430fd-9ed2-4333-b344-11b9e6b56a0421141234_182x182.jpg"
            },
            {
              id: "84",
              name: "VISE HD Ready LED 32 inch(80 cm) VS32HAA4B (2021 Model Edition)",
              price: "₹ 10,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/6ef92686-7bc4-4a2c-a201-39616dfdffc621040714_182x182.jpg"
            },
            {
              id: "85",
              name: "Redmi X65 Ultra HD (4K) Smart Android LED 65 inch(164 cm) ELA4576IN-L65M6-RA (2021 Model Edition)",
              price: "₹ 61,999",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/6724e7d8-2c5a-4b18-94c7-5b72a0bc0ebf21190536_182x182.jpg"
            },
            {
              id: "86",
              name: "Mi Ultra HD 4K QLED Smart Android LED 55 Inch (139cm) ELA4566IN-L55M6-EQG",
              price: "₹ 59,999",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/ebad5eab-0c1a-4608-acf1-a03b869379a821140747_182x182.jpg"
            },
            {
              id: "87",
              name: "Amstrad Ultra HD (4K) Smart Certified Android LED 65 inch(164 cm) AM65UGNXT (2021 Model Edition)",
              price: "₹ 67,000",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/53856f68-56b1-4f87-a9dc-a15abd183fe021281349_182x182.jpg"
            },
            {
              id: "88",
              name: "Amstrad Ultra HD (4K) Smart Certified Android LED 55 inch(138 cm) AM55UGNXT (2021 Model Edition)",
              price: "₹ 52,000",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/88515576-47ef-4a27-bc57-2ca9b4cbc80921281336_182x182.jpg"
            },
            {
              id: "89",
              name: "Amstrad Full HD Smart Certified Android LED 43 inch(109.22 cm) AM43FHSV4D (2021 Model Edition)",
              price: "₹ 27,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/521e044d-4c79-4e38-bb19-99a09e6dee6d21281316_182x182.jpg"
            },
            {
              id: "90",
              name: "Samsung UA43T5770 43(108 cm) HD Ready Smart (2020 Model Edition)",
              price: "₹ 40,490",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/835f007f-7ab8-4428-83a5-49cae1523eb5_182x182.jpg"
            },
            {
              id: "91",
              name: "Samsung Neo 8 QA65QN800 65(164 cm) Ultra HD (8K) Tizen™ (2021 Model Edition)",
              price: "₹ 3,59,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/c295fe5b-c44e-4a8b-bd27-0d5e9043433321190558_182x182.jpg"
            },
            {
              id: "92",
              name: "Samsung Crystal UA43AU8000 43(108 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 48,390",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/1cc11129-fa85-4803-8ce1-f65869481909_182x182.jpg"
            },
            {
              id: "93",
              name: "LG 75UP7750PTZ 75(190 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 1,49,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/b5f7d32b-4f11-4f09-8247-bbf71c64a754_182x182.jpg"
            },
            {
              id: "94",
              name: "LG OLED77C1PTZ 77(199 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 5,99,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/ef22b25a-be43-4d9e-9efc-d2323b9aa12821081315_182x182.jpg"
            },
            {
              id: "95",
              name: "LG 65UP8000PTZ 65(164 cm) Ultra HD (4K) Smart (2021 Model Edition)",
              price: "₹ 1,22,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/f42f58ef-3c7d-45f8-bb44-3d626ef854fc21281101_182x182.jpg"
            },
            {
              id: "96",
              name: "Samsung QA75QN800A 75(189 cm) Ultra HD (8K) Tizen™ (2021 Model Edition)",
              price: "₹ 7,49,990",
              imageurl: "https://d2xamzlzrdbdbn.cloudfront.net/products/af855aa2-62d2-460f-a6e7-7cb455f42e5e21190614_182x182.jpg"
            }
          ]
    );
  return (
    <div>
    <div className="p-6 m-6 text-center font-bold text-4xl text-indigo-600 shadow-xl rounded  ">
      
      Entertainment
    </div>
    <div className="flex flex-row overflow-x-auto  flex-wrap justify-center">
      {data.map((value) => (
        <Card value={value} />
      ))}
    </div>
  </div>
    );
};

export default Entertainment;
