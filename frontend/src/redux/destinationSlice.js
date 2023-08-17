import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Zhangye Danxia Geopark, China",
    description:
      "Geology lovers and avid Instagrammers alike will be drawn to the otherworldly hues of the Rainbow Mountains.",
    thumbnail:
      "https://hips.hearstapps.com/hmg-prod/images/hbz-zhangye-gettyimages-175323801-1505334995.jpg?crop=1xw:1xh;center,top&resize=980:*",
    review: [
      {
        id: 1,
        user: "soultan",
        rating: 4,
        description: "Very beautiful!",
      },
    ],
  },
  {
    id: 2,
    title: "Venice, Italy",
    description:
      "If traversing the canals with a be-striped gondolier sounds unbearably touristy, stick to the sidewalks and spectacular arched bridges to get your fill of this truly unique, wildly romantic floating city.",
    thumbnail:
      "https://hips.hearstapps.com/hmg-prod/images/hbz-venice-gettyimages-489741024-1505338894.jpg?crop=1xw:1xh;center,top&resize=980:*",
    review: [],
  },
  {
    id: 3,
    title: "Banff National Park, Canada",
    description:
      "The glacial lakes in Canada's first national park have some of the bluest water you've ever seen.",
    thumbnail:
      "https://hips.hearstapps.com/hmg-prod/images/banff-517747003-1494616292.jpg?crop=0.9997418022205009xw:1xh;center,top&resize=980:*",
    review: [],
  },
  {
    id: 4,
    title: "Great Ocean Road, Australia",
    description:
      "Head west from Melbourne on this coastal drive to see everything from the famous 12 Apostle rock formations, to koalas in Great Otway National Park as well as the charming seaside town of Lorne.",
    thumbnail:
      "https://hips.hearstapps.com/hmg-prod/images/great-ocean-road-128394846-1494616348.jpg?crop=1xw:1xh;center,top&resize=980:*",
    review: [],
  },
  {
    id: 5,
    title: "Machu Picchu",
    description:
      "This World Heritage site is easily the most famous spot in Peru, and for good reason.",
    thumbnail:
      "https://hips.hearstapps.com/hmg-prod/images/hbz-machu-ppichu-gettyimages-629556601-1505338681.jpg?crop=1xw:1xh;center,top&resize=980:*",
    review: [],
  },
];

export const destinationSlice = createSlice({
  name: "destination",
  initialState,
  reducers: {
    addDestination: (state, action) => {
      state.push(action.payload);
    },
    addReview: (state, action) => {
      state[action.payload.index] = action.payload;
    },
  },
});

export const { addDestination, addReview } = destinationSlice.actions;

export default destinationSlice.reducer;
