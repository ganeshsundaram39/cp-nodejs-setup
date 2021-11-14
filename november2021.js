exports.CHEAPFUEL = ({ readLine }) => {
  let [n] = readLine();
  n = +n;
  let petrol = 0,
    diesel = 0,
    prices;
  let obj = {};
  for (let i = 0; i < n; i++) {
    prices = readLine();

    let str = prices[0] + "-" + prices[4] + "-" + prices[2];

    if (obj[str]) {
      petrol = obj[str];
    } else {
      petrol = +prices[0] + +prices[4] * +prices[2];
      obj[str] = petrol;
    }

    let str1 = prices[1] + "-" + prices[4] + "-" + prices[3];

    if (obj[str1]) {
      diesel = obj[str1];
    } else {
      diesel = +prices[1] + +prices[4] * +prices[3];
      obj[str1] = petrol;
    }

    if (petrol === diesel) {
      console.log("SAME PRICE");
    } else if (petrol < diesel) {
      console.log("PETROL");
    } else if (diesel < petrol) {
      console.log("DIESEL");
    }
  }
};

exports.EQUALCOIN = ({ readLine }) => {
  let [n] = readLine();
  n = +n;
  let obj2 = {},coins,second,coin0,coin1;
  for (let i = 0; i < n; i++) {
     coins = readLine();
     coin1 = coins[1]
     coin0 = coins[0]
    if (obj2[coin1]) {
      second = obj2[coin1];
    } else {
      second = obj2[coin1] = +coin1 * 2;
    }
    console.log((second>2  ||coin0>0)&&( (+coin0 + second) % 2 === 0) ? "YES" : "NO");
  }
};
