<script>
import { RouterLink, RouterView } from 'vue-router';
import BuyItem from "./BuyItem.vue"
import Total from "./Total.vue"
export default {
  components: {
    BuyItem,
    Total
  },
  data() {
    return {
      name: "",        // 與收件人欄位連接
      phone: "",       // 與收件人電話欄位連接
      address: "",      // 與寄件地址欄位連接
      Email: localStorage.getItem("email"),
      buyer_address: [
        {
          "districts": [
            {
              "zip": "100",
              "name": "中正區"
            },
            {
              "zip": "103",
              "name": "大同區"
            },
            {
              "zip": "104",
              "name": "中山區"
            },
            {
              "zip": "105",
              "name": "松山區"
            },
            {
              "zip": "106",
              "name": "大安區"
            },
            {
              "zip": "108",
              "name": "萬華區"
            },
            {
              "zip": "110",
              "name": "信義區"
            },
            {
              "zip": "111",
              "name": "士林區"
            },
            {
              "zip": "112",
              "name": "北投區"
            },
            {
              "zip": "114",
              "name": "內湖區"
            },
            {
              "zip": "115",
              "name": "南港區"
            },
            {
              "zip": "116",
              "name": "文山區"
            }
          ],
          "name": "臺北市"
        },
        {
          "districts": [
            {
              "zip": "200",
              "name": "仁愛區"
            },
            {
              "zip": "201",
              "name": "信義區"
            },
            {
              "zip": "202",
              "name": "中正區"
            },
            {
              "zip": "203",
              "name": "中山區"
            },
            {
              "zip": "204",
              "name": "安樂區"
            },
            {
              "zip": "205",
              "name": "暖暖區"
            },
            {
              "zip": "206",
              "name": "七堵區"
            }
          ],
          "name": "基隆市"
        },
        {
          "districts": [
            {
              "zip": "207",
              "name": "萬里區"
            },
            {
              "zip": "208",
              "name": "金山區"
            },
            {
              "zip": "220",
              "name": "板橋區"
            },
            {
              "zip": "221",
              "name": "汐止區"
            },
            {
              "zip": "222",
              "name": "深坑區"
            },
            {
              "zip": "223",
              "name": "石碇區"
            },
            {
              "zip": "224",
              "name": "瑞芳區"
            },
            {
              "zip": "226",
              "name": "平溪區"
            },
            {
              "zip": "227",
              "name": "雙溪區"
            },
            {
              "zip": "228",
              "name": "貢寮區"
            },
            {
              "zip": "231",
              "name": "新店區"
            },
            {
              "zip": "232",
              "name": "坪林區"
            },
            {
              "zip": "233",
              "name": "烏來區"
            },
            {
              "zip": "234",
              "name": "永和區"
            },
            {
              "zip": "235",
              "name": "中和區"
            },
            {
              "zip": "236",
              "name": "土城區"
            },
            {
              "zip": "237",
              "name": "三峽區"
            },
            {
              "zip": "238",
              "name": "樹林區"
            },
            {
              "zip": "239",
              "name": "鶯歌區"
            },
            {
              "zip": "241",
              "name": "三重區"
            },
            {
              "zip": "242",
              "name": "新莊區"
            },
            {
              "zip": "243",
              "name": "泰山區"
            },
            {
              "zip": "244",
              "name": "林口區"
            },
            {
              "zip": "247",
              "name": "蘆洲區"
            },
            {
              "zip": "248",
              "name": "五股區"
            },
            {
              "zip": "249",
              "name": "八里區"
            },
            {
              "zip": "251",
              "name": "淡水區"
            },
            {
              "zip": "252",
              "name": "三芝區"
            },
            {
              "zip": "253",
              "name": "石門區"
            }
          ],
          "name": "新北市"
        },
        {
          "districts": [
            {
              "zip": "260",
              "name": "宜蘭市"
            },
            {
              "zip": "263",
              "name": "壯圍鄉"
            },
            {
              "zip": "261",
              "name": "頭城鎮"
            },
            {
              "zip": "262",
              "name": "礁溪鄉"
            },
            {
              "zip": "264",
              "name": "員山鄉"
            },
            {
              "zip": "265",
              "name": "羅東鎮"
            },
            {
              "zip": "266",
              "name": "三星鄉"
            },
            {
              "zip": "267",
              "name": "大同鄉"
            },
            {
              "zip": "268",
              "name": "五結鄉"
            },
            {
              "zip": "269",
              "name": "冬山鄉"
            },
            {
              "zip": "270",
              "name": "蘇澳鎮"
            },
            {
              "zip": "272",
              "name": "南澳鄉"
            },
            {
              "zip": "290",
              "name": "釣魚臺"
            }
          ],
          "name": "宜蘭縣"
        },
        {
          "districts": [
            {
              "zip": "209",
              "name": "南竿鄉"
            },
            {
              "zip": "210",
              "name": "北竿鄉"
            },
            {
              "zip": "211",
              "name": "莒光鄉"
            },
            {
              "zip": "212",
              "name": "東引鄉"
            }
          ],
          "name": "連江縣"
        },
        {
          "districts": [
            {
              "zip": "300",
              "name": "東區"
            },
            {
              "zip": "300",
              "name": "北區"
            },
            {
              "zip": "300",
              "name": "香山區"
            }
          ],
          "name": "新竹市"
        },
        {
          "districts": [
            {
              "zip": "308",
              "name": "寶山鄉"
            },
            {
              "zip": "302",
              "name": "竹北市"
            },
            {
              "zip": "303",
              "name": "湖口鄉"
            },
            {
              "zip": "304",
              "name": "新豐鄉"
            },
            {
              "zip": "305",
              "name": "新埔鎮"
            },
            {
              "zip": "306",
              "name": "關西鎮"
            },
            {
              "zip": "307",
              "name": "芎林鄉"
            },
            {
              "zip": "310",
              "name": "竹東鎮"
            },
            {
              "zip": "311",
              "name": "五峰鄉"
            },
            {
              "zip": "312",
              "name": "橫山鄉"
            },
            {
              "zip": "313",
              "name": "尖石鄉"
            },
            {
              "zip": "314",
              "name": "北埔鄉"
            },
            {
              "zip": "315",
              "name": "峨眉鄉"
            }
          ],
          "name": "新竹縣"
        },
        {
          "districts": [
            {
              "zip": "320",
              "name": "中壢區"
            },
            {
              "zip": "324",
              "name": "平鎮區"
            },
            {
              "zip": "325",
              "name": "龍潭區"
            },
            {
              "zip": "326",
              "name": "楊梅區"
            },
            {
              "zip": "327",
              "name": "新屋區"
            },
            {
              "zip": "328",
              "name": "觀音區"
            },
            {
              "zip": "330",
              "name": "桃園區"
            },
            {
              "zip": "333",
              "name": "龜山區"
            },
            {
              "zip": "334",
              "name": "八德區"
            },
            {
              "zip": "335",
              "name": "大溪區"
            },
            {
              "zip": "336",
              "name": "復興區"
            },
            {
              "zip": "337",
              "name": "大園區"
            },
            {
              "zip": "338",
              "name": "蘆竹區"
            }
          ],
          "name": "桃園市"
        },
        {
          "districts": [
            {
              "zip": "350",
              "name": "竹南鎮"
            },
            {
              "zip": "351",
              "name": "頭份市"
            },
            {
              "zip": "352",
              "name": "三灣鄉"
            },
            {
              "zip": "353",
              "name": "南庄鄉"
            },
            {
              "zip": "354",
              "name": "獅潭鄉"
            },
            {
              "zip": "356",
              "name": "後龍鎮"
            },
            {
              "zip": "357",
              "name": "通霄鎮"
            },
            {
              "zip": "358",
              "name": "苑裡鎮"
            },
            {
              "zip": "360",
              "name": "苗栗市"
            },
            {
              "zip": "361",
              "name": "造橋鄉"
            },
            {
              "zip": "362",
              "name": "頭屋鄉"
            },
            {
              "zip": "363",
              "name": "公館鄉"
            },
            {
              "zip": "364",
              "name": "大湖鄉"
            },
            {
              "zip": "365",
              "name": "泰安鄉"
            },
            {
              "zip": "366",
              "name": "銅鑼鄉"
            },
            {
              "zip": "367",
              "name": "三義鄉"
            },
            {
              "zip": "368",
              "name": "西湖鄉"
            },
            {
              "zip": "369",
              "name": "卓蘭鎮"
            }
          ],
          "name": "苗栗縣"
        },
        {
          "districts": [
            {
              "zip": "400",
              "name": "中區"
            },
            {
              "zip": "401",
              "name": "東區"
            },
            {
              "zip": "402",
              "name": "南區"
            },
            {
              "zip": "403",
              "name": "西區"
            },
            {
              "zip": "404",
              "name": "北區"
            },
            {
              "zip": "406",
              "name": "北屯區"
            },
            {
              "zip": "407",
              "name": "西屯區"
            },
            {
              "zip": "408",
              "name": "南屯區"
            },
            {
              "zip": "411",
              "name": "太平區"
            },
            {
              "zip": "412",
              "name": "大里區"
            },
            {
              "zip": "413",
              "name": "霧峰區"
            },
            {
              "zip": "414",
              "name": "烏日區"
            },
            {
              "zip": "420",
              "name": "豐原區"
            },
            {
              "zip": "421",
              "name": "后里區"
            },
            {
              "zip": "422",
              "name": "石岡區"
            },
            {
              "zip": "423",
              "name": "東勢區"
            },
            {
              "zip": "424",
              "name": "和平區"
            },
            {
              "zip": "426",
              "name": "新社區"
            },
            {
              "zip": "427",
              "name": "潭子區"
            },
            {
              "zip": "428",
              "name": "大雅區"
            },
            {
              "zip": "429",
              "name": "神岡區"
            },
            {
              "zip": "432",
              "name": "大肚區"
            },
            {
              "zip": "433",
              "name": "沙鹿區"
            },
            {
              "zip": "434",
              "name": "龍井區"
            },
            {
              "zip": "435",
              "name": "梧棲區"
            },
            {
              "zip": "436",
              "name": "清水區"
            },
            {
              "zip": "437",
              "name": "大甲區"
            },
            {
              "zip": "438",
              "name": "外埔區"
            },
            {
              "zip": "439",
              "name": "大安區"
            }
          ],
          "name": "臺中市"
        },
        {
          "districts": [
            {
              "zip": "500",
              "name": "彰化市"
            },
            {
              "zip": "502",
              "name": "芬園鄉"
            },
            {
              "zip": "503",
              "name": "花壇鄉"
            },
            {
              "zip": "504",
              "name": "秀水鄉"
            },
            {
              "zip": "505",
              "name": "鹿港鎮"
            },
            {
              "zip": "506",
              "name": "福興鄉"
            },
            {
              "zip": "507",
              "name": "線西鄉"
            },
            {
              "zip": "508",
              "name": "和美鎮"
            },
            {
              "zip": "509",
              "name": "伸港鄉"
            },
            {
              "zip": "510",
              "name": "員林市"
            },
            {
              "zip": "511",
              "name": "社頭鄉"
            },
            {
              "zip": "512",
              "name": "永靖鄉"
            },
            {
              "zip": "513",
              "name": "埔心鄉"
            },
            {
              "zip": "514",
              "name": "溪湖鎮"
            },
            {
              "zip": "515",
              "name": "大村鄉"
            },
            {
              "zip": "516",
              "name": "埔鹽鄉"
            },
            {
              "zip": "520",
              "name": "田中鎮"
            },
            {
              "zip": "521",
              "name": "北斗鎮"
            },
            {
              "zip": "522",
              "name": "田尾鄉"
            },
            {
              "zip": "523",
              "name": "埤頭鄉"
            },
            {
              "zip": "524",
              "name": "溪州鄉"
            },
            {
              "zip": "525",
              "name": "竹塘鄉"
            },
            {
              "zip": "526",
              "name": "二林鎮"
            },
            {
              "zip": "527",
              "name": "大城鄉"
            },
            {
              "zip": "528",
              "name": "芳苑鄉"
            },
            {
              "zip": "530",
              "name": "二水鄉"
            }
          ],
          "name": "彰化縣"
        },
        {
          "districts": [
            {
              "zip": "540",
              "name": "南投市"
            },
            {
              "zip": "541",
              "name": "中寮鄉"
            },
            {
              "zip": "542",
              "name": "草屯鎮"
            },
            {
              "zip": "544",
              "name": "國姓鄉"
            },
            {
              "zip": "545",
              "name": "埔里鎮"
            },
            {
              "zip": "546",
              "name": "仁愛鄉"
            },
            {
              "zip": "551",
              "name": "名間鄉"
            },
            {
              "zip": "552",
              "name": "集集鎮"
            },
            {
              "zip": "553",
              "name": "水里鄉"
            },
            {
              "zip": "555",
              "name": "魚池鄉"
            },
            {
              "zip": "556",
              "name": "信義鄉"
            },
            {
              "zip": "557",
              "name": "竹山鎮"
            },
            {
              "zip": "558",
              "name": "鹿谷鄉"
            }
          ],
          "name": "南投縣"
        },
        {
          "districts": [
            {
              "zip": "600",
              "name": "西區"
            },
            {
              "zip": "600",
              "name": "東區"
            }
          ],
          "name": "嘉義市"
        },
        {
          "districts": [
            {
              "zip": "602",
              "name": "番路鄉"
            },
            {
              "zip": "603",
              "name": "梅山鄉"
            },
            {
              "zip": "604",
              "name": "竹崎鄉"
            },
            {
              "zip": "605",
              "name": "阿里山鄉"
            },
            {
              "zip": "606",
              "name": "中埔鄉"
            },
            {
              "zip": "607",
              "name": "大埔鄉"
            },
            {
              "zip": "608",
              "name": "水上鄉"
            },
            {
              "zip": "611",
              "name": "鹿草鄉"
            },
            {
              "zip": "612",
              "name": "太保市"
            },
            {
              "zip": "613",
              "name": "朴子市"
            },
            {
              "zip": "614",
              "name": "東石鄉"
            },
            {
              "zip": "615",
              "name": "六腳鄉"
            },
            {
              "zip": "616",
              "name": "新港鄉"
            },
            {
              "zip": "621",
              "name": "民雄鄉"
            },
            {
              "zip": "622",
              "name": "大林鎮"
            },
            {
              "zip": "623",
              "name": "溪口鄉"
            },
            {
              "zip": "624",
              "name": "義竹鄉"
            },
            {
              "zip": "625",
              "name": "布袋鎮"
            }
          ],
          "name": "嘉義縣"
        },
        {
          "districts": [
            {
              "zip": "630",
              "name": "斗南鎮"
            },
            {
              "zip": "631",
              "name": "大埤鄉"
            },
            {
              "zip": "632",
              "name": "虎尾鎮"
            },
            {
              "zip": "633",
              "name": "土庫鎮"
            },
            {
              "zip": "634",
              "name": "褒忠鄉"
            },
            {
              "zip": "635",
              "name": "東勢鄉"
            },
            {
              "zip": "636",
              "name": "臺西鄉"
            },
            {
              "zip": "637",
              "name": "崙背鄉"
            },
            {
              "zip": "638",
              "name": "麥寮鄉"
            },
            {
              "zip": "640",
              "name": "斗六市"
            },
            {
              "zip": "643",
              "name": "林內鄉"
            },
            {
              "zip": "646",
              "name": "古坑鄉"
            },
            {
              "zip": "647",
              "name": "莿桐鄉"
            },
            {
              "zip": "648",
              "name": "西螺鎮"
            },
            {
              "zip": "649",
              "name": "二崙鄉"
            },
            {
              "zip": "651",
              "name": "北港鎮"
            },
            {
              "zip": "652",
              "name": "水林鄉"
            },
            {
              "zip": "653",
              "name": "口湖鄉"
            },
            {
              "zip": "654",
              "name": "四湖鄉"
            },
            {
              "zip": "655",
              "name": "元長鄉"
            }
          ],
          "name": "雲林縣"
        },
        {
          "districts": [
            {
              "zip": "700",
              "name": "中西區"
            },
            {
              "zip": "701",
              "name": "東區"
            },
            {
              "zip": "702",
              "name": "南區"
            },
            {
              "zip": "704",
              "name": "北區"
            },
            {
              "zip": "708",
              "name": "安平區"
            },
            {
              "zip": "709",
              "name": "安南區"
            },
            {
              "zip": "710",
              "name": "永康區"
            },
            {
              "zip": "711",
              "name": "歸仁區"
            },
            {
              "zip": "712",
              "name": "新化區"
            },
            {
              "zip": "713",
              "name": "左鎮區"
            },
            {
              "zip": "714",
              "name": "玉井區"
            },
            {
              "zip": "715",
              "name": "楠西區"
            },
            {
              "zip": "716",
              "name": "南化區"
            },
            {
              "zip": "717",
              "name": "仁德區"
            },
            {
              "zip": "718",
              "name": "關廟區"
            },
            {
              "zip": "719",
              "name": "龍崎區"
            },
            {
              "zip": "720",
              "name": "官田區"
            },
            {
              "zip": "721",
              "name": "麻豆區"
            },
            {
              "zip": "722",
              "name": "佳里區"
            },
            {
              "zip": "723",
              "name": "西港區"
            },
            {
              "zip": "724",
              "name": "七股區"
            },
            {
              "zip": "725",
              "name": "將軍區"
            },
            {
              "zip": "726",
              "name": "學甲區"
            },
            {
              "zip": "727",
              "name": "北門區"
            },
            {
              "zip": "730",
              "name": "新營區"
            },
            {
              "zip": "731",
              "name": "後壁區"
            },
            {
              "zip": "732",
              "name": "白河區"
            },
            {
              "zip": "733",
              "name": "東山區"
            },
            {
              "zip": "734",
              "name": "六甲區"
            },
            {
              "zip": "735",
              "name": "下營區"
            },
            {
              "zip": "736",
              "name": "柳營區"
            },
            {
              "zip": "737",
              "name": "鹽水區"
            },
            {
              "zip": "741",
              "name": "善化區"
            },
            {
              "zip": "744",
              "name": "新市區"
            },
            {
              "zip": "742",
              "name": "大內區"
            },
            {
              "zip": "743",
              "name": "山上區"
            },
            {
              "zip": "745",
              "name": "安定區"
            }
          ],
          "name": "臺南市"
        },
        {
          "districts": [
            {
              "zip": "800",
              "name": "新興區"
            },
            {
              "zip": "801",
              "name": "前金區"
            },
            {
              "zip": "802",
              "name": "苓雅區"
            },
            {
              "zip": "803",
              "name": "鹽埕區"
            },
            {
              "zip": "804",
              "name": "鼓山區"
            },
            {
              "zip": "805",
              "name": "旗津區"
            },
            {
              "zip": "806",
              "name": "前鎮區"
            },
            {
              "zip": "807",
              "name": "三民區"
            },
            {
              "zip": "811",
              "name": "楠梓區"
            },
            {
              "zip": "812",
              "name": "小港區"
            },
            {
              "zip": "813",
              "name": "左營區"
            },
            {
              "zip": "814",
              "name": "仁武區"
            },
            {
              "zip": "815",
              "name": "大社區"
            },
            {
              "zip": "817",
              "name": "東沙群島"
            },
            {
              "zip": "819",
              "name": "南沙群島"
            },
            {
              "zip": "820",
              "name": "岡山區"
            },
            {
              "zip": "821",
              "name": "路竹區"
            },
            {
              "zip": "822",
              "name": "阿蓮區"
            },
            {
              "zip": "823",
              "name": "田寮區"
            },
            {
              "zip": "824",
              "name": "燕巢區"
            },
            {
              "zip": "825",
              "name": "橋頭區"
            },
            {
              "zip": "826",
              "name": "梓官區"
            },
            {
              "zip": "827",
              "name": "彌陀區"
            },
            {
              "zip": "828",
              "name": "永安區"
            },
            {
              "zip": "829",
              "name": "湖內區"
            },
            {
              "zip": "830",
              "name": "鳳山區"
            },
            {
              "zip": "831",
              "name": "大寮區"
            },
            {
              "zip": "832",
              "name": "林園區"
            },
            {
              "zip": "833",
              "name": "鳥松區"
            },
            {
              "zip": "840",
              "name": "大樹區"
            },
            {
              "zip": "842",
              "name": "旗山區"
            },
            {
              "zip": "843",
              "name": "美濃區"
            },
            {
              "zip": "844",
              "name": "六龜區"
            },
            {
              "zip": "845",
              "name": "內門區"
            },
            {
              "zip": "846",
              "name": "杉林區"
            },
            {
              "zip": "847",
              "name": "甲仙區"
            },
            {
              "zip": "848",
              "name": "桃源區"
            },
            {
              "zip": "849",
              "name": "那瑪夏區"
            },
            {
              "zip": "851",
              "name": "茂林區"
            },
            {
              "zip": "852",
              "name": "茄萣區"
            }
          ],
          "name": "高雄市"
        },
        {
          "districts": [
            {
              "zip": "900",
              "name": "屏東市"
            },
            {
              "zip": "901",
              "name": "三地門鄉"
            },
            {
              "zip": "902",
              "name": "霧臺鄉"
            },
            {
              "zip": "903",
              "name": "瑪家鄉"
            },
            {
              "zip": "904",
              "name": "九如鄉"
            },
            {
              "zip": "905",
              "name": "里港鄉"
            },
            {
              "zip": "906",
              "name": "高樹鄉"
            },
            {
              "zip": "907",
              "name": "鹽埔鄉"
            },
            {
              "zip": "908",
              "name": "長治鄉"
            },
            {
              "zip": "909",
              "name": "麟洛鄉"
            },
            {
              "zip": "911",
              "name": "竹田鄉"
            },
            {
              "zip": "912",
              "name": "內埔鄉"
            },
            {
              "zip": "913",
              "name": "萬丹鄉"
            },
            {
              "zip": "920",
              "name": "潮州鎮"
            },
            {
              "zip": "921",
              "name": "泰武鄉"
            },
            {
              "zip": "922",
              "name": "來義鄉"
            },
            {
              "zip": "923",
              "name": "萬巒鄉"
            },
            {
              "zip": "924",
              "name": "崁頂鄉"
            },
            {
              "zip": "925",
              "name": "新埤鄉"
            },
            {
              "zip": "926",
              "name": "南州鄉"
            },
            {
              "zip": "927",
              "name": "林邊鄉"
            },
            {
              "zip": "928",
              "name": "東港鎮"
            },
            {
              "zip": "929",
              "name": "琉球鄉"
            },
            {
              "zip": "931",
              "name": "佳冬鄉"
            },
            {
              "zip": "932",
              "name": "新園鄉"
            },
            {
              "zip": "940",
              "name": "枋寮鄉"
            },
            {
              "zip": "941",
              "name": "枋山鄉"
            },
            {
              "zip": "942",
              "name": "春日鄉"
            },
            {
              "zip": "943",
              "name": "獅子鄉"
            },
            {
              "zip": "944",
              "name": "車城鄉"
            },
            {
              "zip": "945",
              "name": "牡丹鄉"
            },
            {
              "zip": "946",
              "name": "恆春鎮"
            },
            {
              "zip": "947",
              "name": "滿州鄉"
            }
          ],
          "name": "屏東縣"
        },
        {
          "districts": [
            {
              "zip": "950",
              "name": "臺東市"
            },
            {
              "zip": "951",
              "name": "綠島鄉"
            },
            {
              "zip": "952",
              "name": "蘭嶼鄉"
            },
            {
              "zip": "953",
              "name": "延平鄉"
            },
            {
              "zip": "954",
              "name": "卑南鄉"
            },
            {
              "zip": "955",
              "name": "鹿野鄉"
            },
            {
              "zip": "956",
              "name": "關山鎮"
            },
            {
              "zip": "957",
              "name": "海端鄉"
            },
            {
              "zip": "958",
              "name": "池上鄉"
            },
            {
              "zip": "959",
              "name": "東河鄉"
            },
            {
              "zip": "961",
              "name": "成功鎮"
            },
            {
              "zip": "962",
              "name": "長濱鄉"
            },
            {
              "zip": "963",
              "name": "太麻里鄉"
            },
            {
              "zip": "964",
              "name": "金峰鄉"
            },
            {
              "zip": "965",
              "name": "大武鄉"
            },
            {
              "zip": "966",
              "name": "達仁鄉"
            }
          ],
          "name": "臺東縣"
        },
        {
          "districts": [
            {
              "zip": "970",
              "name": "花蓮市"
            },
            {
              "zip": "971",
              "name": "新城鄉"
            },
            {
              "zip": "972",
              "name": "秀林鄉"
            },
            {
              "zip": "973",
              "name": "吉安鄉"
            },
            {
              "zip": "974",
              "name": "壽豐鄉"
            },
            {
              "zip": "975",
              "name": "鳳林鎮"
            },
            {
              "zip": "976",
              "name": "光復鄉"
            },
            {
              "zip": "977",
              "name": "豐濱鄉"
            },
            {
              "zip": "978",
              "name": "瑞穗鄉"
            },
            {
              "zip": "979",
              "name": "萬榮鄉"
            },
            {
              "zip": "981",
              "name": "玉里鎮"
            },
            {
              "zip": "982",
              "name": "卓溪鄉"
            },
            {
              "zip": "983",
              "name": "富里鄉"
            }
          ],
          "name": "花蓮縣"
        },
        {
          "districts": [
            {
              "zip": "880",
              "name": "馬公市"
            },
            {
              "zip": "881",
              "name": "西嶼鄉"
            },
            {
              "zip": "882",
              "name": "望安鄉"
            },
            {
              "zip": "883",
              "name": "七美鄉"
            },
            {
              "zip": "884",
              "name": "白沙鄉"
            },
            {
              "zip": "885",
              "name": "湖西鄉"
            }
          ],
          "name": "澎湖縣"
        },
        {
          "districts": [
            {
              "zip": "890",
              "name": "金沙鎮"
            },
            {
              "zip": "891",
              "name": "金湖鎮"
            },
            {
              "zip": "892",
              "name": "金寧鄉"
            },
            {
              "zip": "893",
              "name": "金城鎮"
            },
            {
              "zip": "894",
              "name": "烈嶼鄉"
            },
            {
              "zip": "896",
              "name": "烏坵鄉"
            }
          ],
          "name": "金門縣"
        }
      ],
      buyer_address2: "",
      buyer_addressarea: "",
      ischange: false,
    }
  },
  methods: {
    address_fn() {
      const sent_address = document.querySelector("#sent_address");
      console.log(sent_address.value)
      this.buyer_address.forEach(item => {
        if (item.name === sent_address.value) {
          this.buyer_address2 = item.districts;
        }
      })
    },
    alertmsg() {

      // 取得購物車相關資料

      if (window.confirm("有確定下單了嗎?? 資料有無填寫正確") === true) {
        let ary = JSON.parse(localStorage.getItem(localStorage.getItem("email")));
        console.log(ary);

        // newaa 用於後續訂單內容轉變
        let newaa = [];
        // sellers 放賣家名稱                      
        let sellers = "";
        // content 放訂單內容編號                     
        let content = "";

        // 訂單碼(亂數)
        let result = "";
        let charts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < 5; i++) {
          result += charts.charAt(Math.floor(Math.random() * charts.length));
        }


        //根據購物車內容多寡填入相對應資訊
        for (let i = 0; i < ary.length; i++) {
          newaa.push(ary[i]);

          // 使賣家形成字串
          if (sellers === "") {
            sellers = ary[i].sellAccount;
          } else if (!sellers.includes(ary[i].sellAccount)) {
            sellers = sellers.concat(",", ary[i].sellAccount);
          }

          // 使訂單內容編碼形成字串
          if (content === "") {
            content = (result + "-" + (i + 1));
          } else {
            content = content.concat(",", (result + "-" + (i + 1)));
          }

        }

        //地址正規化
        let addressCheck = /^[\d\u4e00-\u9fa5\d]{3,}$/;
        if (!addressCheck.test(this.address) && this.address !== null) {
          alert("地址請填好");
          return
        }

        // 寄送地址
        const sent_address = document.querySelector("#sent_address")
        const sent_address2 = document.querySelector("#sent_address2")
        // const sent_address3 = document.querySelector("#sent_address3")
        this.address = (sent_address.value + sent_address2.value + this.buyer_addressarea + this.address)

        //收件人正規化
        let nameCheck = /^[\u4e00-\u9fa5]{2,4}$/;
        if (!nameCheck.test(this.name) && this.name !== null) {
          alert("請輸入正確性名格式");
          return;
        }

        //收件人手機號碼
          
        this.phone = "0" + this.phone;

        // 訂單內容編碼
        console.log(content);
        // 資料庫應該新增E-mail 欄位供訂單系統判斷，買家維持可以輸入姓名即可
        // 轉成可以與後端對接的型態
        // 訂單區，填入與資料庫相對應欄位
        let orderObj = {
          "order_id": result,
          "seller_account": sellers,
          "buyer": this.name,
          "buyer_account": this.Email,
          "buyer_phone": this.phone,
          "sent_address": this.address,
          "content": content,
          "order_condition": "未出貨",
        }

        // 訂單內容區，填入與資料庫相對應欄位
        let contentArr = [];
        for (let j = 0; j < newaa.length; j++) {
          let orderContent = {
            "num_id": (result + "-" + (j + 1)),
            "item_name": newaa[j].itemName,
            "item_id":newaa[j].itemId,
            "item_number": newaa[j].itemNum,
            "item_price": newaa[j].itemPrice,
            "total_price": (newaa[j].itemNum * newaa[j].itemPrice),
            "seller_account": newaa[j].sellAccount,
            "item_condition": "未出貨",
          }
          contentArr.push(orderContent);
        }

        // 查看訂單"內容"是否理想
        console.log(contentArr);
        // 查看訂單"資訊"是否理想
        console.log(orderObj);

        let sentReq = {
          "order": orderObj,
          "contentList": contentArr
        };
        console.log(sentReq);

        fetch("http://localhost:8080/addOrder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(sentReq)
        })
          .then(function (response) {
            return response.json();
          })
          .then(data => {
            console.log(data.message)
            if (data.message == "訂單新增成功") {
              alert(data.message)
              localStorage.setItem(localStorage.getItem("email"), JSON.stringify([]))
              alert("下訂成功!!! \n商品將於三天內出貨，請留意 \n\n (1) 簡訊通知出貨時間  \n (2) 簡訊通知到貨時間 \n (3) 宅急便電話取貨。 \n \n食品為低溫宅配商品，目前為指定18:00送達。  \n如有特殊時間送達需求請下訂24小時內撥電詢問。 \nTel: 06-2345678 (王小姐)");
            }
            alert(data.message)

          })
          .catch(function (error) {
            console.log(error)
          })


      } else {
        alert("可以再多考慮")
      }


    },
    show() {
      // const sent_address = document.querySelector("#sent_address")
      // const sent_address2 = document.querySelector("#sent_address2")
      // const sent_address3 = document.querySelector("#sent_address3")
      // this.address = (sent_address2.value+ sent_address.value+  sent_address3.value +this.address)
      // console.log(this.address)
      let nameCheck = /^[\u4e00-\u9fa5]{2,4}$/;
      console.log(nameCheck.test(this.name));
    },
    address_fn2() {
      const select2 = document.querySelector("#sent_address2");
      console.log(select2.value);
      this.buyer_address2.forEach(item => {
        if (select2.value === item.name) {
          this.buyer_addressarea = item.zip;
        }
      })
      console.log(this.buyer_addressarea)
    }
  },
  // 生命週期
  mounted() {
    // this.fn();


  },
  created() {
    let ary = [{}];
    if (JSON.parse(localStorage.getItem("searchArr")) === null) {
      localStorage.setItem("searchArr", JSON.stringify(ary))
    }
  },
  updated() {
    // this.alertmsg();
    this.address_fn();
  }
}



</script>

<template>
  <div class="carContent">
    <div class="logistic">
      <h3 class="fw-bold">寄送資訊</h3>
      <div class="logistic-detail">

        <!-- 收件人 -->
        <div class="logistic-detail-input">
          <label for="name"> <i class="fa-solid fa-user"> 領貨人姓名</i></label>
          <input class="name" id="name" type="text" placeholder=" 請輸入領貨人姓名，e.g. 董人豪"
            onclick="document.getElementById('name').value=''" v-model="this.name">
        </div>

        <!-- 連絡電話 -->
        <div class="logistic-detail-input">
          <label for="phone"> <i class="fa-solid fa-mobile-screen-button"> 連絡電話</i></label>
          <input class="phone" id="phone" type="tel" placeholder=" 請輸入連絡電話0不用填(台灣手機格式) ，e.g. 912345678"
            v-model="this.phone">
          
        </div>

        <!-- 寄送地址 -->
        <div class="logistic-detail-input">
          <label for="adress"> <i class="fa-solid fa-map-location-dot"> 寄送地址</i> </label>
          <select name="" id="sent_address" @change="address_fn()">
            <option value="">請選擇</option>
            <option v-for="(item, index) in this.buyer_address" :key="index" :value="item.name">{{ item.name }}</option>
          </select>
          <select name="" id="sent_address2" @change="address_fn2()">
            <option v-for="(elements, index) in this.buyer_address2" :key="index" :value="elements.name">{{ elements.name
            }}</option>
          </select>
          <span>郵遞區號：{{ this.buyer_addressarea }}</span>
          <input class="adress" id="adress" type="text" placeholder=" 請輸入寄送地址(須提供郵遞區號)，e.g.林森路三段123號"
            v-model="this.address">
        </div>

      </div>

      <!-- 結帳按鈕 -->
      <div class="bottom">
        <!-- 測試按鈕 -->
        <!-- <button @click="show">test</button> -->
        <RouterLink to='/buyer' class="link">
          <button type="button" class="requestCheckBtn">
            <i class="fa-regular fa-money-bill-1"> Back</i>
          </button>
        </RouterLink>

        <button type="button" class="requestCheckBtn" v-on:click="alertmsg()">
          <i class="fa-regular fa-money-bill-1"> 商品結帳</i>
        </button>
      </div>
    </div>

    <div class="card-area">
      <div class="buyinfo">
        <!-- 購買區 -->
        <div class="buyItemBlock">
          <!-- 購物車內容區 -->
          <BuyItem />
        </div>
      </div>
      <!-- 價格區 -->
      <div class="priceinfo">
        <!-- 總價計算 -->
        <div class="total">
          <Total />
        </div>
        <div class="tradeWay my-2">
          <!-- 交易方式區域 -->
          <h6 class="fw-bold">交易方式 : </h6>
          <select name="" id="" disabled>
            <option value="0">宅配-貨到付款</option>
          </select>
        </div>
      </div>

    </div>


  </div>
</template>

<style lang="scss" scoped>
.carContent {
  display: flex;
  width: 100%;
  height: 30rem;
}

.card-area {
  width: 70%;
  height: 100%;
  border-radius: 3px;
  background-color: #efe8e8;
  // overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 2%;



  .buyinfo {
    width: 100%;
    height: 30rem;
    flex-direction: column;
    display: flex;
    align-items: center;
    padding-top: 2%;

    .buyItemBlock {
      width: 100%;
      height: 25rem;
      overflow: auto;
      border: 2px solid rgb(87, 85, 85);
      border-radius: 5px;
    }
  }

  .priceinfo {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;

    .total {
      width: 50%;
    }

    .tradeWay {
      width: 50%;
      // height: 60%;
      // border: 1px solid black;
      display: flex;
      justify-content: end;
      padding: 0.5%;

      select {
        font-size: 18px;
        margin: 0 20px;
        width: 14vw;
        height: 2vw;
        text-align: center;
        background-color: rgb(182, 179, 179);
      }

      h6 {
        font-size: 28px;
      }
    }



  }
}

.logistic {
  width: 30%;
  height: 100%;
  position: relative;

  .logistic-detail {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border-radius: 3px;
    margin-top: 20px;

    .logistic-detail-input {
      width: 100%;
      margin-bottom: 3px;

      label {
        font-size: 15px;
      }

      input {
        width: 100%;
        height: 2vw;
        font-size: 13px;
        text-align: left;
      }


    }

  }

  .bottom {
    width: 20w;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    right: 0;

    .requestCheckBtn {
      color: beige;
      transition: 0.5s;
      width: 10vw;
      height: 2vw;
      background-color: #3e3d3d;
      border-radius: 3px;
      border: 1px solid #f9f9f8;

      &:hover {
        cursor: pointer; //會有手手
        background-color: beige;
        color: #544036;
      }

      &:active {
        scale: 0.9; //點擊後縮放
      }
    }
  }

}
</style>
