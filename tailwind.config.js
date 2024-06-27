/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#0e0e0e',
        'background': '#f9fafa',
        'primary': '#cd8e4a',
        'secondary': '#e9bf92',
        'accent': '#e7a05',
        'backgroundLow': '#fcf9f6',
        "midblue":'#5d79e5',
        "lightblue":'#8d9ee1',
        'SmallText':"#080a0a",
        "background3":"#fbfcfc",
        "textColor":"#B88284",
        'background4': '#f9faf8',
        "accent2":"#B0C2BA"

       },
       boxShadow:{
        "inset":" -14px 16px 0px -7px rgba(0,0,0,1) ,14px -16px 0px -7px rgba(0,0,0,1)"
       }
       
    },
  },
  plugins: [],
}

