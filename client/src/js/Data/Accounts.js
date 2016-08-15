export const Accounts = () => { return [{
  id: 0,
  nick: "Chickeno",
  daysLeft: Math.floor(Math.random()*30)+1,
  currentTransfer: Math.floor(Math.random()*100),
  maxTransfer: 100,
  registrationDate: "15.08.2015",
  endPremium: "31.08.2016",
  amountData: Math.floor(Math.random()*1000),
  color: "#22baa0"
},
{
  id: 1,
  nick: "Kuchasz",
  daysLeft: Math.floor(Math.random()*30)+1,
  currentTransfer: Math.floor(Math.random()*100),
  maxTransfer: "100",
  registrationDate: "10.06.2015",
  endPremium: "28.08.2016",
  amountData: Math.floor(Math.random()*1000),
  color: "#f14e69"
}
]};
